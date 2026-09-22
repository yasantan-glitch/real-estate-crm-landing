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
    <div role="tablist" className="flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          role="tab"
          aria-selected={activeId === item.id}
          onClick={() => onChange(item.id)}
          className={`rounded-full px-4 py-2.5 text-sm font-bold transition-colors ${
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
