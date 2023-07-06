import styles from "./Books.module.css";
import FilterProduct from "./Helpers/FilterProduct";
import Pagination from "./Helpers/Pagination";
import ProductBook from "./ProductBook";
import SearchBarBooks from "./Helpers/SearchBarBooks";
import { useState } from "react";
import BuyConfirmation from "./Helpers/BuyConfirmation";
import BuyConfirmationBooks from "./Helpers/BuyConfirmationBooks";
import { useContext } from "react";

import { CartContext } from "../cart-ctx";
import { useEffect } from "react";

function Books() {
  const [modalOpen, setModalOpen] = useState(false);
  const [valueWanted, setValueWanted] = useState(240727);
  const [chosenItem, setChosenItem] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [wantedDetails, setWantedDetails] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
 const [noItem, setNoItem] = useState(true);
 const [filterParam, setFilterParam] = useState([]);

 const itemsPerPage = 8; // Number of items to display per page


  function trigger() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(null);
  }
  function currentChosenItem(item) {
    setChosenItem(item);
    console.log(item);
  }

  const totalItems = wantedDetails.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = wantedDetails.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const transformData = (bookData) => {
    console.log(bookData);
    const toDerive = bookData.items;
    console.log(toDerive);

    const transformedData = toDerive
      .map((item) => {
        const isbn = item.volumeInfo?.industryIdentifiers
          ? item.volumeInfo?.industryIdentifiers[0].identifier
          : false;
        const key = item.id;
        const authors = item.volumeInfo?.authors
          ? item.volumeInfo.authors[0]
          : false;
        const title = item.volumeInfo.title;
        const thumbnail = item.volumeInfo?.imageLinks
          ? item.volumeInfo.imageLinks.thumbnail
          : false;
        const genre = item.volumeInfo.categories;
        const price = item.saleInfo?.retailPrice
          ? item.saleInfo.retailPrice.amount
          : 14.99;
        const pages = item.volumeInfo?.pageCount
          ? item.volumeInfo.pageCount
          : 199;
        return { isbn, key, authors, title, thumbnail, genre, price, pages };
      })
      .filter((item) => {
        return item.isbn && item.authors && item.thumbnail;
      });

    setWantedDetails(transformedData);
  };

  function filterOut(params) {}
  useEffect(() => {
    console.log(filterParam);
  }, [filterParam]);
  return (
    <div>
      {modalOpen && (
        <BuyConfirmationBooks
          closeModal={closeModal}
          currentItem={chosenItem}
        />
      )}
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <SearchBarBooks forward={transformData} />
          <div className={styles.products}>
            <div className={styles.productsAndPagination}>
              { (
                currentItems.map((item) => (
                  <ProductBook
                    trigger={trigger}
                    item={item}
                    key={item.key}
                    passChosenItem={currentChosenItem}
                    noItems={noItem}
                  />
                ))
              )}

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

export default Books;
