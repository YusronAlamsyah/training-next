import React from 'react'
import { useQuery, useMutation } from "@apollo/client";
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import { ADD_SUBCRIBE, GET_PRODUCT_BY_ID } from '../../api/schema';
import Image from 'next/image';


function ProductById() {



    let input;
    const [addSubcribe, { data, loading, error }] = useMutation(ADD_SUBCRIBE);

    const router = useRouter()
    const { sku } = router.query;
    const getData = useQuery(GET_PRODUCT_BY_ID, {
        variables: {
            sku: sku
        },
    });
    const loading2 = getData.loading;
    const data2 = getData.data;
    const error2 = getData.error;

    if (loading) return 'Loading..';
    if (error) return `Error! ${error.message}`;

    if (loading2) return 'Loading..';
    if (error2) return `Error! ${error2.message}`;

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{data2.products.items[0].name}</h1>
                <p>Price : {data2.products.items[0].special_price}</p>


                <Image
                    src={data2.products.items[0].image.url}
                    alt={data2.products.items[0].name}
                    width={500}
                    height={500}
                    placeholder='blur'
                    blurDataURL={data2.products.items[0].image.url}
                    layout="responsive"
                    objectFit='contain'
                />

                <form
                    onSubmit={e => {
                        e.preventDefault();
                        addSubcribe({ variables: { email: input.value } });
                        input.value = '';
                    }}
                >
                    <input
                        ref={node => {
                            input = node;
                        }}
                    />
                    <button type="submit">Subcribe</button>
                </form>
                <div>
                    {console.log("input", data)}
                    {data && data.subscribe.status.message}
                </div>
            </main>
        </div>
    )
}

export default ProductById