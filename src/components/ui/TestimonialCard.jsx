import React from "react";
import { useReveal } from "../../hooks/useReveal";

export function TestimonialCard({ testimonial, delay }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`rv test-card d${delay}`}>
      <div style={{ color: "#ffbc2e", fontSize: 18, marginBottom: 18, letterSpacing: 2 }}>
        {"★".repeat(testimonial.stars)}
      </div>
      <p className="sat" style={{ fontSize: 15, fontWeight: 500, color: "#222", lineHeight: 1.75, marginBottom: 24, fontStyle: "italic" }}>
        "{testimonial.quote}"
      </p>
      <div style={{ borderTop: "1.5px solid rgba(0,0,0,.12)", paddingTop: 16 }}>
        <div className="cab" style={{ fontSize: 16, fontWeight: 800, color: "#000" }}>{testimonial.author}</div>
        <div className="sat" style={{ fontSize: 12, fontWeight: 500, color: "#888", marginTop: 2 }}>{testimonial.role}</div>
      </div>
    </div>
  );
}
