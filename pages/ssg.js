import { useEffect, useState } from "react"
import styles from '@/styles/Home.module.css'

function Ssg(props) {
    const {data} = props;
    console.log("SSG",data);

    return (
        <div className={styles.container}>
        <main className={styles.main}>
            <h1>Example SSG</h1>
            <p>Data in Console</p>
            </main>
        </div>
    )
}
export async function getStaticProps() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    const data = await res.json()
    return {
      props: {
        data
      }, // will be passed to the page component as props
    }
  }

export default Ssg