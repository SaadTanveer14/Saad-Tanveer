import React from "react";
import { useReveal } from "../../hooks/useReveal";
import { C } from "../../design-system";

export function PersonaCard({ persona, delay }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`rv persona-card d${delay}`} style={{ background: persona.bg, boxShadow: persona.featured ? `8px 8px 0 ${persona.shadowColor}` : `4px 4px 0 ${persona.shadowColor}` }}>
      <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, background: persona.bg === C.dark ? "rgba(255,225,124,.08)" : "rgba(0,0,0,.06)", border: `1.5px solid ${persona.bg === C.dark ? "rgba(255,225,124,.12)" : "rgba(0,0,0,.08)"}`, transform: "rotate(15deg)" }} />
      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fff", border: `1.5px solid ${persona.bg === C.dark ? "rgba(255,255,255,.2)" : "#000"}`, borderRadius: 999, padding: "4px 12px", marginBottom: 20, position: "relative", zIndex: 1 }}>
        <span className="sat" style={{ fontSize: 11, fontWeight: 700, color: "#000" }}>{persona.role}</span>
      </div>
      <h3 className="cab" style={{ fontSize: 24, fontWeight: 800, color: persona.textColor, marginBottom: 20, lineHeight: 1.1, position: "relative", zIndex: 1 }}>{persona.headline}</h3>
      <ul style={{ listStyle: "none", position: "relative", zIndex: 1 }}>
        {persona.points.map((point) => (
          <li key={point} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 20, height: 20, background: persona.bg === C.dark ? "rgba(255,225,124,.15)" : "rgba(0,0,0,.08)", border: `1.5px solid ${persona.bg === C.dark ? "rgba(255,225,124,.3)" : "rgba(0,0,0,.2)"}`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 10, color: persona.bg === C.dark ? C.yellow : "#000" }}>✓</span>
            </div>
            <span className="sat" style={{ fontSize: 14, fontWeight: 500, color: persona.textColor, opacity: 0.85 }}>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
