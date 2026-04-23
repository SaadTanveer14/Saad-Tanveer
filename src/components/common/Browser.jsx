import React from "react";
import { B, C, SH } from "../../design-system";

const bars = [48, 65, 42, 88, 60, 75, 100];
const stats = [
  ["$142k", "Revenue", "↑12%"],
  ["3.4k", "Users", "↑8%"],
  ["94%", "Uptime", "→0%"],
];
const metrics = [
  [C.sage, "Active Users", "2,847"],
  [C.yellow, "Conversion", "6.4%"],
];

export function Browser() {
  return (
    <div className="float" style={{ background: "#fff", border: B, borderRadius: 16, overflow: "hidden", boxShadow: SH.xl }}>
      <div style={{ background: "#000", padding: "10px 14px", display: "flex", gap: 6, alignItems: "center" }}>
        {["#ff5f57", "#febc2e", "#28c840"].map((bg) => (
          <div key={bg} style={{ width: 10, height: 10, borderRadius: "50%", background: bg }} />
        ))}
        <div style={{ flex: 1, background: "#1c1c1c", borderRadius: 4, height: 22, marginLeft: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 9, color: "#555", fontFamily: "monospace" }}>pulse.dashboard.app/overview</span>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: 40, background: "#0f0f0f", padding: "12px 8px", display: "flex", flexDirection: "column", gap: 10, alignItems: "center", borderRight: "1px solid #222" }}>
          {[C.yellow, C.sage, "#fff", "#888", "#888"].map((color, i) => (
            <div key={`${color}-${i}`} style={{ width: 18, height: 18, borderRadius: 4, background: color, opacity: i > 1 ? 0.3 : 1 }} />
          ))}
        </div>
        <div style={{ flex: 1, padding: 14, background: "#f8f8f8" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 12 }}>
            {stats.map(([value, label, delta]) => (
              <div key={label} style={{ background: "#fff", border: "1.5px solid #000", padding: "8px 10px", boxShadow: "2px 2px 0 #000" }}>
                <div className="cab" style={{ fontSize: 15, fontWeight: 800, color: "#000" }}>{value}</div>
                <div style={{ fontSize: 9, color: "#999", fontFamily: "sans-serif" }}>{label}</div>
                <div style={{ fontSize: 9, color: "#22c55e", fontFamily: "sans-serif", fontWeight: 700 }}>{delta}</div>
              </div>
            ))}
          </div>
          <div style={{ background: C.charcoal, border: "1.5px solid #000", padding: "10px 12px", boxShadow: "2px 2px 0 #000", marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 9, color: C.sage, fontFamily: "sans-serif" }}>Weekly Revenue</span>
              <span style={{ fontSize: 9, color: C.yellow, fontFamily: "sans-serif", fontWeight: 700 }}>+23% ↑</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 52 }}>
              {bars.map((h, i) => (
                <div key={h + i} style={{ flex: 1, height: `${h}%`, background: i === 6 ? C.yellow : C.sage, opacity: i === 6 ? 1 : 0.45, borderRadius: 2 }} />
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {metrics.map(([bg, label, value]) => (
              <div key={label} style={{ background: bg, border: "1.5px solid #000", padding: "8px 10px", boxShadow: "2px 2px 0 #000" }}>
                <div style={{ fontSize: 9, color: "#444", fontFamily: "sans-serif", marginBottom: 3 }}>{label}</div>
                <div className="cab" style={{ fontSize: 16, fontWeight: 800, color: "#000" }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
