import Image from "next/image";
import { successStory, successStoryBackLink } from "@/content/success-story";
import type { SuccessStoryModule } from "@/content/success-story";
import { reveal, scrub, scrubMedia, stagger } from "@/lib/motion";

function ModuleSection({ module }: { module: SuccessStoryModule }) {
  return (
    <div className="border-t border-line py-10 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-6 md:flex-row md:gap-10">
        <div className="shrink-0 md:w-56">
          <span className="font-display text-sm font-bold tracking-wide text-accent">{module.index}</span>
          <h3 className="mt-2 text-xl font-bold text-brand" {...reveal("mask")}>{module.title}</h3>
        </div>
        <div className="flex-1">
          <p className="max-w-2xl text-[15px] leading-relaxed text-slate-600">{module.description}</p>
          {module.images.length > 0 && (
            <div className="mt-6 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
              {module.images.map((image) => (
                <div
                  key={image.src + image.alt}
                  className="relative aspect-video overflow-hidden border border-line bg-white shadow-card"
                  {...scrub("unveil-soft")}
                >
                  <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 33vw, 90vw" className="object-cover" {...scrubMedia} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SuccessStoryPageTemplate() {
  const { eyebrow, title, introColumns, heroImage, problem, approach, modules, results, client, cta } = successStory;

  return (
    <main>
      {/* --- Hero --- */}
      <section className="bg-white">
        <div className="section !pb-10">
          <div className="mx-auto max-w-3xl text-center">
            <a href={successStoryBackLink.href} className="text-sm font-semibold text-accent">
              {successStoryBackLink.label}
            </a>
            <p className="mt-4 eyebrow justify-center">{eyebrow}</p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand md:text-5xl">{title}</h1>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2">
            {introColumns.map((text) => (
              <p key={text} className="text-base leading-relaxed text-slate-600">
                {text}
              </p>
            ))}
          </div>
          <figure className="mx-auto mt-12 max-w-4xl">
            <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface shadow-card">
              <Image src={heroImage.src} alt={heroImage.alt} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-cover" priority />
            </div>
            <figcaption className="mt-3 text-center text-xs font-semibold uppercase tracking-wide text-muted">
              {heroImage.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* --- Problem / Yaklaşım --- */}
      <section className="border-y border-line bg-surface">
        <div className="section grid gap-8 sm:grid-cols-2" {...stagger("up")}>
          <div>
            <span className="font-display text-sm font-bold tracking-wide text-accent">{problem.label}</span>
            <h2 className="mt-2 text-xl font-bold uppercase tracking-wide text-brand">{problem.title}</h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">{problem.text}</p>
          </div>
          <div>
            <span className="font-display text-sm font-bold tracking-wide text-accent">{approach.label}</span>
            <h2 className="mt-2 text-xl font-bold uppercase tracking-wide text-brand">{approach.title}</h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">{approach.text}</p>
          </div>
        </div>
      </section>

      {/* --- Modül modül --- */}
      <section className="bg-white">
        <div className="section">
          <h2 className="h2 text-center" {...reveal("mask")}>Modül Modül</h2>
          <div className="mt-10">
            {modules.map((module) => (
              <ModuleSection key={module.index} module={module} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Sonuç rozetleri + müşteri --- */}
      <section className="border-t border-line bg-surface">
        <div className="section text-center">
          <div className="flex flex-wrap items-center justify-center gap-3" {...stagger("fade")}>
            {results.map((result) => (
              <span
                key={result.label}
                className="rounded-full border border-accent/40 bg-accent-tint px-4 py-1.5 text-xs font-bold tracking-wide text-brand"
              >
                {result.label}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3" {...reveal("up")}>
            <Image src={client.logo} alt={client.name} width={160} height={48} className="h-10 w-auto opacity-80" />
            <p className="text-sm text-muted">{client.note}</p>
          </div>
        </div>
      </section>

      {/* --- Kapanış CTA --- */}
      <section className="border-t border-line bg-brand">
        <div className="section text-center">
          <h2 className="h2 !text-white" {...reveal("mask")}>{cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400" {...reveal("up")}>{cta.text}</p>
          <div className="mt-8" {...reveal("settle")}>
            <a href={cta.href} className="btn-primary">
              {cta.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
