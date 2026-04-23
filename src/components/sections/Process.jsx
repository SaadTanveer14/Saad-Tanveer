import React from "react";
import { PROCESS_STATS, STEPS } from "../../constants/data";
import { useReveal } from "../../hooks/useReveal";
import { B, C } from "../../design-system";
import { StepCard } from "../ui/StepCard";

export function Process() {
  const ref = useReveal();
  return (
    <section id="process" style={{ background: C.charcoal, borderBottom: B, padding: "96px clamp(16px,4vw,48px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} className="rv" style={{ textAlign: "center", marginBottom: 72 }}>
          <p className="sat" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: C.sage, marginBottom: 10 }}>My Approach</p>
          <h2 className="cab h2-xl" style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-.03em", color: "#fff" }}>
            How I <span className="outline-text-w">Work</span>
          </h2>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: 31, left: "16.5%", right: "16.5%", height: 2, background: C.dark, zIndex: 0 }} />
          <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {STEPS.map((step, i) => (
              <StepCard key={step.num} step={step} delay={i + 1} />
            ))}
          </div>
        </div>
        <div style={{ marginTop: 80, paddingTop: 56, borderTop: `2px solid ${C.dark}`, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, textAlign: "center" }}>
          {PROCESS_STATS.map(([value, label]) => (
            <div key={label}>
              <div className="cab" style={{ fontSize: 50, fontWeight: 800, color: C.yellow, lineHeight: 1 }}>{value}</div>
              <div className="sat" style={{ fontSize: 13, fontWeight: 500, color: "#555", marginTop: 6, lineHeight: 1.4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
