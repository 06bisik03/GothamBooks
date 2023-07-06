import styles from "./FilterMovies.module.css";

const allMovieGenres = [
  {
    genre: "Horror",
    key: 1,
  },
  { genre: "Action", key: 2 },
  { genre: "Thriller", key: 3 },
  {
    genre: "Mystery",
    key: 4,
  },
  {
    genre: "Crime",
    key: 5,
  },
  {
    genre: "Drama",
    key: 6,
  },
];

function CheckBox({ item }) {
  return (
    <label>
      <input type="checkbox" name="genre" value={item} />
      <span className={styles.checkbox}></span>
      {item}
    </label>
  );
}
function FilterMovies() {
  return (
    <div className={styles.filterContain}>
      <h3 className={styles.characterTag}>Movie Genre</h3>
      <div className={styles.filter}>
        {allMovieGenres.map((item) => (
          <CheckBox item={item.genre} key={item.key} />
        ))}
      </div>
      <label className={styles.labelInput}>Release Date Range</label>
      <div className={styles.price}>
        <input className={styles.pricer} placeholder="Start Date" />
        <input className={styles.pricer} placeholder="End Date" />
      </div>
      <label className={styles.labelInput}>Length(Minutes)</label>
      <div className={styles.price}>
        <input className={styles.pricer} placeholder="Start Range(>) " />
        <input className={styles.pricer} placeholder="End Range(<)" />
      </div>

      <button className={styles.formularButton}>Apply Filter</button>
    </div>
  );
}
export default FilterMovies;
