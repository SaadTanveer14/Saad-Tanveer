import React from "react";

export function DotBg({ opacity = 0.13 }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,${opacity}) 1.5px, transparent 1.5px)`,
        backgroundSize: "32px 32px",
      }}
    />
  );
}
