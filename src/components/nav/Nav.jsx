import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <h2 style={{ cursor: "default" }}>/ hello@essential.io</h2>
      </div>
      <div>
        <ul className={styles.options}>
          <li className={styles.li}>Product</li>
          <li style={{ cursor: "default" }}>.</li>
          <li className={styles.li}>Resourses</li>
          <li style={{ cursor: "default" }}>.</li>
          <li className={styles.li}>Our Work</li>
        </ul>
      </div>
      <div>
        <ul className={styles.options2}>
          <li className={styles.li}>FAQ</li>
          <li>
            <button className={styles.li}>Download API</button>
          </li>
          <li className={styles.li}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
              className={styles.svg}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 6H20M4 12H14M4"
                  stroke="#f1f1f1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
