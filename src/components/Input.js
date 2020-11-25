import React from "react";

export default function Input({
  handler,
  value,
  placeholder = "Введите текст",
  type = "text",
  className = "form-control",
  ...rest
}) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handler(e)}
      {...rest}
    />
  );
}
