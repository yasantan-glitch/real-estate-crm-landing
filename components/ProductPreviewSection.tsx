/**
 * "Ürünü görün" — static composition of real product screenshots inside
 * device frames (laptop centered/back, tablet right, phone left/front), with
 * a soft blurred screenshot collage in the background.
 */

import Image from "next/image";
import DeviceFrame from "@/components/DeviceFrame";
import { productPreview } from "@/content/landing";

const BG_LAYOUT = [
  "left-[-6%] top-[2%] w-[30%] rotate-[-8deg]",
  "right-[-4%] top-[-4%] w-[26%] rotate-[6deg]",
  "left-[10%] bottom-[-6%] w-[24%] rotate-[4deg]",
  "right-[6%] bottom-[-8%] w-[28%] rotate-[-5deg]",
  "left-[38%] top-[38%] w-[22%] rotate-[10deg]",
];

export default function ProductPreviewSection() {
  const { eyebrow, title, text, devices, backgroundImages } = productPreview;
  const laptop = devices.find((d) => d.device === "laptop")!;
  const tablet = devices.find((d) => d.device === "tablet")!;
  const phone = devices.find((d) => d.device === "phone")!;

  return (
    <section className="overflow-hidden bg-white">
      <div className="section">
        <div className="mx-auto mb-12 max-w-[820px] text-center">
          <p className="eyebrow justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="h2 sm:whitespace-nowrap !text-[30px]">{title}</h2>
          <p className="mx-auto mt-4 max-w-[640px] text-base leading-relaxed text-slate-600">{text}</p>
        </div>

        <div className="relative mx-auto max-w-[880px] px-4 py-10 sm:py-16">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            {backgroundImages.map((src, i) => (
              <div
                key={src}
                className={`absolute aspect-video overflow-hidden rounded-2xl ${BG_LAYOUT[i]}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="260px"
                  className="object-cover opacity-20 blur-sm grayscale"
                />
              </div>
            ))}
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative z-0 w-[74%] sm:w-[62%]">
              <DeviceFrame priority {...laptop} />
            </div>

            <div className="absolute right-[-2%] top-[16%] z-10 w-[32%] rotate-[4deg] sm:w-[27%]">
              <DeviceFrame imgClassName="object-top" {...tablet} />
            </div>

            <div className="absolute left-[-2%] bottom-[-4%] z-20 w-[24%] -rotate-6 sm:w-[20%]">
              <DeviceFrame imgClassName="object-right" {...phone} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
