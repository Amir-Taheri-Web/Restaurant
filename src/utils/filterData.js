const filterData = (data, difficulty, time) => {
  const filteredData = data.filter((item) => {
    const difficultyItem = item.details.find(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeItem = item.details.find((detail) => {
      if (
        detail["Cooking Time"] &&
        time === "less" &&
        +detail["Cooking Time"].split(" ")[0] <= 30
      ) {
        return detail;
      } else if (
        detail["Cooking Time"] &&
        time === "more" &&
        +detail["Cooking Time"].split(" ")[0] > 30
      ) {
        return detail;
      }
    });

    if (difficulty && time) {
      if (
        item.details.includes(difficultyItem) &&
        item.details.includes(timeItem)
      )
        return item;
    } else if (difficulty && !time) {
      if (item.details.includes(difficultyItem)) return item;
    } else if (!difficulty && time) {
      if (item.details.includes(timeItem)) return item;
    }
  });

  return filteredData;
};

export default filterData;
