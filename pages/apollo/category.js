import React from 'react'
import { useQuery } from "@apollo/client";
import Link from 'next/link';
import { GET_CATEGORIES } from '../api/schema';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';


function Category() {
    const response = useQuery(GET_CATEGORIES);
    const { loading, error, data } = response;
    if (loading) return 'Loading..';
    if (error) return `Error! ${error.message}`;
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>List Category</h1>
                <ol>
                    {
                        data.categories.items.map((value, key) => (
                            <Link href={`detail-category/${value.id}`} key={key}>
                                <a><li>
                                    {value.name}
                                    {
                                        value.image && 
                                        <Image
                                            src={value.image}
                                            alt={value.name}
                                            width={500}
                                            height={500}
                                            placeholder='blur'
                                            blurDataURL={value.image}
                                            layout="responsive"
                                            objectFit='contain'
                                        />
                                    }
                                    
                                    </li>
                                </a>
                            </Link>
                        ))
                    }
                </ol>
            </main>
        </div>
    )
}

export default Category