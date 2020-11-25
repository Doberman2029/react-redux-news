import React from "react";
import Input from "./Input";

export default function PopUpInput({
  value,
  placeholder,
  id,
  handler,
  type = "text",
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{placeholder}</label>
      <Input
        handler={(e) => handler(e)}
        value={value}
        placeholder={placeholder}
        type={type}
        id={id}
      />
    </div>
  );
}
