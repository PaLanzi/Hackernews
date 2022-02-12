import React from "react";
import { useParams } from "react-dom";
import result from "./components/result"

function list(news) {
  const articles = useParams();

  const article = article.find((article) => article.title === title);
  return (
<ul>
      <li>
      <result news = {news}/>
      </li>
</ul>
      )
}

export default list