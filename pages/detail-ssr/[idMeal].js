import React from 'react'
import styles from '@/styles/Home.module.css'

function DetailSSR(props) {
    const { meal } = props;
    console.log("SSR Context",meal[0]);
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Example Detail SSR with context</h1>
                <p>{meal[0].strMeal}</p>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const id = context.params.idMeal;
    // Fetch data from external API
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await res.json()
    const meal = data.meals;
    // Pass data to the page via props
    return { props: { meal } }
}

export default DetailSSR