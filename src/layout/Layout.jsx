import styles from "@/styles/Layout.module.css";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <h1>
            <Link href="/">Food App</Link>
          </h1>
        </div>

        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>Developed by Amir Taheri ❤️</p>
      </footer>
    </>
  );
};

export default Layout;
