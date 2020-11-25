import React from "react";
import { Link } from "react-router-dom";

export default function NewsUserButtons({ admin }) {
  return (
    <div className="d-flex w-50 mx-auto justify-content-between">
      <Link to="/create" className="btn btn-secondary mb-2">
        Создать новость
      </Link>
      {admin && (
        <Link to="/publish" className="btn btn-secondary mb-2">
          Подтвердить новости
        </Link>
      )}
    </div>
  );
}
