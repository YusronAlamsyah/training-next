import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


function Layout({children,title = 'Yusron Training'}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout