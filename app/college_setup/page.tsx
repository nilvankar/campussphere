import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const CollegeSetupPage = () => {
  return (
    <div>
        <Link href='/college_setup/institute'  className='text-black' style={{textDecoration:"none"}}><Image src='/images/collge_master.jpeg' alt='Institute Registration' width={200} height={200} />Institute Registration</Link>
        <Link href='/college_setup/user' className='text-black' style={{textDecoration:"none"}}><Image src='/images/staff_image.jpeg' alt='User Registration' width={200} height={200}  />User Registration</Link>

    </div>
  )
}

export default CollegeSetupPage