/* eslint-disable @next/next/no-img-element */
import Dollar from "@/icons/Dollar";
import Location from "@/icons/Location";
import styles from "@/styles/FoodDetailsPage.module.css";

const FoodDetailsPage = ({ data }) => {
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = data;

  return (
    <div className={styles.container}>
      <h2>Details</h2>

      <div className={styles.info}>
        <img src={`/images/${id}.jpeg`} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>
            <Location />
            {details[0].Cuisine}
          </p>
          <p>
            <Dollar />$
            {discount !== 0
              ? (((100 - discount) / 100) * price).toFixed(1)
              : price}
          </p>
          {discount !== 0 && <span>%{discount} OFF</span>}
        </div>
      </div>

      <div className={styles.introduction}>
        <p>{introduction}</p>
      </div>

      <div className={styles.details}>
        <h3>Details</h3>
        <ul>
          {details.map((item, index) => (
            <li key={index}>
              <span>{Object.keys(item)[0]}: </span>
              <span>{Object.values(item)[0]}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.ingredients}>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.recipe}>
        <h3>Recipe</h3>
        {recipe.map((item, index) => (
          <div key={index}>
            <span>{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <button type="button" className={styles.add}>
        Add to Cart
      </button>
    </div>
  );
};

export default FoodDetailsPage;
