import styles from "./Books.module.css";
import FilterProduct from "./Helpers/FilterProduct";
import Pagination from "./Helpers/Pagination";
import ProductBook from "./ProductBook";
import SearchBar from "./Helpers/SearchBarBooks";
import { useEffect, useState } from "react";
import BuyConfirmation from "./Helpers/BuyConfirmation";
import { useContext } from "react";

import { CartContext } from "../cart-ctx";
import FilterMovies from "./Helpers/FilterMovies";
import SearchBarMovies from "./Helpers/SearchBarMovies";
import ProductMovie from "./ProductMovie";

function Movies() {
  const [modalOpen, setModalOpen] = useState(false);
  const [chosenItem, setChosenItem] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [neededArray, setNeededArray] = useState([]);
  const [genreArray, setGenreArray] = useState([]);
  const [itemWithGenre, setItemWithGenre] = useState(null);
  const itemsPerPage = 8; // Number of items to display per page

  const [movieArray, setMovieArray] = useState([]);

  function trigger() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function currentChosenItem(item) {
    setChosenItem(item);

    if (genreArray.length > 0) {
      const genres = genreArray.filter((genre) =>
        item.genre_ids.includes(genre.id)
      );
      setItemWithGenre([{ ...item, genres }]);
    }
  }

  function chooseMovieHandler(items) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTI4ZGFmMGYzMGEyMmU2ZjkxMTFhMDFlODM5ODcwYyIsInN1YiI6IjY0OTg3MTQ5YmJkMGIwMDBlNzJmZDQyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xcpR3WbvX7W0RaD5GpAJYIMNrwfbhwKANcaV0isUWJ8",
      },
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((response) => {
        setGenreArray(response.genres);
      })
      .catch((err) => console.error(err));
    const forward = items.filter((item) => {
      if (item.poster_path !== null) {
        return item;
      }
    });
    setMovieArray(forward);
    
  }

  const totalItems = movieArray.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = movieArray.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {modalOpen && (
        <BuyConfirmation closeModal={closeModal} currentItem={itemWithGenre} />
      )}
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <SearchBarMovies
            forwardItem={chooseMovieHandler}
            className={styles.searchBar}
          />
          <div className={styles.products}>
          
            <div className={styles.productsAndPagination}>
              {currentItems.map((item) => (
                <ProductMovie
                  trigger={trigger}
                  item={item}
                  key={item.id}
                  passChosenItem={currentChosenItem}
                />
              ))}
              <Pagination
                current={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
