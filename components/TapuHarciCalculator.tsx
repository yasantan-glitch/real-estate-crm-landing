"use client";

import { useMemo, useState } from "react";
import { tapuHarciCalculatorPage } from "@/content/landing";
import { formatCurrency, digitsOnly, formatThousands } from "@/lib/format";

type PayerSplit = "half" | "buyer" | "seller";

const { calculator } = tapuHarciCalculatorPage;

export default function TapuHarciCalculator() {
  const [rawPrice, setRawPrice] = useState("");
  const [transactionType, setTransactionType] = useState(calculator.defaultTransactionType);
  const [rawDoner, setRawDoner] = useState(() => {
    const defaultType = calculator.transactionTypes.find(
      (type) => type.id === calculator.defaultTransactionType
    );
    return String(defaultType?.doner ?? "");
  });
  const [payerSplit, setPayerSplit] = useState<PayerSplit>(
    calculator.defaultPayerSplit as PayerSplit
  );

  const handleTransactionTypeChange = (id: string) => {
    setTransactionType(id);
    const matchingType = calculator.transactionTypes.find((type) => type.id === id);
    if (matchingType) {
      setRawDoner(String(matchingType.doner));
    }
  };

  const { totalHarc, buyerShare, sellerShare, donerSermaye, grandTotal } = useMemo(() => {
    const price = Number(rawPrice) || 0;
    const harc = price * (calculator.harcRatePercent / 100);
    const buyer = payerSplit === "half" ? harc / 2 : payerSplit === "buyer" ? harc : 0;
    const seller = harc - buyer;
    const doner = Number(rawDoner) || 0;
    return {
      totalHarc: harc,
      buyerShare: buyer,
      sellerShare: seller,
      donerSermaye: doner,
      grandTotal: harc + doner,
    };
  }, [rawPrice, rawDoner, payerSplit]);

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
          <label
            htmlFor="transactionType"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            {calculator.transactionTypeLabel}
          </label>
          <select
            id="transactionType"
            value={transactionType}
            onChange={(e) => handleTransactionTypeChange(e.target.value)}
            className={inputClass}
          >
            {calculator.transactionTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="doner" className="mb-1.5 block text-xs font-semibold text-slate-600">
            {calculator.donerSermayeLabel} (₺)
          </label>
          <input
            id="doner"
            type="text"
            inputMode="numeric"
            value={formatThousands(rawDoner)}
            onChange={(e) => setRawDoner(digitsOnly(e.target.value))}
            className={inputClass}
          />
          <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
            {calculator.donerSermayeNote}
          </p>
        </div>
        <div>
          <p className="mb-1.5 block text-xs font-semibold text-slate-600">
            {calculator.payerSplitLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {calculator.payerSplitOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setPayerSplit(option.id as PayerSplit)}
                className={`rounded-full px-3.5 py-2 text-xs font-bold transition-colors ${
                  payerSplit === option.id
                    ? "bg-accent text-white"
                    : "border-[1.5px] border-line bg-white text-brand hover:border-brand"
                }`}
                aria-pressed={payerSplit === option.id}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-line pt-6">
        <p className="text-xs font-bold uppercase tracking-[0.06em] text-muted">
          {calculator.resultTitle}
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-accent/40 bg-accent-tint p-4">
            <p className="text-[13px] text-slate-600">{calculator.resultLabels.totalHarc}</p>
            <p className="mt-1 text-lg font-extrabold text-accent">{formatCurrency(totalHarc)}</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-4">
            <p className="text-[13px] text-slate-600">{calculator.resultLabels.buyerShare}</p>
            <p className="mt-1 text-lg font-extrabold text-brand">{formatCurrency(buyerShare)}</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-4">
            <p className="text-[13px] text-slate-600">{calculator.resultLabels.sellerShare}</p>
            <p className="mt-1 text-lg font-extrabold text-brand">{formatCurrency(sellerShare)}</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-4">
            <p className="text-[13px] text-slate-600">{calculator.resultLabels.donerSermaye}</p>
            <p className="mt-1 text-lg font-extrabold text-brand">
              {formatCurrency(donerSermaye)}
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-4">
            <p className="text-[13px] text-slate-600">{calculator.resultLabels.grandTotal}</p>
            <p className="mt-1 text-lg font-extrabold text-brand">{formatCurrency(grandTotal)}</p>
          </div>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-slate-500">{calculator.disclaimer}</p>
      </div>
    </div>
  );
}
