import React from 'react'
import { useQuery } from "@apollo/client";
import Link from 'next/link';
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import { GET_CATEGORIES_BY_ID } from '../../api/schema';


function CategoryById() {
    const router = useRouter()
    const {categoryId} = router.query;
    const { loading, error, data } = useQuery(GET_CATEGORIES_BY_ID, {
        variables: { 
            categoryId : categoryId
         },
      });
    
    if (loading) return 'Loading..';
    if (error) return `Error! ${error.message}`;
    console.log(data);
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <ol>
                    {
                        data.category.products.items.map((value, key) => (
                            <Link href={`../detail-product/${value.sku}`} key={key}>
                                <a><li>{value.name}</li></a>
                            </Link>
                        ))
                    }
                </ol>
            </main>
        </div>
    )
}

export default CategoryById