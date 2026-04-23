import React from "react";
import { useReveal } from "../../hooks/useReveal";
import { B, C } from "../../design-system";

export function SkillCard({ skill, delay }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`rv feat-card d${delay}`}>
      <div className="feat-icon" style={{ width: 52, height: 52, background: C.sage, border: B, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 20, transition: "background .2s" }}>
        {skill.icon}
      </div>
      <h3 className="cab" style={{ fontSize: 22, fontWeight: 800, color: "#000", marginBottom: 10 }}>{skill.title}</h3>
      <p className="sat" style={{ fontSize: 14, fontWeight: 500, color: "#444", lineHeight: 1.65 }}>{skill.desc}</p>
    </div>
  );
}
