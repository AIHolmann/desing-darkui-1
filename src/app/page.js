import Promotionalnav from "@/components/promotionalnav/Promotionalnav";
import styles from "./page.module.css";
import Nav from "@/components/nav/Nav";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Promotionalnav />
    </main>
  );
}
