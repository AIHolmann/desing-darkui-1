import Promotionalnav from "@/components/promotionalnav/Promotionalnav";
import styles from "./page.module.css";
import Nav from "@/components/nav/Nav";
import Searchbar from "@/components/searchbar/Searchbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Promotionalnav />
      <div>
        <h1>
          Get The Application You
          <br />
          Want For Growth
        </h1>
        <h2>
          With over 8,000 apps for all the different ways you want to customize
          your store.
        </h2>
      </div>
      <Searchbar />
    </main>
  );
}
