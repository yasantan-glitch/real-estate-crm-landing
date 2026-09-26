"use client";

/**
 * Product gallery below "Ürünü görün": centered heading, a pill tab per
 * module, and one large "stage" showing the selected screen. Deliberately not
 * a split layout, so it doesn't repeat the section above. The stage has a
 * fixed 48:25 box (the screenshots are ~1.92:1), so switching tabs never
 * shifts layout; object-left-top keeps the sidebar and header in frame when a
 * file's ratio differs by a pixel or two.
 *
 * Only the active module's images are rendered, so a visitor downloads one
 * stage image (plus its thumbs) until they interact. Not preloaded: the
 * section sits well below the fold. Clicking the stage opens the lightbox,
 * which walks all images in order; closing it leaves the stage on the last
 * image viewed. On touch screens a horizontal swipe on the stage switches
 * module. Images are square-cornered by design (no rounded). On scroll the
 * stage stands up from a 3D tilt (see lib/motion.ts); the motion sits on the
 * wrapper, so tab switches never replay it.
 */

import Image from "next/image";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import SectionHeading from "@/components/SectionHeading";
import Tabs from "@/components/ui/Tabs";
import { productGallery, type GalleryModuleId } from "@/content/product-gallery";
import { useSwipe } from "@/lib/useSwipe";
import { reveal, scrub } from "@/lib/motion";

const { eyebrow, title, intro, tabsLabel, modules, images, labels } = productGallery;

const ID_PREFIX = "urun-galerisi";
const STAGE_SIZES = "(min-width: 1152px) 1088px, (min-width: 640px) calc(100vw - 64px), 100vw";

const moduleLabel = (id: GalleryModuleId) => modules.find((m) => m.id === id)?.label ?? id;

const lightboxSlides = images.map((image) => ({
  src: image.src,
  width: image.width,
  height: image.height,
  alt: image.alt,
  caption: { label: moduleLabel(image.module), text: image.caption },
}));

export default function ProductGallerySection() {
  const [activeModule, setActiveModule] = useState<GalleryModuleId>(modules[0].id);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  const moduleImages = images.filter((image) => image.module === activeModule);
  const current = moduleImages[activeIndex] ?? moduleImages[0];

  const selectModule = (id: GalleryModuleId) => {
    setActiveModule(id);
    setActiveIndex(0);
  };

  const stepModule = (step: 1 | -1) => {
    setActiveModule((prev) => {
      const i = modules.findIndex((m) => m.id === prev);
      return modules[(i + step + modules.length) % modules.length].id;
    });
    setActiveIndex(0);
  };

  const { swipeHandlers, consumeSwipe } = useSwipe({
    onSwipeLeft: () => stepModule(1),
    onSwipeRight: () => stepModule(-1),
  });

  const closeLightbox = () => {
    if (lightboxIndex !== null) {
      const last = images[lightboxIndex];
      setActiveModule(last.module);
      setActiveIndex(images.filter((image) => image.module === last.module).indexOf(last));
    }
    setLightboxIndex(null);
  };

  return (
    <section
      id="urun-galerisi"
      aria-labelledby={`${ID_PREFIX}-baslik`}
      className="scroll-mt-24 border-y border-line bg-surface"
    >
      <div className="section">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} titleId={`${ID_PREFIX}-baslik`} center />

        <div className="mt-10" {...reveal("up")}>
          <Tabs
            items={modules}
            activeId={activeModule}
            onChange={(id) => selectModule(id as GalleryModuleId)}
            idPrefix={ID_PREFIX}
            ariaLabel={tabsLabel}
          />
        </div>

        <div
          role="tabpanel"
          id={`${ID_PREFIX}-panel`}
          aria-labelledby={`${ID_PREFIX}-tab-${activeModule}`}
          className="mt-8"
        >
          <div className="-mx-5 sm:mx-0" {...scrub("tilt")}>
            <button
              type="button"
              aria-label={`${labels.openImage}: ${current.title}`}
              onClick={() => {
                if (consumeSwipe()) return;
                setLightboxIndex(images.indexOf(current));
              }}
              {...swipeHandlers}
              className="group relative block aspect-[48/25] w-full cursor-zoom-in touch-pan-y overflow-hidden bg-brand-soft shadow-pop focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:border sm:border-brand/10"
            >
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                sizes={STAGE_SIZES}
                draggable={false}
                onLoad={() => setLoadedSrc(current.src)}
                className={`select-none object-cover object-left-top transition-opacity duration-300 ${
                  loadedSrc === current.src ? "opacity-100" : "opacity-0"
                }`}
              />
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-3 hidden h-9 w-9 items-center justify-center bg-brand/80 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:flex"
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
          </div>

          <div className="mt-5 flex min-h-[10.5rem] flex-col gap-4 lg:min-h-[5rem] lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="max-w-[65ch]">
              <h3 className="text-[16.5px] font-bold text-brand">{current.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{current.caption}</p>
            </div>

            {moduleImages.length > 1 && (
              <div role="group" aria-label={labels.thumbnails} className="flex shrink-0 gap-3">
                {moduleImages.map((image, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={image.src}
                      type="button"
                      aria-label={image.title}
                      aria-pressed={isActive}
                      onClick={() => setActiveIndex(i)}
                      className={`relative aspect-[48/25] w-24 overflow-hidden bg-brand-soft outline outline-2 outline-offset-2 transition-[opacity,outline-color] focus-visible:outline-brand sm:w-32 ${
                        isActive ? "outline-accent" : "opacity-60 outline-transparent hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        sizes="128px"
                        draggable={false}
                        className="object-cover object-left-top"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          slides={lightboxSlides}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={closeLightbox}
          label={labels.lightbox.dialog}
          closeLabel={labels.lightbox.close}
          prevLabel={labels.lightbox.prev}
          nextLabel={labels.lightbox.next}
        />
      )}
    </section>
  );
}
