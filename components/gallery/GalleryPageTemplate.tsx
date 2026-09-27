"use client";

/**
 * Full-page CRM gallery (/crm-galerisi): every module from
 * content/product-gallery.ts, one at a time, with every one of its
 * screenshots shown large (not a single stage image like the homepage
 * section). Tabs still pick the module; clicking any image opens the shared
 * lightbox, which walks every image on the page in order regardless of which
 * module is active. Images are square-cornered by design (no rounded).
 */

import Image from "next/image";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import SectionHeading from "@/components/SectionHeading";
import Tabs from "@/components/ui/Tabs";
import { galleryPage } from "@/content/gallery-page";
import { productGallery, type GalleryModuleId } from "@/content/product-gallery";
import { reveal, stagger } from "@/lib/motion";

const { modules, images, labels } = productGallery;

const ID_PREFIX = "crm-galerisi";
const IMAGE_SIZES = "(min-width: 1152px) 1088px, (min-width: 640px) calc(100vw - 64px), 100vw";

const moduleLabel = (id: GalleryModuleId) => modules.find((m) => m.id === id)?.label ?? id;

const lightboxSlides = images.map((image) => ({
  src: image.src,
  width: image.width,
  height: image.height,
  alt: image.alt,
  caption: { label: moduleLabel(image.module), text: image.caption },
}));

export default function GalleryPageTemplate() {
  const [activeModule, setActiveModule] = useState<GalleryModuleId>(modules[0].id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [koyuTitles, setKoyuTitles] = useState<Set<string>>(new Set());

  const toggleTheme = (title: string) => {
    setKoyuTitles((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  // Screens are grouped by title within a module: an "acik" image plus its
  // optional "koyu" twin. Only one of the pair renders at a time, toggled by
  // koyuTitles; the lightbox still walks every image (both themes).
  const acikScreens = images.filter(
    (image) => image.module === activeModule && image.theme === "acik"
  );
  const moduleImages = acikScreens.map((acikImage) => {
    const koyuImage = images.find(
      (image) =>
        image.module === activeModule && image.theme === "koyu" && image.title === acikImage.title
    );
    const showKoyu = koyuImage && koyuTitles.has(acikImage.title);
    return { display: showKoyu ? koyuImage : acikImage, koyuImage };
  });

  return (
    <main>
      {/* --- Intro --- */}
      <section className="bg-white">
        <div className="section !pb-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">{galleryPage.eyebrow}</p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand md:text-5xl">
              {galleryPage.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{galleryPage.intro}</p>
          </div>
        </div>
      </section>

      {/* --- Gallery --- */}
      <section
        id="crm-galerisi"
        aria-labelledby={`${ID_PREFIX}-baslik`}
        className="border-y border-line bg-gallery-surface"
      >
        <div className="section">
          <SectionHeading title={productGallery.title} intro={productGallery.intro} titleId={`${ID_PREFIX}-baslik`} center />

          <div className="mt-10" {...reveal("up")}>
            <Tabs
              items={modules}
              activeId={activeModule}
              onChange={(id) => setActiveModule(id as GalleryModuleId)}
              idPrefix={ID_PREFIX}
              ariaLabel={productGallery.tabsLabel}
            />
          </div>

          <div
            role="tabpanel"
            id={`${ID_PREFIX}-panel`}
            aria-labelledby={`${ID_PREFIX}-tab-${activeModule}`}
            className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2"
            {...stagger("settle")}
          >
            {moduleImages.map(({ display: image, koyuImage }) => (
              <figure key={image.title}>
                <button
                  type="button"
                  aria-label={`${labels.openImage}: ${image.title}`}
                  onClick={() => setLightboxIndex(images.indexOf(image))}
                  className="group relative block aspect-[48/25] w-full cursor-zoom-in overflow-hidden bg-brand-soft shadow-pop focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={IMAGE_SIZES}
                    draggable={false}
                    className="select-none object-cover object-left-top"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center bg-brand/80 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                      <path
                        d="M12 3.5h4.5V8M8 16.5H3.5V12M16.5 3.5 11 9M3.5 16.5 9 11"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <figcaption className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[16.5px] font-bold text-brand">{image.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{image.caption}</p>
                  </div>
                  {koyuImage && (
                    <button
                      type="button"
                      onClick={() => toggleTheme(image.title)}
                      aria-label={`${labels.theme[image.theme === "acik" ? "koyu" : "acik"]} ${labels.theme.switchTo}`}
                      className="shrink-0 whitespace-nowrap border border-line px-3 py-1.5 text-xs font-semibold text-brand transition-colors hover:bg-brand-soft"
                    >
                      {image.theme === "acik" ? labels.theme.koyu : labels.theme.acik}
                    </button>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* --- Closing CTA --- */}
      <section className="border-t border-line bg-brand">
        <div className="section text-center">
          <h2 className="h2 !text-white" {...reveal("mask")}>{galleryPage.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400" {...reveal("up")}>
            {galleryPage.cta.text}
          </p>
          <div className="mt-8" {...reveal("settle")}>
            <a href={galleryPage.cta.href} className="btn-primary">
              {galleryPage.cta.label}
            </a>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <ImageLightbox
          slides={lightboxSlides}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
          label={labels.lightbox.dialog}
          closeLabel={labels.lightbox.close}
          prevLabel={labels.lightbox.prev}
          nextLabel={labels.lightbox.next}
        />
      )}
    </main>
  );
}
