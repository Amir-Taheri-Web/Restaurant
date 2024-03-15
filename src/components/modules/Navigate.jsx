import styles from "@/styles/Navigate.module.css"
import Link from "next/link"

const Navigate = () => {
  return (
    <div className={styles.container}>
      <Link href="/menu">Menu</Link>
      <Link href="/categories">Categories</Link>
      <Link href="/">Discount</Link>
    </div>
  )
}

export default Navigate
