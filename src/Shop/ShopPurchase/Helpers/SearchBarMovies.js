import styles from "./SearchBarBooks.module.css";
import { useState, useEffect } from "react";

function SearchBarMovies(props) {
  const [enteredText, setEnteredText] = useState("");
  const [id, setID] = useState([]);
  function handleSubmit(event) {
    if (event.key === "Enter" && event.target.value !== "") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          enteredText
        )}&api_key=4528daf0f30a22e6f9111a01e839870c`
      )
        .then((response) => response.json())
        .then((data) => {
          props.forwardItem(data.results);
        });
    }
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.search__input}
        type="text"
        placeholder="Search"
        value={enteredText}
        onChange={(event) => setEnteredText(event.target.value)}
        onKeyDown={handleSubmit}
      />
    </div>
  );
}

export default SearchBarMovies;
