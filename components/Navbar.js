import Link from 'next/link'
import React from 'react'


function Navbar() {
  return (
    <ul className='menu'>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/avatars"><a>Avatars</a></Link></li>
    </ul>
  )
}

export default Navbar