import React from "react";

import HeaderNav from "./HeaderNav";
import HeaderLog from "./HeaderLog";

export default function Header({ popUpHandler }) {
  return (
    <header className="d-flex justify-content-between align-items-center line border-bottom">
      <HeaderNav />
      <HeaderLog popUpHandler={popUpHandler} />
    </header>
  );
}
