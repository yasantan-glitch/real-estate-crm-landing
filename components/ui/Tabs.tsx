"use client";

export type TabItem = {
  id: string;
  label: string;
};

export default function Tabs({
  items,
  activeId,
  onChange,
}: {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
}) {
  return (
    <div
      role="tablist"
      className="flex flex-nowrap justify-center gap-2 overflow-x-auto"
    >
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          role="tab"
          aria-selected={activeId === item.id}
          onClick={() => onChange(item.id)}
          className={`shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-xs font-bold transition-colors sm:px-4 sm:py-2.5 sm:text-sm ${
            activeId === item.id
              ? "bg-accent text-white"
              : "border-[1.5px] border-line bg-white text-brand hover:border-brand"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
