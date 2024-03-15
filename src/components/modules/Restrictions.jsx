import styles from "@/styles/Restrictions.module.css";

const Restrictions = () => {
  return (
    <div className={styles.container}>
      <h3>Restrictions</h3>
      <p>
        Prohibited items. Merchants may only offer to sell items expressly
        permitted by their agreement with Food App. A merchant cannot offer
        specially regulated or illicit items, like cannabidiol (CBD) and
        tetrahydrocannabinol (THC), on their Food App menu.
      </p>
    </div>
  );
};

export default Restrictions;
