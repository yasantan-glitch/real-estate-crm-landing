import { siteConfig } from "@/config/site";
import { footer } from "@/content/landing";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(siteConfig.socialLinks).filter(([, url]) => url);

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section grid gap-10 !py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand text-sm font-bold text-white">
              {siteConfig.productName.replace(/[\[\]]/g, "").charAt(0) || "C"}
            </span>
            <span className="text-lg font-semibold text-brand">{siteConfig.productName}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">{footer.tagline}</p>
          <div className="mt-4 space-y-1 text-sm text-slate-600">
            <p>{siteConfig.contactEmail}</p>
            <p>{siteConfig.contactPhone}</p>
          </div>
        </div>

        {footer.columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-sm font-semibold text-brand">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-600 transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:px-8">
          <p>
            © {year} {siteConfig.companyName}. {footer.rights}
          </p>
          <div className="flex gap-5">
            {footer.legal.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-brand">
                {l.label}
              </a>
            ))}
            {socials.map(([name, url]) => (
              <a key={name} href={url} className="capitalize hover:text-brand" target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
