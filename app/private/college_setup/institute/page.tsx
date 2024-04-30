import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const InstituteRegistration = () => {
  return (
    <div>
      <Link className='text-black' style={{textDecoration:"none"}} href='/private/college_setup/institute/university'><Image src='/images/university_logo.png' alt='University Registration' height={200} width={200} />University Registration</Link>
      <Link className='text-black' style={{textDecoration:"none"}} href='/private/college_setup/institute/branch_registration'><Image src='/images/branch_img.jpeg' alt='Branch Registration' height={200} width={200} />Branch Registration</Link>
    </div>
  )
}

export default InstituteRegistration