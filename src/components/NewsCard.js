import React from "react";
import { connect, useDispatch } from "react-redux";
import { deleteNews, publishNews } from "../redux/actions/newsActions";
import Button from "./Button";

function NewsCard({ title, text, date, createdBy, button, id, userIsAdmin }) {
  const dispatch = useDispatch();
  return (
    <div className="card bg-light mb-3 w-50 mx-auto text-center">
      <div className="card-header">
        Автор: {createdBy}
        {userIsAdmin ? (
          <Button handler={() => dispatch(deleteNews(id))} className="close">
            <span aria-hidden="true">&times;</span>
          </Button>
        ) : (
          ""
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="blockquote-footer text-right">Создано {date}</p>
        {button && (
          <Button
            handler={() => dispatch(publishNews(id))}
            className="btn-primary"
          >
            Опубликовать
          </Button>
        )}
      </div>
    </div>
  );
}
export default connect()(NewsCard);
