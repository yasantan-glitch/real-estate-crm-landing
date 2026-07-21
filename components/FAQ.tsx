"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { faq } from "@/content/landing";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="sss" className="scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-[840px] px-5 py-16 sm:px-8 md:py-24">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} center />
        <div className="mt-12">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                 <span className="text-[15.5px] font-bold text-brand transition-colors group-hover:text-accent">{item.q}</span>
                  <span
                    className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-surface text-base font-bold text-accent transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && <p className="max-w-[680px] pb-5 text-[14.5px] leading-relaxed text-slate-500">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
