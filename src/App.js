import "./App.css";
import React, { useState, useEffect } from "react";
import List from "./components/list";
import Form from "./components/form";
import Confetti from "./components/confetti";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [streamAnimation, toggleStreamAnimation] = useState(false);
  const [streamAnimation2, toggleStreamAnimation2] = useState(false);
  const [news, setNews] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://hn.algolia.com/api/v1/search?query=${searchValue}`
        );
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setNews(data.hits);
          setLoading(false);
        } else {
          console.error("....? nothing happins");
        }
      } catch (e) {
        console.log(e.message);
        alert("Batman is coming!");
      }
    };
    fetchNews();
  }, [searchValue]);

  function handleSearchValue(value) {
    setSearchValue(value);
  }

  return (
    <div>
      <button
        onClick={() => setShowConfetti(!showConfetti)}
        style={{
          paddin: "30px",
          background: "blue",
          color: "white",
          margin: "25px",
        }}
      >
        Super fancy stuff ClickMe
      </button>
      {showConfetti && (
        <div style={{ display: "flex", "justify-content": "space-between" }}>
          <div style={{ width: "100vh", height: "80vh", background: "pink" }}>
            <button onClick={() => toggleStreamAnimation(true)}>start</button>
            <button onClick={() => toggleStreamAnimation(false)}>stop</button>
            <Confetti
              options={{ count: 50, timeout: 2000 }}
              streamAnimation={streamAnimation}
            />
          </div>
          <div style={{ width: "100vh", height: "80vh", background: "pink" }}>
            <button onClick={() => toggleStreamAnimation2(true)}>start</button>
            <button onClick={() => toggleStreamAnimation2(false)}>stop</button>
            <Confetti
              options={{ count: 50, gravity: 20 }}
              streamAnimation={streamAnimation2}
            />
          </div>
        </div>
      )}
      <h1 className="HeaderElement">
        This is the N3w H4ck3r N3w5.
        <Form searchValue={handleSearchValue} />
        {(loading && <div className="loader">&nbsp;wait please</div>) || (
          <List news={news} />
        )}
      </h1>

      {showConfetti && (
        <div style={{ display: "flex", "justify-content": "space-between" }}>
          <div style={{ width: "100vh", height: "80vh", background: "pink" }}>
            <Confetti
              options={{ count: 50, timeout: 2000 }}
              streamAnimation={streamAnimation}
            />
          </div>
          <div style={{ width: "100vh", height: "80vh", background: "pink" }}>
            <Confetti
              options={{ count: 50, gravity: 20 }}
              streamAnimation={streamAnimation2}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
