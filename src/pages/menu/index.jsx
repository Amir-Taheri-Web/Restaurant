import MenuPage from "@/components/templates/MenuPage";

const Menu = ({ foods }) => {
  return (
    <>
      <MenuPage foods={foods} />
    </>
  );
};

const getStaticProps = async () => {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  return {
    props: { foods: data },
    revalidate: 1 * 60 * 60, //1 hour
  };
};

export default Menu;
export { getStaticProps };
