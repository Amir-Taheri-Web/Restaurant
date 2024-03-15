import styles from "@/styles/MenuPage.module.css";
import Card from "../modules/Card";

const MenuPage = ({ foods }) => {
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <ul className={styles.list}>
        {foods.map((food) => (
          <Card key={food.id} food={food} />
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
