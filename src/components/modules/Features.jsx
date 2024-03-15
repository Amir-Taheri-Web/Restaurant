import Choice from "@/icons/Choice";
import Clock from "@/icons/Clock";
import Fast from "@/icons/Fast";
import Food from "@/icons/Food";
import styles from "@/styles/Features.module.css";

const Features = () => {
  return (
    <div className={styles.container}>
      <h3>Why Us?</h3>

      <div className={styles.subContainer}>
        <div>
          <Fast />
          <span>Fast</span>
        </div>

        <div>
          <Food />
          <span>Best Restaurants</span>
        </div>

        <div>
          <Choice />
          <span>your Choice</span>
        </div>

        <div>
          <Clock />
          <span>24-7</span>
        </div>
      </div>
    </div>
  );
};

export default Features;
