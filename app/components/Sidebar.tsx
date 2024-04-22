import Link from 'next/link'
import React from 'react'
import { sideNavItems } from '../data'
const Sidebar = () => {
  
  return (
    <div>
      <nav>
        <ul>
          {sideNavItems.map((link)=>(
            <li  key={link.href}><Link className='text-black' style={{textDecoration:"none"}} href={link.href} >{link.alt}</Link></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar