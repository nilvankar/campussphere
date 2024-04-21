
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const HomeMainPage = () => {
  return (
    <div>
    <Link className='text-black' style={{textDecoration:"none"}} href='/home/dashboard'><Image src='/images/dashbord.png' height={200} width={200} alt='Dashboard' /><span>Dashboard</span></Link>
    <Link className='text-black' style={{textDecoration:"none"}} href='/home/statistics'><Image src='/images/statistics.png' height={200} width={200} alt='Statistics' />Statistics</Link>

    </div>
  )
}

export default HomeMainPage