import Card from "../card/Card";
import styles from "./marketplace.module.css";

const Marketplace = () => {
  const market = [
    {
      title: "File Manager",
      rate: "4.8",
      information:
        "Fast, Easy And Powerful File Explorer For Desktop & Other Devices.",
    },
    {
      title: "Report Data",
      rate: "5.0",
      information:
        "Data Report Is An Analytical Tool Used To Past, Present, And Future.",
    },
    {
      title: "Wallet App",
      rate: "4.4",
      information: "Send Email To Your Contacts To Get Easily Fast Response!",
    },
  ];

  return (
    <section className={styles.section} style={{ cursor: "default" }}>
      <div className={styles.titlecontainer}>
        <h3>Explore What Makes Up A Marketplace</h3>
        <div className={styles.seeall}>
          <a href="#">See All </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="#f1f1f1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={styles.cardcontainer}>
        {market.map((E) => (
          <Card
            title={E.title}
            rate={E.rate}
            information={E.information}
            key={E.title}
          />
        ))}
      </div>
    </section>
  );
};
export default Marketplace;
