import Apple from "@/icons/Apple";
import Binance from "@/icons/Binance";
import SpaceX from "@/icons/SpaceX";
import Tesla from "@/icons/Tesla";
import styles from "@/styles/Companies.module.css";

const Companies = () => {
  return (
    <div className={styles.container}>
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
};

export default Companies;
