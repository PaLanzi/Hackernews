import React from "react";
import "./list.css"

function list({ news }) {
  return (
    <ul className="unordered-list">
      {news.map((item) => (
        <li key={item.objectID}>{item.title}</li>
      ))}
    </ul>
  );
}

export default list;

// map through results and display directly, like in the list of students from prev exercise<result news = {news}/>
