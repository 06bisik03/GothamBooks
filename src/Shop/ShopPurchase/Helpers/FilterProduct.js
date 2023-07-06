import React, { useState } from "react";
import styles from "./FilterProduct.module.css";

const FilterProduct = (props) => {
  const [increasingPriceChecked, setIncreasingPriceChecked] = useState(false);
  const [decreasingPriceChecked, setDecreasingPriceChecked] = useState(false);
  const [increasingPageChecked, setIncreasingPageChecked] = useState(false);
  const [decreasingPageChecked, setDecreasingPageChecked] = useState(false);
  const [increasingDateChecked, setIncreasingDateChecked] = useState(false);
  const [decreasingDateChecked, setDecreasingDateChecked] = useState(false);
  const [increasingAlphabetChecked, setIncreasingAlphabetChecked] =
    useState(false);
  const [decreasingAlphabetChecked, setDecreasingAlphabetChecked] =
    useState(false);

  const handlePriceCheckboxChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      setIncreasingPriceChecked(true);
      setDecreasingPriceChecked(false);
    }
  };

  const handlePageCheckboxChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      setIncreasingPageChecked(true);
      setDecreasingPageChecked(false);
    }
  };

  const handleDateCheckboxChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      setIncreasingDateChecked(true);
      setDecreasingDateChecked(false);
    }
  };

  const handleAlphabetCheckboxChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      setIncreasingAlphabetChecked(true);
      setDecreasingAlphabetChecked(false);
    }
  };

  const handleApplyFilter = () => {
    // Apply the selected filter options
    // Add your logic here
  };

  return (
    <div className={styles.filterContain}>
      <div>
        <label className={styles.labelInput}>Price</label>
        <div className={styles.price}>
          <div className={styles.oneCheckDiv}>
            <input
              type="checkbox"
              id="increasingPriceCheckbox"
              name="priceCheckbox"
              className={styles.checkbox}
              checked={increasingPriceChecked}
              onChange={handlePriceCheckboxChange}
            />
            <label htmlFor="increasingPriceCheckbox" className={styles.check}>
              Increasing
            </label>
          </div>
          <div className={styles.oneCheckDiv}>
            <input
              type="checkbox"
              id="decreasingPriceCheckbox"
              name="priceCheckbox"
              className={styles.checkbox}
              checked={decreasingPriceChecked}
              onChange={() => {
                setIncreasingPriceChecked(false);
                setDecreasingPriceChecked(true);
              }}
            />
            <label htmlFor="decreasingPriceCheckbox" className={styles.check}>
              Decreasing
            </label>
          </div>
        </div>
      </div>
      <div>
        <label className={styles.labelInput}>Pages</label>
        <div className={styles.price}>
          <div className={styles.oneCheckDiv}>
            <input
              type="checkbox"
              id="increasingPageCheckbox"
              name="pageCheckbox"
              className={styles.checkbox}
              checked={increasingPageChecked}
              onChange={handlePageCheckboxChange}
            />
            <label htmlFor="increasingPageCheckbox" className={styles.check}>
              Increasing
            </label>
          </div>
          <div className={styles.oneCheckDiv}>
            <input
              type="checkbox"
              id="decreasingPageCheckbox"
              name="pageCheckbox"
              className={styles.checkbox}
              checked={decreasingPageChecked}
              onChange={() => {
                setIncreasingPageChecked(false);
                setDecreasingPageChecked(true);
              }}
            />
            <label htmlFor="decreasingPageCheckbox" className={styles.check}>
              Decreasing
            </label>
          </div>
        </div>
      </div>
      <div>
        <label className={styles.labelInput}>Publish Date</label>
        <div className={styles.price}>
          <div className={styles.oneCheckDiv}>
            <input
              type="checkbox"
              id="increasingDateCheckbox"
              name="dateCheckbox"
              className={styles.checkbox}
              checked={increasingDateChecked}
              onChange={handleDateCheckboxChange}
            />
            <label htmlFor="increasingDateCheckbox" className={styles.check}>
              Increasing
            </label>
          </div>
          <div className={styles.oneCheckDiv}>
            <input
              type="checkbox"
              id="decreasingDateCheckbox"
              name="dateCheckbox"
              className={styles.checkbox}
              checked={decreasingDateChecked}
              onChange={() => {
                setIncreasingDateChecked(false);
                setDecreasingDateChecked(true);
              }}
            />
            <label htmlFor="decreasingDateCheckbox" className={styles.check}>
              Decreasing
            </label>
          </div>
        </div>
      </div>
      <div>
        <label className={styles.labelInput}>Alphabetical Order</label>
        <div className={styles.price}>
          <div className={styles.oneCheckDiv}>
            <input
              type="checkbox"
              id="increasingAlphabetCheckbox"
              name="alphabetCheckbox"
              className={styles.checkbox}
              checked={increasingAlphabetChecked}
              onChange={handleAlphabetCheckboxChange}
            />
            <label
              htmlFor="increasingAlphabetCheckbox"
              className={styles.check}
            >
              Increasing
            </label>
          </div>
          <div className={styles.oneCheckDiv}>
            <input
              type="checkbox"
              id="decreasingAlphabetCheckbox"
              name="alphabetCheckbox"
              className={styles.checkbox}
              checked={decreasingAlphabetChecked}
              onChange={() => {
                setIncreasingAlphabetChecked(false);
                setDecreasingAlphabetChecked(true);
              }}
            />
            <label
              htmlFor="decreasingAlphabetCheckbox"
              className={styles.check}
            >
              Decreasing
            </label>
          </div>
        </div>
      </div>
      <button className={styles.formularButton} onClick={handleApplyFilter}>
        Apply Filter
      </button>
    </div>
  );
};

export default FilterProduct;
