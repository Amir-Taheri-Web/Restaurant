import { InfinitySpin } from "react-loader-spinner";
import styles from "@/styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <InfinitySpin
        visible={true}
        width="250"
        color="#12b412"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
