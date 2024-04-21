import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className='bg-slate-300/95 w-screen h-24'>
      <Image src='/images/campusshere_logo.png' alt='campussphere' />
      <h1>www.campussphere.com</h1>
    </div>
  )
}

export default Header