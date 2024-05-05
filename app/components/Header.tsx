'use client'
import React from 'react';
import Image from 'next/image'
import Profile from './profile/Profile';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const Header = () => {
  const router=useRouter()
  return (
    <div className='bg-slate-300/95 w-screen h-40 flex items-center sm:w-screen'>
      {/* Apply styles directly to the Image component */}
      <div className='size-16 relative' style={{ width: '100px', height: '100px' }}>
        <Image src='/images/campusshere_logo.png' height={200} width={200} className='rounded-full mx-24' alt='campussphere' />
      </div>
      <h1 className=' text-white text-lg font-bold ml-36'>www.campussphere.com</h1>
      <div className='' style={{marginLeft:"60rem"}}>
       <Link href='/profile'>click</Link>
      </div>
    </div>
  );
};

export default Header;
