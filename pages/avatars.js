import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { list_data } from './data';
import stylesAvatar from "@/styles/avatars.module.css"
import React, { useEffect, useState } from "react";


export default function Home() {
    const [datalist, setList] = useState(list_data);

    const callApi = async () => {
        try {
            const data = await fetch(`api/customer/list`);
            const result = await data.json();
            setList(result);
            log(result);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className={styles.container}>
            <Head>
                <title>List Data</title>
                <meta name="description" content="List Avatars" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>
                    List Data
                </h1>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <button><Link href="/"><a>Back</a></Link></button></td>
                            <td><button onClick={callApi}>Change Api Data</button></td>
                        </tr>
                    </tbody>
                </table>

                <div className={styles.grid}>
                    <ul>
                        {
                            datalist.map((value, key) => (
                                <li className={stylesAvatar.colorDark} key={key}>
                                    <Link
                                        href={{
                                            pathname: '/detail',
                                            query: { name: value.name, position: value.position, gender: value.gender, profession: value.profession, photoUrl: value.photoUrl,telp: value.telp,address: value.address },
                                        }} as='/detail'
                                    ><a>{value.name}</a></Link>
                                </li>
                            ))
                        }

                    </ul>
                </div>

            </main>

        </div>
    )
}
