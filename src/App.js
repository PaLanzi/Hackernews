import "./App.css";
import React, { useState, useEffect } from "react";
import result from "./components/result";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          "https://hn.algolia.com/api/v1/search?query=Prisma"
        );
        if (res.ok) {
          const data = await res.json();
          return setNews(data.results);
        }
        console.error("shit happens");
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchNews();
  }, []);
  return (
    <div>
      <p>Hello World.</p>
    </div>
  );
  <list news={news}/>
}
export default App;
