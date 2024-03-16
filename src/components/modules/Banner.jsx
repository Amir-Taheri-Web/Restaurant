/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Banner.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Food App</h2>
        <div>
          <span>Food Delivery and Takeout!</span>
          <p>
            Food App is an online food ordering and delivery platform launched
            by WebUtopia in 2024. Meals are delivered by couriers using cars,
            scooters, bikes, or on foot.
          </p>
        </div>
        <Link href="/menu">See All</Link>
      </div>

      <div className={styles.right}>
        <img src="/images/banner.png" alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
