import React from 'react';
const Sidebar=React.lazy(()=>import('@/app/components/Sidebar')) ;
import { modules } from '@/app/data';
import Link from 'next/link';
import Image from 'next/image';

const MainModules = () => {
  return (
    <div className='w-screen overflow-y-hidden sm:w-screen'>
      <div className='' >
        {/* Sidebar */}
      

        {/* Main Module Grid */}
        <div className='grid grid-cols-3 gap-4 p-4'>
          {modules.map((module, i) => (
            <div key={i} className='bg-green-500 rounded-full w-48 h-48 flex flex-row justify-center items-center'>

            <Link className='text-white hover:text-gray-500 brightness-100 hover:brightness-90' style={{textDecoration:"none"}} href={module.href} key={i}>
              <div className='flex flex-col items-center text-center'>
                <Image
                  src={module.imageSRC}
                  alt={module.alt}
                  width={100}
                  height={100}
                  className='rounded-full border-2'
                  />
                <span className='mt-2 text-sm'>{module.alt}</span>
              </div>
            </Link>
                  </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainModules;
