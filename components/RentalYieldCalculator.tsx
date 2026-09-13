"use client";

import { useMemo, useState } from "react";
import { rentalYieldCalculatorPage } from "@/content/landing";

const { calculator } = rentalYieldCalculatorPage;

function digitsOnly(value: string): string {
  return value.replace(/[^\d]/g, "");
}

function formatThousands(value: string): string {
  if (!value) return "";
  return Number(value).toLocaleString("tr-TR");
}

function formatPercent(value: number): string {
  return `%${value.toLocaleString("tr-TR", { maximumFractionDigits: 2 })}`;
}

function formatYears(value: number): string {
  return `${value.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} yıl`;
}

export default function RentalYieldCalculator() {
  const [rawPrice, setRawPrice] = useState("");
  const [rawRent, setRawRent] = useState("");

  const { grossYield, paybackYears } = useMemo(() => {
    const price = Number(rawPrice) || 0;
    const rent = Number(rawRent) || 0;
    const annualRent = rent * 12;
    return {
      grossYield: price > 0 ? (annualRent / price) * 100 : 0,
      paybackYears: annualRent > 0 ? price / annualRent : 0,
    };
  }, [rawPrice, rawRent]);

  const inputClass =
    "w-full rounded-[10px] border-[1.5px] border-line bg-white px-4 py-3 text-sm text-brand placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent";

  return (
    <div className="card">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="price" className="mb-1.5 block text-xs font-semibold text-slate-600">
            {calculator.priceLabel} (₺)
          </label>
          <input
            id="price"
            type="text"
            inputMode="numeric"
            placeholder={calculator.pricePlaceholder}
            value={formatThousands(rawPrice)}
            onChange={(e) => setRawPrice(digitsOnly(e.target.value))}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="rent" className="mb-1.5 block text-xs font-semibold text-slate-600">
            {calculator.rentLabel} (₺)
          </label>
          <input
            id="rent"
            type="text"
            inputMode="numeric"
            placeholder={calculator.rentPlaceholder}
            value={formatThousands(rawRent)}
            onChange={(e) => setRawRent(digitsOnly(e.target.value))}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-8 border-t border-line pt-6">
        <p className="text-xs font-bold uppercase tracking-[0.06em] text-muted">
          {calculator.resultTitle}
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-accent/40 bg-accent-tint p-4">
            <p className="text-[13px] text-slate-600">{calculator.resultLabels.grossYield}</p>
            <p className="mt-1 text-lg font-extrabold text-accent">{formatPercent(grossYield)}</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-4">
            <p className="text-[13px] text-slate-600">{calculator.resultLabels.paybackYears}</p>
            <p className="mt-1 text-lg font-extrabold text-brand">{formatYears(paybackYears)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
