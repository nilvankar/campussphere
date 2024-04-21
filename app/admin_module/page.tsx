import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { adminModules } from '../data'
const AdminModule = () => {
 
  return (
    <div>
    {adminModules.map((module,i)=>(
      <Link className='text-black' style={{textDecoration:"none"}} key={i} href={module.href}><Image src={module.src} height={module.height} width={module.width} alt={module.alt} />
      <span>{module.alt}</span>
      </Link>
    ))}
    </div>
  )
}

export default AdminModule