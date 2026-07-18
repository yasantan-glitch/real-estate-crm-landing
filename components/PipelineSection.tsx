import SectionHeading from "./SectionHeading";
import LedgerStrip from "./LedgerStrip";
import { pipelineStages } from "@/content/landing";

/**
 * Full-bleed black signature section (docs/plans/landing-page-redesign-plan.md
 * §4 item 5). The only other full-bleed dark section besides SolutionSection —
 * reuses LedgerStrip's dark variant with real pipeline-stage row data.
 */
export default function PipelineSection() {
  return (
    <section id="surec" className="scroll-mt-16 bg-brand">
      <div className="section">
        <SectionHeading
          eyebrow={pipelineStages.eyebrow}
          title={pipelineStages.title}
          intro={pipelineStages.intro}
          dark
        />
        <div className="mt-10">
          <LedgerStrip rows={pipelineStages.rows} variant="dark" caption={pipelineStages.tableCaption} />
        </div>
      </div>
    </section>
  );
}
