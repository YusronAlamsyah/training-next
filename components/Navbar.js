import Link from 'next/link'
import React from 'react'


function Navbar() {
  return (
    <ul className='menu'>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/avatars"><a>Avatars</a></Link></li>
        <li><Link href="/csr"><a>CSR</a></Link></li>
        <li><Link href="/ssr"><a>SSR</a></Link></li>
        <li><Link href="/isg"><a>ISG</a></Link></li>
        <li><Link href="/ssg"><a>SSG</a></Link></li>
        <li><Link href="/apollo/category"><a>Apollo</a></Link></li>
    </ul>
  )
}

export default Navbar