import React from "react";
import { BRANDS } from "../../constants/data";
import { B, C } from "../../design-system";

export function Marquee() {
  const items = [...BRANDS, ...BRANDS];
  return (
    <div style={{ background: C.charcoal, borderBottom: B, padding: "15px 0", overflow: "hidden" }}>
      <div className="mq">
        {items.map((brand, i) => (
          <span key={`${brand}-${i}`} className="cab" style={{ fontSize: 14, fontWeight: 700, color: C.sage, opacity: 0.55, letterSpacing: ".12em", whiteSpace: "nowrap", marginRight: 40 }}>
            {brand}
            <span style={{ opacity: 0.35, margin: "0 20px" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
