import React, { useEffect, useState } from "react";
import { NAV_LINKS } from "../../constants/data";
import { B, C } from "../../design-system";
import { Button } from "../ui/Button";

const SECTION_IDS = {
  Work: "work",
  Experience: "experience",
  Skills: "skills",
  Process: "process",
  Contact: "contact",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav style={{ position: "sticky", top: 0, zIndex: 999, background: C.yellow, borderBottom: B, height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 clamp(16px,4vw,48px)", boxShadow: scrolled ? "0 4px 0 #000" : "none", transition: "box-shadow .2s" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div style={{ width: 36, height: 36, background: "#000", overflow: "hidden" }}>
            <img
              src="/avatar.jpg"
              alt="Saad"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(1) sepia(1) hue-rotate(10deg) saturate(6) contrast(1.2) brightness(0.85)" }}
            />
          </div>
          <span className="cab" style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-.02em", color: "#000" }}>SATA.DEV</span>
        </div>
        <div className="hide-m" style={{ display: "flex", gap: 36 }}>
          {NAV_LINKS.map((link) => (
            <span key={link} className="nl" onClick={() => scrollToSection(SECTION_IDS[link])}>
              {link}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Button variant="k" size="sm" style={{ display: "inline-flex" }} onClick={() => window.location.href = "mailto:saad.tanveer11400@gmail.com?subject=Hiring%20Inquiry"}>
            Hire Me ↗
          </Button>
          <div className="hide-desktop" style={{ display: "none", cursor: "pointer", fontSize: 22 }} onClick={() => setMobileOpen((open) => !open)}>
            ☰
          </div>
        </div>
      </nav>
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 998, background: C.yellow, borderBottom: B, display: "flex", flexDirection: "column", alignItems: "center", gap: 24, paddingTop: 40 }}>
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              className="cab"
              style={{ fontSize: 28, fontWeight: 800, cursor: "pointer", color: "#000" }}
              onClick={() => {
                scrollToSection(SECTION_IDS[link]);
                setMobileOpen(false);
              }}
            >
              {link}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
