import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createNews } from "../redux/actions/newsActions";
import Button from "./Button";
import Input from "./Input";
import { InputHandler } from "./inputHandler";

function NewsCreator() {
  const title = InputHandler();
  const text = InputHandler();

  const { name } = useSelector((store) => store.currentUser);

  const dispatch = useDispatch();

  const createDisabled = () => {
    if (title.value.length > 0 && text.value.length > 0) return false;
    return true;
  };

  const createHandler = () => {
    dispatch(
      createNews({
        title: title.value,
        text: text.value,
        createdBy: name,
        createdTime: new Date().toLocaleString("ru"),
        id: Date.now(),
        published: false,
      })
    );
    title.clear();
    text.clear();
  };

  return (
    <>
      <Input
        className="form-control w-50 mx-auto mt-2 mb-2"
        handler={title.handler}
        value={title.value}
        placeholder="Введите название новости"
      />
      <Input
        className="form-control w-50 mx-auto mt-2 mb-2"
        handler={text.handler}
        value={text.value}
        placeholder="Введите текст новости"
      />

      <Button
        className="btn-light mx-auto d-block"
        handler={createHandler}
        disabled={createDisabled()}
      >
        Создать
      </Button>
    </>
  );
}

export default connect()(NewsCreator);
