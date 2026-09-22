export function formatCurrency(value: number): string {
  return value.toLocaleString("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 2,
  });
}

export function digitsOnly(value: string): string {
  return value.replace(/[^\d]/g, "");
}

export function formatThousands(value: string): string {
  if (!value) return "";
  return Number(value).toLocaleString("tr-TR");
}
