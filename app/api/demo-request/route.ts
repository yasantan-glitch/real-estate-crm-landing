import { NextResponse } from "next/server";

/**
 * Demo request handler (MVP).
 *
 * Delivery strategy:
 *  1. If RESEND_API_KEY is set -> send a notification email via Resend REST API
 *     (no SDK dependency; plain fetch).
 *  2. Otherwise -> log the lead server-side and still return success, so the
 *     site works out of the box before any provider is configured.
 *
 * Later: replace/extend `deliverLead` to insert into the CRM's Supabase
 * `leads` table — the frontend contract stays identical.
 */

type LeadPayload = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  agentCount: string;
  message?: string;
  source?: string;
};

const REQUIRED: (keyof LeadPayload)[] = [
  "fullName",
  "company",
  "phone",
  "email",
  "city",
  "agentCount",
];

function validate(body: Partial<LeadPayload>): string | null {
  for (const field of REQUIRED) {
    if (!body[field] || String(body[field]).trim() === "") {
      return `Missing required field: ${field}`;
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(body.email))) {
    return "Invalid email";
  }
  return null;
}

async function deliverLead(lead: LeadPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Fallback: visible in Vercel function logs until a provider is configured.
    console.log("[demo-request] New lead (no email provider configured):", lead);
    return;
  }

  const to = process.env.DEMO_NOTIFY_TO || "demo@example.com";
  const from = process.env.DEMO_NOTIFY_FROM || "onboarding@resend.dev";

  const html = `
    <h2>Yeni Demo Talebi</h2>
    <ul>
      <li><strong>Ad Soyad:</strong> ${escapeHtml(lead.fullName)}</li>
      <li><strong>Firma:</strong> ${escapeHtml(lead.company)}</li>
      <li><strong>Telefon:</strong> ${escapeHtml(lead.phone)}</li>
      <li><strong>E-posta:</strong> ${escapeHtml(lead.email)}</li>
      <li><strong>Şehir:</strong> ${escapeHtml(lead.city)}</li>
      <li><strong>Danışman Sayısı:</strong> ${escapeHtml(lead.agentCount)}</li>
      <li><strong>Mesaj:</strong> ${escapeHtml(lead.message || "-")}</li>
    </ul>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email,
      subject: `Demo Talebi: ${lead.company} (${lead.city})`,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Resend API error ${res.status}: ${detail}`);
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Partial<LeadPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 422 });
  }

  try {
    await deliverLead(body as LeadPayload);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[demo-request] Delivery failed:", err);
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 500 });
  }
}
