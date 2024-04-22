import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='bg-slate-300/95 w-screen h-24 flex items-center justify-center'>
      {/* Apply styles directly to the Image component */}
      <div className='size-16 relative' style={{ width: '100px', height: '100px' }}>
        <Image src='/images/campusshere_logo.png' layout='fill' className='rounded-full' objectFit='contain' alt='campussphere' />
      </div>
      <h1 className='ml-2 text-white text-lg font-bold'>www.campussphere.com</h1>
    </div>
  );
};

export default Header;
