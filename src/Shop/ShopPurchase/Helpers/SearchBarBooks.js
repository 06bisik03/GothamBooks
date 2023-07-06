import styles from "./SearchBarBooks.module.css";
import { useState, useEffect } from "react";

function SearchBarBooks(props) {
  const [enteredText, setEnteredText] = useState("");
  const [bookData, setBookData] = useState(null);
  const [valueWanted, setValueWanted] = useState(240727);
  const [coverISBN, setCoverISBN] = useState([]);
  const [bookWanted, setBookWanted] = useState([]);
  const [isFaulty, setIsFaulty] = useState(false);

  const handleSubmit = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${enteredText}&country=de`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          props.forward(data);
        });
    }
  };

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

export default SearchBarBooks;
