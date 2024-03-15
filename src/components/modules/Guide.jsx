/* eslint-disable react/no-unescaped-entities */
import styles from "@/styles/Guide.module.css";

const Guide = () => {
  return (
    <div className={styles.container}>
      <h3>How to order?</h3>

      <ul>
        <li>Sing in (or create an account) and set your delivery address</li>
        <li>Choose the restaurant you want to order from</li>
        <li>Select your items and tap "Add to Cart"</li>
        <li>To place your order, select "View cart" or "Checkout"</li>
        <li>Review you order and tap "Place order"...</li>
        <li>Track your order progress</li>
      </ul>
    </div>
  );
};

export default Guide;
