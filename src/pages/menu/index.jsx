import MenuPage from "@/components/templates/MenuPage";

const Menu = ({ foods }) => {
  return (
    <>
      <MenuPage foods={foods} />
    </>
  );
};

const getStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  return {
    props: { foods: data },
    revalidate: process.env.REVALIDATE, //1 hour
  };
};

export default Menu;
export { getStaticProps };
