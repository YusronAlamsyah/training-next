import { useEffect, useState } from "react"
import styles from '@/styles/Home.module.css'

function Csr() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                console.log("CSR",data.meals);
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div className={styles.container}>
        <main className={styles.main}>
            <h1>Example CSR</h1>
            <p>Data in Console</p>
            </main>
        </div>
    )
}

export default Csr