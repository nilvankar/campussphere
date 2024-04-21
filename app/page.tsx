import React from 'react'
const Header=React.lazy(()=>import('@/app/components/Header'))
const MainModules=React.lazy(()=>import('@/app/components/MainModules'))
const page = () => {
  return (
    <div className='grid grid-rows-2' style={{gridTemplateRows:"6rem "}}>
    <div className='border-2 border-red-500'>
    <Header />
    </div>
    <div className='border-2 border-green-400'>
      <MainModules />
    </div>
    </div>
  )
}

export default page