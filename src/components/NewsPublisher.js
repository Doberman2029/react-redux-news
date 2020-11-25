import React from "react";
import { connect, useSelector } from "react-redux";
import CentredText from "./CentredText";

import NewsCard from "./NewsCard";

function NewsPublisher() {
  const news = useSelector((state) => state.news);
  let notPublishedNews = news.filter((el) => el.published === false);

  if (!notPublishedNews.length > 0) {
    return <CentredText>Все новости опубликованы</CentredText>;
  }

  return (
    <>
      {notPublishedNews.map((el) => (
        <NewsCard
          title={el.title}
          text={el.text}
          date={el.createdTime}
          key={el.id}
          createdBy={el.createdBy}
          button={true}
          id={el.id}
        />
      ))}
    </>
  );
}

export default connect()(NewsPublisher);
