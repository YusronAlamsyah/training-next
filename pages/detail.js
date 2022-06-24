import React, { useState } from 'react'
import { useRouter } from "next/router";
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import dynamic from "next/dynamic";


function detail() {
    const { query } = useRouter();
    const [isDynamic, setDynamic] = useState(false);
    const HelloComponent = dynamic(() => import('@/components/hello'), {
        ssr: true
    });
    const HelloComponentFalse = dynamic(() => import('@/components/cekssr'), {
        ssr: false
    });


    return (
        <div className={styles.container}>
            <Head>
                <title>Detail</title>
                <meta name="description" content="List Avatars" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1>Dynamic Import SSR True</h1>
                <HelloComponent />
                <hr />
                <h1>Dynamic Import SSR False</h1>
                <HelloComponentFalse />
                <hr />
                <h1 >
                    Detail Data
                </h1>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>:</td>
                                <td>{query.name}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>:</td>
                                <td>{query.gender}</td>
                            </tr>
                            {
                                query.address &&
                                <tr>
                                    <td>Address</td>
                                    <td>:</td>
                                    <td>{query.address}</td>
                                </tr>
                            }
                            {
                                query.telp &&
                                <tr>
                                    <td>Telp</td>
                                    <td>:</td>
                                    <td>{query.telp}</td>
                                </tr>
                            }
                            {
                                query.position &&
                                <tr>
                                    <td>Position</td>
                                    <td>:</td>
                                    <td>{query.position}</td>
                                </tr>
                            }
                            {
                                query.profession &&
                                <tr>
                                    <td>Profession</td>
                                    <td>:</td>
                                    <td>{query.profession}</td>
                                </tr>
                            }
                            {
                                query.photoUrl &&
                                <tr>
                                    <td>Image</td>
                                    <td>:</td>
                                    <td>
                                        <Image
                                            src={query.photoUrl}
                                            alt={query.name}
                                            width={500}
                                            height={500}
                                            placeholder='blur'
                                            blurDataURL={query.photoUrl}
                                            layout="responsive"
                                            objectFit='contain'
                                        />
                                    </td>
                                </tr>
                            }

                        </tbody>
                    </table>
                    <button><Link href="/avatars"><a>Back</a></Link></button>
                </div>
            </main>
        </div>
    )
}

export default detail