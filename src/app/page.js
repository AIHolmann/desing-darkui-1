import Promotionalnav from "@/components/promotionalnav/Promotionalnav";
import styles from "./page.module.css";
import Nav from "@/components/nav/Nav";
import Searchbar from "@/components/searchbar/Searchbar";
import Marketplace from "@/components/marketplace/Markertplace";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Promotionalnav />
      <div style={{ cursor: "default" }}>
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
      <Marketplace />
    </main>
  );
}
