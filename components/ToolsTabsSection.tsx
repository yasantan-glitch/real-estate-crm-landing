"use client";

import { useState } from "react";
import CommissionCalculator from "@/components/CommissionCalculator";
import RentalYieldCalculator from "@/components/RentalYieldCalculator";
import TapuHarciCalculator from "@/components/TapuHarciCalculator";
import Tabs from "@/components/ui/Tabs";
import type { toolsIndexPage } from "@/content/landing";
import { reveal } from "@/lib/motion";

type ToolContent = (typeof toolsIndexPage)["tools"][number];

type TabId = "commission" | "rentalYield" | "tapuHarci";

export default function ToolsTabsSection({
  commissionTool,
  rentalYieldTool,
  tapuHarciTool,
}: {
  commissionTool: ToolContent;
  rentalYieldTool: ToolContent;
  tapuHarciTool: ToolContent;
}) {
  const [activeTab, setActiveTab] = useState<TabId>("commission");

  const tabs: { id: TabId; label: string }[] = [
    { id: "commission", label: commissionTool.title },
    { id: "rentalYield", label: rentalYieldTool.title },
    { id: "tapuHarci", label: tapuHarciTool.title },
  ];

  const activeTool =
    activeTab === "commission"
      ? commissionTool
      : activeTab === "rentalYield"
        ? rentalYieldTool
        : tapuHarciTool;

  return (
    <section className="border-t border-line bg-surface">
      <div className="section">
        <div className="mx-auto max-w-2xl" {...reveal("up")}>
          <Tabs items={tabs} activeId={activeTab} onChange={(id) => setActiveTab(id as TabId)} />

          <h2 className="h2 mt-8 text-center">{activeTool.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-[14.5px] leading-relaxed text-slate-600">
            {activeTool.description}
          </p>
          <div className="mt-8">
            {activeTab === "commission" && <CommissionCalculator />}
            {activeTab === "rentalYield" && <RentalYieldCalculator />}
            {activeTab === "tapuHarci" && <TapuHarciCalculator />}
          </div>
          <p className="mt-5 text-center text-[14.5px] leading-relaxed text-slate-500">
            <a href={activeTool.detailHref} className="font-semibold text-accent underline">
              {activeTool.detailLabel}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
