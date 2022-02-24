import "./App.css";
import React, { useState, useEffect } from "react";
import List from "./components/list";
import Form from "./components/form";

function App() {
  const [news, setNews] = useState([]);
  const [searchValue, setSearchValue] = useState();
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://hn.algolia.com/api/v1/search?query=${searchValue}`
        );
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setNews(data.hits);
        } else {
          console.error("shit happens");
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchNews();
  }, [searchValue]);

  function handleSearchValue(value) {
    setSearchValue(value);
  }

  return (
    <div className="HeaderElement">
      <h1>This is the N3w H4ck3r N3w5.</h1>
      <Form searchValue={handleSearchValue} />
      <List news={news} />
    </div>
  );
}
export default App;

//suggestion for the form: value from the input to display here, in line 11 instead of Prisma there will be whatever te value from the form is
