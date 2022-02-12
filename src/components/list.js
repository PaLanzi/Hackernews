import React from "react";

function list({ news }) {
  return (
    <ul>
      {news.map((item) => (
        <li key={item.objectID}>{item.title}</li>
      ))}
    </ul>
  );
}

export default list;

// map through results and display directly, like in the list of students from prev exercise<result news = {news}/>
