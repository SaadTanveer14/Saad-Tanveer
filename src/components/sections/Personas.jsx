import React from "react";
import { PERSONAS } from "../../constants/data";
import { useReveal } from "../../hooks/useReveal";
import { B } from "../../design-system";
import { PersonaCard } from "../ui/PersonaCard";

export function Personas() {
  const ref = useReveal();
  return (
    <section style={{ background: "#fff", borderBottom: B, padding: "96px clamp(16px,4vw,48px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="sat" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#bbb", marginBottom: 10 }}>Who I Work With</p>
          <h2 className="cab h2-xl" style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-.03em", color: "#000" }}>
            Built for <span className="outline-text">Every Stage</span>
          </h2>
        </div>
        <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {PERSONAS.map((persona, i) => (
            <PersonaCard key={persona.role} persona={persona} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
