"use client";

import { useMemo, useState } from "react";
import { commissionCalculatorPage } from "@/content/landing";

type TransactionType = "sale" | "rental";

const { calculator } = commissionCalculatorPage;

function formatCurrency(value: number): string {
  return value.toLocaleString("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 2,
  });
}

function digitsOnly(value: string): string {
  return value.replace(/[^\d]/g, "");
}

function formatThousands(value: string): string {
  if (!value) return "";
  return Number(value).toLocaleString("tr-TR");
}

export default function CommissionCalculator() {
  const [transactionType, setTransactionType] = useState<TransactionType>("sale");
  const [rawAmount, setRawAmount] = useState("");
  const [rate, setRate] = useState(
    transactionType === "sale" ? calculator.defaultRates.sale : calculator.defaultRates.rental
  );

  const handleTransactionTypeChange = (type: TransactionType) => {
    setTransactionType(type);
    setRate(type === "sale" ? calculator.defaultRates.sale : calculator.defaultRates.rental);
  };

  const { exVat, vatAmount, inVat } = useMemo(() => {
    const amount = Number(rawAmount) || 0;
    const commission =
      transactionType === "rental" ? amount : (amount * (Number(rate.replace(",", ".")) || 0)) / 100;
    const vat = commission * (calculator.vatRate / 100);
    return {
      exVat: commission,
      vatAmount: vat,
      inVat: commission + vat,
    };
  }, [rawAmount, rate, transactionType]);

  const inputClass =
    "w-full rounded-[10px] border-[1.5px] border-line bg-white px-4 py-3 text-sm text-brand placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent";

  return (
    <div className="card">
      <div className="mb-6 flex gap-2">
        {(["sale", "rental"] as TransactionType[]).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => handleTransactionTypeChange(type)}
            className={`flex-1 rounded-full px-4 py-2.5 text-sm font-bold transition-colors ${
              transactionType === type
                ? "bg-accent text-white"
                : "border-[1.5px] border-line bg-white text-brand hover:border-brand"
            }`}
            aria-pressed={transactionType === type}
          >
            {type === "sale" ? calculator.saleLabel : calculator.rentalLabel}
          </button>
        ))}
      </div>

      <div className={`grid gap-4 ${transactionType === "sale" ? "sm:grid-cols-2" : ""}`}>
        <div>
          <label htmlFor="amount" className="mb-1.5 block text-xs font-semibold text-slate-600">
            {calculator.amountLabel} (₺)
          </label>
          <input
            id="amount"
            type="text"
            inputMode="numeric"
            placeholder={calculator.amountPlaceholder}
            value={formatThousands(rawAmount)}
            onChange={(e) => setRawAmount(digitsOnly(e.target.value))}
            className={inputClass}
          />
          {transactionType === "rental" && (
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{calculator.rentalNote}</p>
          )}
        </div>
        {transactionType === "sale" && (
          <div>
            <label htmlFor="rate" className="mb-1.5 block text-xs font-semibold text-slate-600">
              {calculator.rateLabel}
            </label>
            <input
              id="rate"
              type="text"
              inputMode="decimal"
              placeholder="Örn. 2"
              value={rate}
              onChange={(e) => setRate(e.target.value.replace(/[^\d.,]/g, ""))}
              className={inputClass}
            />
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{calculator.rateNote}</p>
          </div>
        )}
      </div>

      <div className="mt-8 border-t border-line pt-6">
        <p className="text-xs font-bold uppercase tracking-[0.06em] text-muted">
          {calculator.resultTitle}
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-line bg-surface p-4">
            <p className="text-[13px] text-slate-600">{calculator.resultLabels.exVat}</p>
            <p className="mt-1 text-lg font-extrabold text-brand">{formatCurrency(exVat)}</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-4">
            <p className="text-[13px] text-slate-600">{calculator.resultLabels.vatAmount}</p>
            <p className="mt-1 text-lg font-extrabold text-brand">{formatCurrency(vatAmount)}</p>
          </div>
          <div className="rounded-2xl border border-accent/40 bg-accent-tint p-4">
            <p className="text-[13px] text-slate-600">{calculator.resultLabels.inVat}</p>
            <p className="mt-1 text-lg font-extrabold text-accent">{formatCurrency(inVat)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
