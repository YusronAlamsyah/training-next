import { useEffect, useState } from "react"
import styles from '@/styles/Home.module.css'

function Isg(data) {
    console.log("ISG",data);

    return (
        <div className={styles.container}>
        <main className={styles.main}>
            <h1>Example ISG</h1>
            <p>Data in Console</p>
            </main>
        </div>
    )
}
export async function getStaticProps() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    const data = await res.json();
    return {
      props: {
        data
      }, 
      revalidate:10
    }
  }

export default Isg