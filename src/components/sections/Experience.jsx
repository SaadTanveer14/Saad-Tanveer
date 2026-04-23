import React from "react";
import { EXPERIENCE } from "../../constants/data";
import { useReveal } from "../../hooks/useReveal";
import { B, C, SH } from "../../design-system";
import { PillBadge } from "../ui/PillBadge";

function ExperienceCard({ item, delay }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`rv d${delay}`}
      style={{
        background: "#fff",
        border: B,
        boxShadow: SH.sm,
        padding: 28,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -12,
          left: 24,
          background: item.accent,
          border: B,
          padding: "4px 12px",
          boxShadow: "2px 2px 0 #000",
        }}
      >
        <span className="cab" style={{ fontSize: 11, fontWeight: 800, color: "#000", letterSpacing: ".06em", textTransform: "uppercase" }}>
          {item.period}
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginTop: 6, marginBottom: 6 }}>
        <h3 className="cab" style={{ fontSize: 24, fontWeight: 800, color: "#000", letterSpacing: "-.01em" }}>
          {item.company}
        </h3>
        <span className="sat" style={{ fontSize: 12, fontWeight: 600, color: "#888" }}>
          {item.location}
        </span>
      </div>
      <p className="sat" style={{ fontSize: 14, fontWeight: 700, color: "#444", marginBottom: 16 }}>
        {item.role}
      </p>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
        {item.points.map((point) => (
          <li key={point} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <div
              style={{
                width: 16,
                height: 16,
                background: item.accent,
                border: "1.5px solid #000",
                flexShrink: 0,
                marginTop: 4,
              }}
            />
            <span className="sat" style={{ fontSize: 14, fontWeight: 500, color: "#333", lineHeight: 1.65 }}>
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" style={{ background: C.sage, borderTop: B, borderBottom: B, padding: "96px clamp(16px,4vw,48px)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div ref={ref} className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
          <PillBadge style={{ marginBottom: 18 }}>Career Timeline</PillBadge>
          <h2 className="cab h2-xl" style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-.03em", color: "#000" }}>
            Where I've <span className="outline-text">Shipped</span>
          </h2>
          <p className="sat" style={{ fontSize: 15, fontWeight: 500, color: "#333", marginTop: 14, maxWidth: 560, margin: "14px auto 0", lineHeight: 1.65 }}>
            5+ years of engineering, delivery, and team leadership — from early-career mobile work to leading cross-functional teams.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {EXPERIENCE.map((item, i) => (
            <ExperienceCard key={item.company} item={item} delay={(i % 4) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
