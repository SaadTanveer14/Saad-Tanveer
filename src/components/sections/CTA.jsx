import React from "react";
import { useReveal } from "../../hooks/useReveal";
import { B, C } from "../../design-system";
import { DotBg } from "../common/DotBg";
import { Button } from "../ui/Button";
import ParticleAvatar from "../common/ParticleAvatar";

export function CTA() {
  const ref = useReveal();
  return (
    <section id="contact" style={{ background: C.yellow, borderBottom: B, padding: "96px clamp(16px,4vw,48px)", position: "relative", overflow: "hidden" }}>
      <DotBg />
      <div className="cab" style={{ position: "absolute", bottom: -40, right: 40, fontSize: 240, fontWeight: 800, color: "rgba(0,0,0,.04)", lineHeight: 1, pointerEvents: "none", zIndex: 0 }}>
        ✦
      </div>
      <div ref={ref} className="rv" style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="g2" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 64, alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ParticleAvatar
              src="/avatar.jpg"
              name="Muhammad Saad Tanveer"
              title="Frontend & Mobile Architect"
              status="Available · 2026"
              tag="SATA.DEV"
              theme="dark"
              size={320}
            />
          </div>
          <div style={{ textAlign: "left" }}>
            <p className="sat" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#666", marginBottom: 16 }}>Let's Build Together</p>
            <h2 className="cab h2-xl" style={{ fontSize: 68, fontWeight: 800, letterSpacing: "-.04em", color: "#000", lineHeight: 0.98, marginBottom: 24 }}>
              Got a project
              <br />
              in <span className="outline-text">mind?</span>
            </h2>
            <p className="sat" style={{ fontSize: 17, fontWeight: 500, color: "#444", marginBottom: 36, lineHeight: 1.65, maxWidth: 480 }}>
              Currently accepting new projects. Let's talk about what you're building and how I can help make it exceptional.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Button variant="k" size="lg" onClick={() => window.location.href = "mailto:saad.tanveer11400@gmail.com?subject=Let%27s%20Start%20a%20Project"}>Start a Project ↗</Button>
              <Button variant="w" size="lg" onClick={() => window.location.href = "mailto:saad.tanveer11400@gmail.com"}>Say Hello →</Button>
            </div>
            <p className="sat" style={{ fontSize: 13, color: "#888", marginTop: 24 }}>
              Typically respond within 24 hours ·<span style={{ color: "#22c55e", fontWeight: 700 }}> Open to work</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
