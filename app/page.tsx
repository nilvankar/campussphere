import React from 'react';
import Header from '@/app/components/Header'; // Importing Header component
import MainModules from '@/app/components/MainModules';

const Page = () => {
  return (
    <div className='grid grid-rows-2' style={{ gridTemplateRows: '6rem auto' }}>
      <div className='border-2 border-red-500'>
        <Header />
      </div>
      <div className='border-2 border-green-400'>
        <MainModules />
      </div>
    </div>
  );
};

export default Page;
