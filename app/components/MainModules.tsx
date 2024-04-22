import React from 'react';
import Sidebar from '@/app/components/Sidebar';
import { modules } from '@/app/data';
import Link from 'next/link';
import Image from 'next/image';

const MainModules = () => {
  return (
    <div className='w-screen overflow-y-scroll'>
      <div className='grid grid-cols-2' style={{ gridTemplateColumns: '6rem 1fr' }}>
        {/* Sidebar */}
        <div className='border-2 h-full'>
          <Sidebar />
        </div>

        {/* Main Module Grid */}
        <div className='grid grid-cols-3 gap-4 p-4'>
          {modules.map((module, i) => (
            <Link className='text-black brightness-100 hover:brightness-90' style={{textDecoration:"none"}} href={module.href} key={i}>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainModules;
