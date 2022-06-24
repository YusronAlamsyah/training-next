import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'



function Custom404() {
    const router = useRouter();
    useEffect(() => {
        window.setTimeout(function(){
            router.push("/");
        }, 5000);
    },[] );
    

    return (
        <div className={styles.container}>
            <Head>
                <title>Not Found</title>
                <meta name="description" content="List Avatars" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>
                    Sorry , Halamannya Kosong nich :)
                </h1>
                <p>Your Page will redirect to Home Page after 5 seconds</p>
                {/* <Link href="/"><a>
                    <button>Back</button>
                </a></Link> */}
            </main>
        </div>

    )
}

export default Custom404