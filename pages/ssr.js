import { useEffect, useState } from "react"
import styles from '@/styles/Home.module.css'
import Link from 'next/link';


function Ssr(props) {
    const { data } = props;
    console.log("SSR", data);


    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Example SSR</h1>
                <ul>
                    {
                        data.meals.map((value, key) => (
                            <li key={key}>
                                <Link
                                    href={{
                                        pathname: `/detail-ssr/${value.idMeal}`,
                                    }} 
                                ><a>{value.strMeal}</a></Link>
                            </li>
                        ))
                    }
                </ul>
            </main>
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Ssr