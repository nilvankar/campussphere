import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const CollegeSetupPage = () => {
  return (
    <div className='flex justify-center flex-row items-center'>
      <div className='bg-green-500 mx-20 flex justify-center items-center rounded-full'>
      
        <Link href='/private/college_setup/institute'  className='text-white brightness-90 mx-32 mt-32 hover:brightness-100' style={{textDecoration:"none"}}><Image src='/images/collge_master.jpeg' alt='Institute Registration' width={200} height={200} />Institute Registration</Link>
      </div>
      <div className='bg-violet-600 mx-20 flex justify-center items-center rounded-full'>

        <Link href='/private/college_setup/user' className='text-white brightness-90 mx-32 mt-32 hover:brightness-100' style={{textDecoration:"none"}}><Image src='/images/staff_image.jpeg' alt='User Registration' width={200} height={200}  />User Registration</Link>
      </div>

    </div>
  )
}

export default CollegeSetupPage