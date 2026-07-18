"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { demoForm } from "@/content/landing";

type FieldName =
  | "fullName"
  | "company"
  | "phone"
  | "email"
  | "city"
  | "agentCount"
  | "message";

type FormState = Record<FieldName, string>;

const initialState: FormState = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  city: "",
  agentCount: "",
  message: "",
};

const REQUIRED: FieldName[] = ["fullName", "company", "phone", "email", "city", "agentCount"];

function validateField(name: FieldName, value: string): string | null {
  const v = value.trim();
  if (REQUIRED.includes(name) && !v) return demoForm.validation.required;
  if (name === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
    return demoForm.validation.email;
  if (name === "phone" && v && !/^[+\d][\d\s().-]{8,}$/.test(v))
    return demoForm.validation.phone;
  return null;
}

export default function DemoForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const set = (name: FieldName) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [name]: e.target.value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: Partial<FormState> = {};
    (Object.keys(form) as FieldName[]).forEach((name) => {
      const err = validateField(name, form[name]);
      if (err) nextErrors[name] = err;
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch(siteConfig.demoFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "landing-page" }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  const inputClass = (name: FieldName) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent ${
      errors[name] ? "border-red-400" : "border-slate-300"
    }`;

  const FieldError = ({ name }: { name: FieldName }) =>
    errors[name] ? (
      <p className="mt-1 text-xs text-red-600" role="alert">
        {errors[name]}
      </p>
    ) : null;

  return (
    <section id="demo" className="scroll-mt-16 bg-brand">
      <div className="section grid gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {demoForm.eyebrow}
          </p>
          <h2 className="h2 !text-white">{demoForm.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">{demoForm.intro}</p>
          <div className="mt-8 space-y-2 text-sm text-slate-300">
            <p>
              E-posta:{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-white underline underline-offset-2">
                {siteConfig.contactEmail}
              </a>
            </p>
            <p>
              Telefon:{" "}
              <a href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`} className="text-white underline underline-offset-2">
                {siteConfig.contactPhone}
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center" role="status">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <p className="max-w-sm text-sm leading-relaxed text-slate-700">{demoForm.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-xs font-semibold text-brand">
                    {demoForm.labels.fullName} *
                  </label>
                  <input id="fullName" name="fullName" type="text" autoComplete="name"
                    placeholder={demoForm.placeholders.fullName}
                    value={form.fullName} onChange={set("fullName")} className={inputClass("fullName")} />
                  <FieldError name="fullName" />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-brand">
                    {demoForm.labels.company} *
                  </label>
                  <input id="company" name="company" type="text" autoComplete="organization"
                    placeholder={demoForm.placeholders.company}
                    value={form.company} onChange={set("company")} className={inputClass("company")} />
                  <FieldError name="company" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-brand">
                    {demoForm.labels.phone} *
                  </label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel"
                    placeholder={demoForm.placeholders.phone}
                    value={form.phone} onChange={set("phone")} className={inputClass("phone")} />
                  <FieldError name="phone" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-brand">
                    {demoForm.labels.email} *
                  </label>
                  <input id="email" name="email" type="email" autoComplete="email"
                    placeholder={demoForm.placeholders.email}
                    value={form.email} onChange={set("email")} className={inputClass("email")} />
                  <FieldError name="email" />
                </div>
                <div>
                  <label htmlFor="city" className="mb-1.5 block text-xs font-semibold text-brand">
                    {demoForm.labels.city} *
                  </label>
                  <input id="city" name="city" type="text"
                    placeholder={demoForm.placeholders.city}
                    value={form.city} onChange={set("city")} className={inputClass("city")} />
                  <FieldError name="city" />
                </div>
                <div>
                  <label htmlFor="agentCount" className="mb-1.5 block text-xs font-semibold text-brand">
                    {demoForm.labels.agentCount} *
                  </label>
                  <select id="agentCount" name="agentCount"
                    value={form.agentCount} onChange={set("agentCount")} className={inputClass("agentCount")}>
                    <option value="">{demoForm.placeholders.agentCount}</option>
                    {demoForm.agentCountOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <FieldError name="agentCount" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-brand">
                    {demoForm.labels.message}
                  </label>
                  <textarea id="message" name="message" rows={3}
                    placeholder={demoForm.placeholders.message}
                    value={form.message} onChange={set("message")} className={inputClass("message")} />
                </div>
              </div>

              {status === "error" && (
                <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                  {demoForm.error}
                </p>
              )}

              <button type="submit" disabled={status === "submitting"} className="btn-primary mt-6 w-full disabled:opacity-60">
                {status === "submitting" ? demoForm.submitting : demoForm.submit}
              </button>
              <p className="mt-3 text-center text-xs text-slate-400">{demoForm.kvkkNote}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
