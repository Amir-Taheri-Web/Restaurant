/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/NotFoundPage.module.css";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <img src="/images/404.jpg" alt="not found" />
      <button type="button" onClick={backHandler}>
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
