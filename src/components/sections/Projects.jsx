import React from "react";
import { PROJECTS } from "../../constants/data";
import { useReveal } from "../../hooks/useReveal";
import { B } from "../../design-system";
import { ProjectCard } from "../ui/ProjectCard";
import { Button } from "../ui/Button";

export function Projects() {
  const ref = useReveal();
  return (
    <section id="work" style={{ background: "#fff", padding: "96px clamp(16px,4vw,48px)", borderBottom: B }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} className="rv" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
          <div>
            <p className="sat" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#bbb", marginBottom: 10 }}>Selected Work</p>
            <h2 className="cab h2-xl" style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1, color: "#000" }}>
              Recent
              <br />
              <span className="outline-text">Projects</span>
            </h2>
          </div>
          <Button variant="k" style={{ marginBottom: 8 }}>All Projects ↗</Button>
        </div>
        <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
