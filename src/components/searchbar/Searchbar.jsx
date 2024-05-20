import styles from "./searchbar.module.css";

const Searchbar = () => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <form action="">
          <input type="text" placeholder="Search API, Apps & Plugin" />
          <button type="submit">Search Now</button>
        </form>
      </div>
    </div>
  );
};
export default Searchbar;
