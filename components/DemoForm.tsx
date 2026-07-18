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
    `w-full rounded-md border bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent ${
      errors[name] ? "border-red-400" : "border-white/20"
    }`;

  const FieldError = ({ name }: { name: FieldName }) =>
    errors[name] ? (
      <p className="mt-1 text-xs text-red-300" role="alert">
        {errors[name]}
      </p>
    ) : null;

  return (
    <section id="demo" className="scroll-mt-16 bg-brand-soft">
      <div className="section grid gap-12 md:grid-cols-2">
        <div className="flex flex-col">
          <p className="eyebrow items-start">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {demoForm.eyebrow}
          </p>
          <h2 className="h2 !text-white">{demoForm.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">{demoForm.intro}</p>
          <div className="mt-10 space-y-2 border-t border-white/15 pt-6 text-sm text-slate-300 md:mt-auto">
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

        <div>
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center" role="status">
              <span className="mb-4 text-2xl text-accent" aria-hidden="true">
                ✓
              </span>
              <p className="max-w-sm text-sm leading-relaxed text-slate-200">{demoForm.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-xs font-semibold text-slate-200">
                    {demoForm.labels.fullName} *
                  </label>
                  <input id="fullName" name="fullName" type="text" autoComplete="name"
                    placeholder={demoForm.placeholders.fullName}
                    value={form.fullName} onChange={set("fullName")} className={inputClass("fullName")} />
                  <FieldError name="fullName" />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-slate-200">
                    {demoForm.labels.company} *
                  </label>
                  <input id="company" name="company" type="text" autoComplete="organization"
                    placeholder={demoForm.placeholders.company}
                    value={form.company} onChange={set("company")} className={inputClass("company")} />
                  <FieldError name="company" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-slate-200">
                    {demoForm.labels.phone} *
                  </label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel"
                    placeholder={demoForm.placeholders.phone}
                    value={form.phone} onChange={set("phone")} className={inputClass("phone")} />
                  <FieldError name="phone" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-slate-200">
                    {demoForm.labels.email} *
                  </label>
                  <input id="email" name="email" type="email" autoComplete="email"
                    placeholder={demoForm.placeholders.email}
                    value={form.email} onChange={set("email")} className={inputClass("email")} />
                  <FieldError name="email" />
                </div>
                <div>
                  <label htmlFor="city" className="mb-1.5 block text-xs font-semibold text-slate-200">
                    {demoForm.labels.city} *
                  </label>
                  <input id="city" name="city" type="text"
                    placeholder={demoForm.placeholders.city}
                    value={form.city} onChange={set("city")} className={inputClass("city")} />
                  <FieldError name="city" />
                </div>
                <div>
                  <label htmlFor="agentCount" className="mb-1.5 block text-xs font-semibold text-slate-200">
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
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-slate-200">
                    {demoForm.labels.message}
                  </label>
                  <textarea id="message" name="message" rows={3}
                    placeholder={demoForm.placeholders.message}
                    value={form.message} onChange={set("message")} className={inputClass("message")} />
                </div>
              </div>

              {status === "error" && (
                <p className="mt-4 border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-300" role="alert">
                  {demoForm.error}
                </p>
              )}

              <button type="submit" disabled={status === "submitting"} className="btn-primary mt-6 w-full disabled:opacity-60">
                {status === "submitting" ? demoForm.submitting : demoForm.submit}
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">{demoForm.kvkkNote}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
