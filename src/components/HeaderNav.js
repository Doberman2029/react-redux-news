import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <nav className="nav">
      <Link className="btn btn-primary m-2" to="/">
        Главная
      </Link>
      <Link className="btn btn-primary m-2" to="/news">
        Новости
      </Link>
    </nav>
  );
}
