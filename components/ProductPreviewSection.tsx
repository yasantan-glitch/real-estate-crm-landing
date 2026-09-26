/**
 * "Ürünü görün" — hero-like composition: eyebrow + title + text on the left,
 * the desk photo (laptop + tablet + phone) on the right, both inside the
 * section container. From lg the photo spans the full container width and
 * the copy sits on top of it, in the photo's empty top-left quadrant (left
 * of the laptop screen, above the plant) — so the devices stay large and
 * close to the text. `.photo-blend` feathers the photo's tinted edges into
 * the white section. On mobile the copy stacks above a full-bleed crop that
 * drops the empty area (object-right).
 *
 * Not `priority`: the section sits well below the fold, so it is never the
 * LCP element and should lazy-load.
 *
 * Motion: the photo unveils (square clip opens, image zooms out) and, from
 * lg, the copy drifts over it at a different rate so the two read as
 * separate planes. See lib/motion.ts.
 */

import Image from "next/image";
import { productPreview } from "@/content/landing";
import { reveal, scrub, scrubMedia } from "@/lib/motion";

export default function ProductPreviewSection() {
  const { eyebrow, title, text, image } = productPreview;

  return (
    <section className="overflow-hidden bg-white">
      <div className="section lg:grid lg:!pb-12">
        <div className="relative z-10 max-w-[460px] lg:col-start-1 lg:row-start-1 lg:max-w-[38%] lg:self-start" {...scrub("drift")}>
          <p className="eyebrow" {...reveal("up")}>{eyebrow}</p>
          <h2 className="h2" {...reveal("mask")}>{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600" {...reveal("up")}>{text}</p>
        </div>

        <div className="-mx-5 mt-6 sm:-mx-8 lg:col-start-1 lg:row-start-1 lg:mx-0 lg:mt-10" {...scrub("unveil")}>
          <div className="photo-blend relative aspect-[7/5] sm:aspect-[16/9] lg:aspect-[2/1]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1152px) 1088px, (min-width: 1024px) calc(100vw - 64px), 100vw"
              className="object-cover object-right lg:object-center"
              {...scrubMedia}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
