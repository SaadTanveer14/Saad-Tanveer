import React from "react";
import { useReveal } from "../../hooks/useReveal";
import { C } from "../../design-system";

export function StepCard({ step, delay }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`rv d${delay}`} style={{ padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
      <div style={{ width: 64, height: 64, borderRadius: "50%", border: `3px solid ${step.color}`, background: C.charcoal, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
        <span className="cab" style={{ fontSize: 20, fontWeight: 800, color: step.color }}>{step.num}</span>
      </div>
      <h3 className="cab" style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 12 }}>{step.label}</h3>
      <p className="sat" style={{ fontSize: 14, fontWeight: 500, color: "#666", lineHeight: 1.65 }}>{step.desc}</p>
    </div>
  );
}
