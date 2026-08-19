import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { contact } from "@/content/landing";

const canonicalUrl = `${siteConfig.siteUrl}/iletisim`;

export const metadata: Metadata = {
  title: contact.seo.title,
  description: contact.seo.description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: contact.seo.title,
    description: contact.seo.description,
    url: canonicalUrl,
    siteName: siteConfig.productName,
  },
};

const telHref = `tel:${siteConfig.contactPhone.replace(/\s/g, "")}`;
const mailHref = `mailto:${siteConfig.contactEmail}`;
const waHref = `https://wa.me/${siteConfig.contactPhone.replace(/\D/g, "")}`;

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* --- Intro --- */}
        <section className="bg-white">
          <div className="section !pb-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {contact.eyebrow}
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand md:text-5xl">
                {contact.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{contact.intro}</p>
            </div>
          </div>
        </section>

        {/* --- Direct channels --- */}
        <section className="border-y border-line bg-surface">
          <div className="section">
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href={telHref}
                className="rounded-2xl border border-line bg-white p-6 text-center transition-colors hover:border-brand"
              >
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-accent">
                  {contact.directChannels.phoneLabel}
                </p>
                <p className="mt-2 text-[15.5px] font-bold text-brand">{siteConfig.contactPhone}</p>
              </a>
              <a
                href={mailHref}
                className="rounded-2xl border border-line bg-white p-6 text-center transition-colors hover:border-brand"
              >
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-accent">
                  {contact.directChannels.emailLabel}
                </p>
                <p className="mt-2 text-[15.5px] font-bold text-brand">{siteConfig.contactEmail}</p>
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-line bg-white p-6 text-center transition-colors hover:border-brand"
              >
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-accent">
                  {contact.directChannels.whatsappLabel}
                </p>
                <p className="mt-2 text-[15.5px] font-bold text-brand">{siteConfig.contactPhone}</p>
                <p className="mt-1 text-[12.5px] text-slate-500">{contact.directChannels.whatsappNote}</p>
              </a>
            </div>
          </div>
        </section>

        {/* --- Which department --- */}
        <section className="bg-white">
          <div className="section">
            <div className="grid gap-5 sm:grid-cols-2">
              {contact.categories.map((item) => (
                <div key={item.title} className="rounded-[20px] border border-line bg-surface p-8 shadow-card">
                  <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand">{item.title}</h2>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">{item.text}</p>
                  <a
                    href={item.href === "whatsapp" ? waHref : item.href}
                    target={item.href === "whatsapp" ? "_blank" : undefined}
                    rel={item.href === "whatsapp" ? "noopener noreferrer" : undefined}
                    className="btn-primary mt-6 gap-2"
                  >
                    {item.ctaLabel} <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-line bg-white p-6 text-center">
              <h3 className="text-[15px] font-bold text-brand">{contact.serviceArea.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">{contact.serviceArea.text}</p>
            </div>
          </div>
        </section>

        {/* --- Contact FAQ --- */}
        <section className="border-t border-line bg-surface">
          <div className="mx-auto w-full max-w-[720px] px-5 py-16 sm:px-8 md:py-20">
            <h2 className="h2 text-center">{contact.faq.title}</h2>
            <div className="mt-10 divide-y divide-line">
              {contact.faq.items.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[15.5px] font-bold text-brand marker:content-none">
                    {item.q}
                    <span
                      className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-accent transition-transform duration-200 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[640px] text-[14.5px] leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
