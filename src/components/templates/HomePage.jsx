import Banner from "../modules/Banner";
import Features from "../modules/Features";
import styles from "@/styles/HomePage.module.css";
import Introduction from "../modules/Introduction";
import Companies from "../modules/Companies";
import Guide from "../modules/Guide";
import Navigate from "../modules/Navigate";
import Restrictions from "../modules/Restrictions";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Features />
      <Introduction />
      <Companies />
      <Guide />
      <Navigate />
      <Restrictions />
    </div>
  );
};

export default HomePage;
