import Image from "next/image";
import { siteConfig } from "@/config/site";
import { footer } from "@/content/landing";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(siteConfig.socialLinks).filter(([, url]) => url);
  const [creditPrefix, creditSuffix] = footer.designCredit.split("Tan Yasan");

  return (
    <footer className="border-t border-white/15 bg-brand-soft">
      <div className="section grid gap-10 !py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-sm font-bold text-brand">
              {siteConfig.productName.replace(/[\[\]]/g, "").charAt(0) || "C"}
            </span>
            <span className="text-lg font-semibold text-white">{siteConfig.productName}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">{footer.tagline}</p>
          <div className="mt-4 space-y-1 text-sm text-slate-300">
            <p>{siteConfig.contactEmail}</p>
            <p>{siteConfig.contactPhone}</p>
          </div>
        </div>

        {footer.columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-sm font-semibold text-white">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-300 transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-slate-300 sm:flex-row sm:px-8">
          <p>
            © {year} {siteConfig.companyName}. {footer.rights}
          </p>
          <div className="flex gap-5">
            {footer.legal.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-accent">
                {l.label}
              </a>
            ))}
            {socials.map(([name, url]) => (
              <a key={name} href={url} className="capitalize hover:text-accent" target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-5 pb-5 text-xs text-white/60 sm:px-8">
          <Image src="/logos/tanyasan-logo.avif" alt="Tan Yasan logosu" width={375} height={111} className="h-5 w-auto" />
          <p>
            {creditPrefix}
            <a href="https://tanyasan.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              Tan Yasan
            </a>
            {creditSuffix}
          </p>
        </div>
      </div>
    </footer>
  );
}
