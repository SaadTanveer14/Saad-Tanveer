import React from "react";
import { FOOTER_COLS } from "../../constants/data";
import { C } from "../../design-system";

export function Footer() {
  return (
    <footer style={{ background: C.charcoal, padding: "60px clamp(16px,4vw,48px) 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, marginBottom: 48, paddingBottom: 40, borderBottom: `2px solid ${C.dark}` }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 36, height: 36, background: C.yellow, overflow: "hidden" }}>
                <img
                  src="/avatar.jpg"
                  alt="Saad"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(1) sepia(1) hue-rotate(10deg) saturate(6) contrast(1.2) brightness(0.85)" }}
                />
              </div>
              <span className="cab" style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>SATA.DEV</span>
            </div>
            <p className="sat" style={{ fontSize: 13, color: "#555", fontWeight: 500 }}>Frontend &amp; Mobile Architect · AI-First</p>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <a href="https://www.linkedin.com/in/saadtanveer-hope" target="_blank" rel="noopener noreferrer" className="soc" title="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#888"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a href="https://github.com/SaadTanveer14" target="_blank" rel="noopener noreferrer" className="soc" title="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#888"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://www.instagram.com/sata_dev?utm_source=qr&igsh=ZzEydW9sYmQ4MzVq" target="_blank" rel="noopener noreferrer" className="soc" title="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#888"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12c0-3.2.01-3.58.07-4.85C2.38 3.85 3.9 2.31 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95C23.73 2.71 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
          </div>
        </div>
        <div className="g4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, marginBottom: 48 }}>
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="cab" style={{ fontSize: 12, fontWeight: 800, color: "#fff", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 18 }}>{col.title}</h4>
              {col.links.map((link) => {
                if (link.href) return (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="fl" style={{ textDecoration: "none" }}>{link.label}</a>
                );
                if (link.section) return (
                  <span key={link.label} className="fl" style={{ cursor: "pointer" }} onClick={() => document.getElementById(link.section)?.scrollIntoView({ behavior: "smooth", block: "start" })}>{link.label}</span>
                );
                return <span key={link.label} className="fl">{link.label}</span>;
              })}
            </div>
          ))}
        </div>
        <div style={{ borderTop: `2px solid ${C.dark}`, padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <span className="sat" style={{ fontSize: 12, color: "#444", fontWeight: 500 }}>© 2026 Muhammad Saad Tanveer — All rights reserved</span>
          <span className="sat" style={{ fontSize: 12, color: "#444", fontWeight: 500 }}>Built with React &amp; obsessive attention to detail ⚡</span>
        </div>
      </div>
    </footer>
  );
}
