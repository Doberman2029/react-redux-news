import { useState } from "react";

export function InputHandler() {
  const [input, setInput] = useState("");

  return {
    value: input,
    handler: (e) => {
      setInput(e.target.value);
    },
    clear: () => setInput(""),
  };
}
