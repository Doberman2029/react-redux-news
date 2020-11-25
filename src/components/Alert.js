import React from "react";

export default function Alert({ children, className }) {
  return (
    <div className={className} role="alert">
      {children}
    </div>
  );
}
