import "./styles.css";
import Author from "./components/Author";
import Quote from "./components/Quote";
import { FaTwitterSquare, FaQuoteLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

const App = () => {
  const [quotes, setQoutes] = useState([]);
  const [current, setCurrent] = useState({
    text:
      "Genius is one percent inspiration and ninety-nine percent perspiration",
    author: "Thomas Edison"
  });
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => setQoutes(data));
  }, []);

  const handleClick = () => {
    let index = Math.floor(Math.random() * quotes.length);

    setCurrent(quotes[index]);
  };

  return (
    <div className="content">
      <div className="text">
        <FaQuoteLeft />
        <Quote quote={current.text} />
      </div>
      <Author author={current.author} />

      <div className="footer">
        <button onClick={handleClick}>Next Quote</button>
        <a
          className="twitter"
          href={`https://twitter.com/intent/tweet?text=${current.text}`}
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitterSquare />
        </a>
      </div>
    </div>
  );
};
export default App;
