import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import dynamic from "next/dynamic";
import { useState } from 'react';

 


export default function Home() {
  const [isDynamic, setDynamic] = useState(false);
  
  const [HelloComponent, setHello] = useState(null);
 
  const showDynamic = () => {
    try {
      setHello( dynamic(() => import('components/hello'),{
        loading : () => <b>loading...</b>
      }));
      setDynamic(!isDynamic);
      console.log(isDynamic);
      
    } catch (error) {
        console.log(error);
    }

  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Learning <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          by Yusron Alamsyah
        </p>

        <div className={styles.grid}>
          <span className={styles.card}>
          <Link href="/avatars"><a>
            <h2 className='fontBlue'>List Data &rarr;</h2>
            <p className='fontBlue'>Find List Data avatars API.</p>
          </a></Link>
          </span>
        </div>

        <hr />
        <button onClick={showDynamic}>Show Dynamic Import</button>
        {
          isDynamic &&
            <HelloComponent />
          
        }
      </main>
    <style jsx>{`
      .fontBlue{
        color: #0070f3;
      }
    `}</style>
    </div>
  )
}
