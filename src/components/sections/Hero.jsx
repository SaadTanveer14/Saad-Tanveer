import React from "react";
import { HERO_STATS } from "../../constants/data";
import { useReveal } from "../../hooks/useReveal";
import { B, C } from "../../design-system";
import { DotBg } from "../common/DotBg";
// import { Browser } from "../common/Browser"; // live preview widget — kept for future use
import ParticleAvatar from "../common/ParticleAvatar";
import { Button } from "../ui/Button";
import { PillBadge } from "../ui/PillBadge";

export function Hero() {
  const ref = useReveal();

  return (
    <section style={{ background: C.yellow, borderBottom: B, padding: "72px clamp(16px,4vw,48px) 80px", position: "relative", overflow: "hidden" }}>
      <DotBg />
      <div ref={ref} className="rv" style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <PillBadge style={{ marginBottom: 28 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              Available for new projects · 2026
            </PillBadge>
            <h1 className="cab h1-xl" style={{ fontSize: 80, fontWeight: 800, lineHeight: 0.97, letterSpacing: "-.04em", color: "#000", marginBottom: 28 }}>
              Frontend
              <br />
              <span className="outline-text">&amp; Mobile</span>
              <br />
              Architect
            </h1>
            <p className="sat" style={{ fontSize: 17, fontWeight: 500, color: "#333", lineHeight: 1.65, marginBottom: 36, maxWidth: 440 }}>
              I build fullstack products end-to-end — but where I come alive is the frontend. Obsessed with concept design, interaction detail, and turning ideas into interfaces people actually enjoy using.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button variant="k" onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" })}>View My Work ↗</Button>
              <Button variant="w" onClick={() => window.open("https://drive.google.com/file/d/1Rk-a3XHkaeXfGBK0l0RHZQU4N3v0pg0Q/view?usp=sharing", "_blank")}>Download CV</Button>
            </div>
            <div style={{ display: "flex", gap: 36, marginTop: 48, paddingTop: 32, borderTop: "2px solid rgba(0,0,0,.15)" }}>
              {HERO_STATS.map(([value, label]) => (
                <div key={label}>
                  <div className="cab" style={{ fontSize: 30, fontWeight: 800, color: "#000", lineHeight: 1 }}>{value}</div>
                  <div className="sat" style={{ fontSize: 12, fontWeight: 500, color: "#555", marginTop: 3 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
          {/* Live preview widget — commented out, may restore later
          <div style={{ position: "relative" }}>
            <Browser />
            <div style={{ position: "absolute", bottom: -14, left: -16, background: C.charcoal, border: B, borderRadius: 999, padding: "8px 16px", boxShadow: SH.sm, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16 }}>⚡</span>
              <span className="sat" style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Architect @ Coded Realities</span>
            </div>
            <div style={{ position: "absolute", top: -16, right: -8, background: C.yellow, border: B, padding: "6px 14px", boxShadow: SH.sm, transform: "rotate(3deg)" }}>
              <span className="cab" style={{ fontSize: 12, fontWeight: 800, color: "#000" }}>LIVE PREVIEW ↗</span>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
