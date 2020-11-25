import React from "react";
import { connect, useSelector } from "react-redux";
import CentredText from "./CentredText";
import Input from "./Input";
import { InputHandler } from "./inputHandler";

import NewsCard from "./NewsCard";
import NewsUserButtons from "./NewsUserButtons";

function News() {
  const input = InputHandler();

  const storage = useSelector((state) => state.news);
  const user = useSelector((state) => state.currentUser);

  let news = storage.filter((el) => el.published || el.createdBy === user.name);

  let searchedNews = news.filter((el) => el.title.includes(input.value));

  return (
    <>
      <Input
        handler={input.handler}
        value={input.value}
        placeholder="Введите название новости"
        className="form-control w-50 mx-auto mt-2 mb-2"
      />

      {user.name ? <NewsUserButtons admin={user.isAdmin} /> : ""}

      {searchedNews.length > 0 ? (
        searchedNews.map((el) => (
          <NewsCard
            title={el.title}
            text={el.text}
            date={el.createdTime}
            key={el.id}
            createdBy={el.createdBy}
            userIsAdmin={user.isAdmin}
            id={el.id}
          />
        ))
      ) : (
        <CentredText>Увы, но новостей не найдено</CentredText>
      )}
    </>
  );
}

export default connect()(News);
