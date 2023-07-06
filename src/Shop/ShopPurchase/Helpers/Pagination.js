import React from "react";
import "./Pagination.css";

function Pagination({ current, totalPages, onPageChange }) {
  const goToPreviousPage = () => {
    if (current > 1) {
      onPageChange(current - 1);
    }
  };

  const goToNextPage = () => {
    if (current < totalPages) {
      onPageChange(current + 1);
    }
  };

  return (
    <div className="pagination-container">
      <div
        className={`pagination-number arrow ${current === 1 ? "disabled" : ""}`}
        onClick={goToPreviousPage}
      >
        <svg width="18" height="18">
          <use href="#left" />
        </svg>
        <span className="arrow-text">Previous</span>
      </div>

      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          className={`pagination-number ${
            current === index + 1 ? "pagination-active" : ""
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </div>
      ))}

      <div
        className={`pagination-number arrow ${
          current === totalPages ? "disabled" : ""
        }`}
        onClick={goToNextPage}
      >
        <span className="arrow-text">Next</span>
        <svg width="18" height="18">
          <use href="#right" />
        </svg>
      </div>
    </div>
  );
}

export default Pagination;
