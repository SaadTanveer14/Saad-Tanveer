import React from "react";

export function Button({ variant = "k", size, className = "", children, ...props }) {
  const sizeClass = size ? ` btn-${size}` : "";
  return (
    <button className={`btn btn-${variant}${sizeClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
