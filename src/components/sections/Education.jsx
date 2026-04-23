import React from "react";
import { EDUCATION, CERTIFICATIONS } from "../../constants/data";
import { useReveal } from "../../hooks/useReveal";
import { B, C, SH } from "../../design-system";

export function Education() {
  const header = useReveal();
  const edu = useReveal();
  const certs = useReveal();

  return (
    <section style={{ background: "#fff", borderBottom: B, padding: "96px clamp(16px,4vw,48px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={header} className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="sat" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#bbb", marginBottom: 10 }}>
            Foundation &amp; Learning
          </p>
          <h2 className="cab h2-xl" style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-.03em", color: "#000" }}>
            Education &amp; <span className="outline-text">Certifications</span>
          </h2>
        </div>

        <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div
            ref={edu}
            className="rv d1"
            style={{
              background: C.yellow,
              border: B,
              boxShadow: SH.md,
              padding: 36,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              className="cab"
              style={{
                position: "absolute",
                bottom: -30,
                right: -10,
                fontSize: 140,
                fontWeight: 800,
                color: "rgba(0,0,0,.06)",
                lineHeight: 1,
                pointerEvents: "none",
              }}
            >
              ✦
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#fff",
                  border: B,
                  borderRadius: 999,
                  padding: "5px 14px",
                  marginBottom: 20,
                  boxShadow: "2px 2px 0 #000",
                }}
              >
                <span className="sat" style={{ fontSize: 11, fontWeight: 700, color: "#000", letterSpacing: ".06em", textTransform: "uppercase" }}>
                  Education
                </span>
              </div>
              <h3 className="cab" style={{ fontSize: 28, fontWeight: 800, color: "#000", lineHeight: 1.15, marginBottom: 14 }}>
                {EDUCATION.school}
              </h3>
              <p className="sat" style={{ fontSize: 15, fontWeight: 700, color: "#222", marginBottom: 6 }}>
                {EDUCATION.degree}
              </p>
              <p className="sat" style={{ fontSize: 13, fontWeight: 500, color: "#555" }}>
                {EDUCATION.period}
              </p>
            </div>
          </div>

          <div
            ref={certs}
            className="rv d2"
            style={{
              background: C.charcoal,
              border: B,
              boxShadow: SH.md,
              padding: 36,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: C.yellow,
                border: B,
                borderRadius: 999,
                padding: "5px 14px",
                marginBottom: 20,
                boxShadow: "2px 2px 0 #000",
              }}
            >
              <span className="sat" style={{ fontSize: 11, fontWeight: 700, color: "#000", letterSpacing: ".06em", textTransform: "uppercase" }}>
                Certifications
              </span>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {CERTIFICATIONS.map((cert) => (
                <li
                  key={cert}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "12px 14px",
                    background: C.dark,
                    border: `1.5px solid ${C.dark}`,
                    borderRadius: 6,
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      background: C.yellow,
                      border: "1.5px solid #000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span className="cab" style={{ fontSize: 14, fontWeight: 800, color: "#000" }}>✓</span>
                  </div>
                  <span className="sat" style={{ fontSize: 14, fontWeight: 500, color: "#fff", lineHeight: 1.5 }}>
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
