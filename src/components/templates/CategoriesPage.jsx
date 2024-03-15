/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/CategoriesPage.module.css";
import queryTrimmer from "@/utils/queryTrimmer";
import { useRouter } from "next/router";
import { useState } from "react";
import Card from "../modules/Card";

const CategoriesPage = ({ data }) => {
  const router = useRouter();

  const [query, setQuery] = useState(router.query || { difficulty: "", time: "" });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setQuery((query) => ({ ...query, [name]: value }));
  };

  const searchHandler = () => {
    router.push({ pathname: "/categories", query: queryTrimmer(query) });
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <select
          value={query.difficulty}
          name="difficulty"
          onChange={changeHandler}
        >
          <option value="">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select value={query.time} name="time" onChange={changeHandler}>
          <option value="">Cooking Time</option>
          <option value="less">Less than 30min</option>
          <option value="more">More than 30min</option>
        </select>

        <button type="button" onClick={searchHandler}>
          Search
        </button>
      </div>

      <div className={styles.dataContainer}>
        {data.length ? (
          <ul>
            {data.map((food) => (
              <Card key={food.id} food={food} />
            ))}
          </ul>
        ) : (
          <img src="/images/search.png" alt="search image" />
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
