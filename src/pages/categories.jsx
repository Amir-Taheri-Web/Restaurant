import CategoriesPage from "@/components/templates/CategoriesPage";
import filterData from "@/utils/filterData";

const Categories = ({ data }) => {
  return (
    <>
      <CategoriesPage data={data} />
    </>
  );
};

const getServerSideProps = async (context) => {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  const filteredData = filterData(data, difficulty, time);

  return {
    props: { data: filteredData },
  };
};

export default Categories;
export { getServerSideProps };
