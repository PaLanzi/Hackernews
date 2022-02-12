import "./App.css";
import React, { useState, useEffect } from "react";
//import list from "./components/result";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const searchValue = "Prisma"
        const res = await fetch(
          `https://hn.algolia.com/api/v1/search?query=${searchValue}`
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
    console.log({news})
  }, []);
  return (
    <div>
      <p>Hello World.</p>
    </div>
  );
  //<list news={news}/>
}
export default App;

//suggestion for the form: value from the input to display here, in line 11 instead of Prisma there will be whatever te value from the form is

