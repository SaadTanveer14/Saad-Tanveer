import React from "react";

export function PillBadge({ children, style }) {
  return (
    <div className="pill" style={style}>
      {children}
    </div>
  );
}
