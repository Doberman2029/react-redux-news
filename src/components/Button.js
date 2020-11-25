import React from "react";

export default function Button({ handler, children, className, ...rest }) {
  let style = `btn ${className}`;

  return (
    <button className={style} onClick={handler} {...rest}>
      {children}
    </button>
  );
}
