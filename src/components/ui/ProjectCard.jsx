import React, { useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import { B, C, SH } from "../../design-system";

/* ── Modal ─────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);
  const hasImages = Array.isArray(project.images) && project.images.length > 0;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,.75)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px clamp(16px,4vw,48px)",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#fff", border: B, boxShadow: SH.xl,
          maxWidth: 780, width: "100%", maxHeight: "90vh",
          overflowY: "auto", position: "relative",
        }}
      >
        {/* Header bar */}
        <div style={{ background: project.bg, borderBottom: B, padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ background: "#fff", border: B, borderRadius: 999, padding: "3px 12px", fontSize: 10, fontWeight: 700, fontFamily: "sans-serif" }}>{project.tag}</span>
          </div>
          <button
            onClick={onClose}
            style={{ background: C.charcoal, border: B, color: C.yellow, width: 32, height: 32, cursor: "pointer", fontFamily: "monospace", fontWeight: 800, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}
          >✕</button>
        </div>

        {/* Image viewer */}
        {hasImages && (
          <div style={{ borderBottom: B, background: project.bg, position: "relative" }}>
            <img
              src={project.images[imgIdx]}
              alt={project.title}
              style={{ width: "100%", maxHeight: 420, objectFit: "contain", display: "block" }}
            />
            {project.images.length > 1 && (
              <div style={{ display: "flex", gap: 8, justifyContent: "center", padding: "12px 0", position: "absolute", bottom: 0, width: "100%" }}>
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    style={{
                      width: i === imgIdx ? 28 : 10, height: 10,
                      background: i === imgIdx ? C.yellow : "rgba(255,255,255,.5)",
                      border: B, cursor: "pointer", transition: "width .2s",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div style={{ padding: 28 }}>
          <h3 className="cab" style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-.03em", color: "#000", marginBottom: 12 }}>{project.title}</h3>
          <p className="sat" style={{ fontSize: 15, fontWeight: 500, color: "#444", lineHeight: 1.7, marginBottom: 20 }}>{project.desc}</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: project.storeLinks ? 24 : 0 }}>
            {project.tech.map(t => (
              <span key={t} style={{ background: C.yellow, border: "1.5px solid #000", padding: "4px 10px", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }}>{t}</span>
            ))}
          </div>

          {/* Private distribution notice */}
          {project.privateDistribution && (
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 8, background: "#f4f4f4", border: "1.5px solid #ddd", padding: "8px 14px" }}>
              <span style={{ fontSize: 14 }}>🔒</span>
              <span className="sat" style={{ fontSize: 13, fontWeight: 600, color: "#666" }}>Privately Distributed — not available on public stores</span>
            </div>
          )}

          {/* Store links */}
          {project.storeLinks && (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
              {project.storeLinks.playStore && (
                <a
                  href={project.storeLinks.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.charcoal, border: B, padding: "10px 16px", textDecoration: "none", boxShadow: "3px 3px 0 #000" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffe17c"><path d="M3.18 23.76a2 2 0 0 0 2.09-.22l12.09-6.99-3.34-3.34-10.84 10.55zm-1.5-21.1v18.68l10.26-9.34L1.68 2.66zm20.3 7.58-3.07-1.77-3.7 3.37 3.7 3.38 3.1-1.79a1.88 1.88 0 0 0 0-3.19zM5.27.46a2 2 0 0 0-2.09-.22L13.98 10.8l3.34-3.34L5.27.46z"/></svg>
                  <span className="cab" style={{ fontSize: 11, fontWeight: 800, color: C.yellow, letterSpacing: ".05em" }}>Google Play</span>
                </a>
              )}
              {project.storeLinks.appStore && (
                <a
                  href={project.storeLinks.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.charcoal, border: B, padding: "10px 16px", textDecoration: "none", boxShadow: "3px 3px 0 #000" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffe17c"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  <span className="cab" style={{ fontSize: 11, fontWeight: 800, color: C.yellow, letterSpacing: ".05em" }}>App Store</span>
                </a>
              )}
              {project.storeLinks.website && (
                <a
                  href={project.storeLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.charcoal, border: B, padding: "10px 16px", textDecoration: "none", boxShadow: "3px 3px 0 #000" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffe17c"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                  <span className="cab" style={{ fontSize: 11, fontWeight: 800, color: C.yellow, letterSpacing: ".05em" }}>Visit Website</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Visuals ────────────────────────────────────────────────── */
function AbstractVisual({ project }) {
  return (
    <div style={{ background: project.bg, borderBottom: B, padding: 24, height: 196, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -24, bottom: -24, width: 96, height: 96, background: project.bg === C.charcoal ? "rgba(255,225,124,.08)" : "rgba(0,0,0,.06)", border: `1.5px solid ${project.bg === C.charcoal ? "rgba(255,225,124,.15)" : "rgba(0,0,0,.12)"}`, transform: "rotate(20deg)" }} />
      <div style={{ background: project.accent, border: `1.5px solid ${project.bg === C.charcoal ? "rgba(255,255,255,.12)" : "rgba(0,0,0,.8)"}`, borderRadius: 10, padding: 14, maxWidth: "78%", boxShadow: `5px 5px 0 ${project.bg === C.charcoal ? "rgba(255,225,124,.25)" : "rgba(0,0,0,.6)"}` }}>
        <div style={{ height: 6, background: project.bg, borderRadius: 3, marginBottom: 8, width: "60%", opacity: 0.85 }} />
        <div style={{ height: 4, background: project.bg, borderRadius: 2, marginBottom: 6, width: "85%", opacity: 0.5 }} />
        <div style={{ height: 4, background: project.bg, borderRadius: 2, width: "40%", opacity: 0.3 }} />
      </div>
      <div style={{ position: "absolute", top: 14, right: 14, background: "#fff", border: B, borderRadius: 999, padding: "3px 12px" }}>
        <span style={{ fontSize: 10, fontWeight: 700, fontFamily: "sans-serif" }}>{project.tag}</span>
      </div>
    </div>
  );
}

function DeviceVisual({ project, onPeek }) {
  const isTablet = project.device === "tablet";
  const isCharcoal = project.bg === C.charcoal;
  const hasTwo = project.images.length > 1;

  return (
    <div className={`dv ${isCharcoal ? "dv-dark" : ""}`} style={{ background: project.bg, borderBottom: B }}>
      <div className="dv-grid" aria-hidden="true" />
      <div className="dv-blob" style={{ background: isCharcoal ? "rgba(255,225,124,.1)" : "rgba(0,0,0,.06)", border: `1.5px solid ${isCharcoal ? "rgba(255,225,124,.18)" : "rgba(0,0,0,.12)"}` }} />

      {hasTwo && (
        <div className={`dv-phone dv-phone-back ${isTablet ? "dv-tablet" : ""}`}>
          <div className="dv-screen">
            <img src={project.images[1]} alt="" loading="lazy" />
          </div>
        </div>
      )}
      <div className={`dv-phone dv-phone-main ${isTablet ? "dv-tablet" : ""}`}>
        <div className="dv-notch" />
        <div className="dv-screen">
          <img src={project.images[0]} alt={project.title} loading="lazy" />
        </div>
      </div>

      <div className="dv-tag">
        <span style={{ fontSize: 10, fontWeight: 700, fontFamily: "sans-serif" }}>{project.tag}</span>
      </div>
      <button onClick={onPeek} className="dv-peek" style={{ cursor: "pointer" }}>
        <span className="cab" style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".08em" }}>PEEK ↗</span>
      </button>
    </div>
  );
}

/* ── Card ───────────────────────────────────────────────────── */
export function ProjectCard({ project, delay }) {
  const ref = useReveal();
  const [open, setOpen] = useState(false);
  const hasImages = Array.isArray(project.images) && project.images.length > 0;

  return (
    <>
      <div ref={ref} className={`rv proj-card d${delay}`}>
        {hasImages
          ? <DeviceVisual project={project} onPeek={() => setOpen(true)} />
          : <AbstractVisual project={project} />}
        <div style={{ padding: 24 }}>
          <h3 className="cab" style={{ fontSize: 22, fontWeight: 800, color: "#000", marginBottom: 10 }}>{project.title}</h3>
          <p className="sat" style={{ fontSize: 14, fontWeight: 500, color: "#555", lineHeight: 1.65, marginBottom: 16 }}>{project.desc}</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
            {project.tech.map((tech) => (
              <span key={tech} style={{ background: C.yellow, border: "1.5px solid #000", padding: "3px 9px", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }}>{tech}</span>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
            <div onClick={() => setOpen(true)} style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
              <span className="sat" style={{ fontSize: 13, fontWeight: 700, color: "#000", textDecoration: "underline" }}>View Case Study</span>
              <span>→</span>
            </div>
            {project.privateDistribution && (
              <span style={{ fontSize: 10, fontWeight: 700, fontFamily: "monospace", color: "#888", background: "#f4f4f4", border: "1.5px solid #ddd", padding: "3px 8px", letterSpacing: ".04em" }}>
                🔒 Privately Distributed
              </span>
            )}
          </div>
        </div>
      </div>

      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}
