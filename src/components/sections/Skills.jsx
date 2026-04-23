import React from "react";
import { SKILLS } from "../../constants/data";
import { useReveal } from "../../hooks/useReveal";
import { B, C } from "../../design-system";
import { DotBg } from "../common/DotBg";
import { SkillCard } from "../ui/SkillCard";

export function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" style={{ background: C.yellow, borderTop: B, borderBottom: B, padding: "96px clamp(16px,4vw,48px)", position: "relative", overflow: "hidden" }}>
      <DotBg />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div ref={ref} className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="sat" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#666", marginBottom: 10 }}>What I Bring</p>
          <h2 className="cab h2-xl" style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-.03em", color: "#000" }}>
            Skills &amp; <span className="outline-text">Services</span>
          </h2>
        </div>
        <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
