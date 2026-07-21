import Image from "next/image";
import { siteConfig } from "@/config/site";
import { footer } from "@/content/landing";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(siteConfig.socialLinks).filter(([, url]) => url);

  return (
    <footer className="border-t border-zinc-800 bg-brand">
      <div className="section grid gap-10 !py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="h-[9px] w-[9px] shrink-0 rounded-[3px] bg-accent" aria-hidden="true" />
            <span className="text-lg font-extrabold text-white">{siteConfig.productName}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">{footer.tagline}</p>
          <div className="mt-4 space-y-1 text-sm text-zinc-500">
            <p>{siteConfig.contactEmail}</p>
            <p>{siteConfig.contactPhone}</p>
          </div>
        </div>

        {footer.columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-sm font-bold text-white">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-400 transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-3 px-5 py-5 text-xs text-zinc-500 sm:grid-cols-3 sm:px-8">
          <div className="order-1 flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-5 sm:justify-self-start">
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
          <a
            href="https://www.tanyasan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="order-2 inline-flex justify-self-center"
          >
            <Image src="/logos/tanyasan-logo.avif" alt="Tan Yasan" width={375} height={111} className="h-[22px] w-auto" />
          </a>
          <a
            href="https://www.tanyasan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="order-3 text-[12.5px] text-zinc-500 hover:text-accent sm:justify-self-end"
          >
            {footer.designCredit}
          </a>
        </div>
      </div>
    </footer>
  );
}
