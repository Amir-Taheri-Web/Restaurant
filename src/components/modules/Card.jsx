/* eslint-disable @next/next/no-img-element */
import Dollar from "@/icons/Dollar";
import Location from "@/icons/Location";
import styles from "@/styles/Card.module.css";
import Link from "next/link";

const Card = ({ food }) => {
  const { id, name, details, discount, price } = food;

  return (
    <li className={styles.container}>
      <img src={`/images/${id}.jpeg`} alt={name} />

      <div className={styles.info}>
        <h4>{name}</h4>
        <span>
          <Location />
          {details[0].Cuisine}
        </span>
      </div>

      <div className={styles.price}>
        <span className={discount !== 0 ? styles.discountPrice : null}>
          <Dollar />$
          {discount !== 0
            ? (((100 - discount) / 100) * price).toFixed(1)
            : price}
        </span>

        {discount !== 0 && <div className={styles.discount}>%{discount}</div>}
      </div>

      <Link href={`/menu/${id}`}>See Details</Link>
    </li>
  );
};

export default Card;
