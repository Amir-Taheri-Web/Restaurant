import styles from "@/styles/Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.container}>
      <h3>Who are We?</h3>
      <p>
        Food App company was founded in 2024 by Amir Taheri and Erfan Mohammadi.
        The company began food delivery in August 2024 with the launch of
        FoodFresh service in Santa Monica, California. In 2024 the platform was
        renamed to Food App and the ordering software was released as its own
        application, separate from the app for Utopia rides. In 2024 in
        commenced operations in both London and Paris.
      </p>
    </div>
  );
};

export default Introduction;
