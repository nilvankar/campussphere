import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { adminModules } from '@/app/data'
const AdminModule = () => {
 
  return (
    <div className='flex flex-row justify-center items-center'>
    {adminModules.map((module,i)=>(
      <div className='brightness-90 hover:brightness-100 mx-10 mt-32'>

      <Link className='text-white bg-violet-900'  style={{textDecoration:"none"}} key={i} href={module.href}><Image src={module.src} height={module.height} width={module.width} alt={module.alt} />
      <span>{module.alt}</span>
      </Link>
      </div>
    ))}
    </div>
  )
}

export default AdminModule