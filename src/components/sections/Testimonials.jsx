import React from "react";
import { TESTIMONIALS } from "../../constants/data";
import { useReveal } from "../../hooks/useReveal";
import { B, C } from "../../design-system";
import { TestimonialCard } from "../ui/TestimonialCard";

export function Testimonials() {
  const ref = useReveal();
  return (
    <section style={{ background: C.sage, borderBottom: B, padding: "96px clamp(16px,4vw,48px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="sat" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#555", marginBottom: 10 }}>What They Say</p>
          <h2 className="cab h2-xl" style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-.03em", color: "#000" }}>
            Client <span className="outline-text">Reviews</span>
          </h2>
        </div>
        <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
