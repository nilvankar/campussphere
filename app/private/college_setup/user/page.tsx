import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const UserRegistrationPage = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
      <div className='border-2 mt-32 brightness-95 hover:brightness-100 bg-purple-600'>

      <Link className='text-black' style={{textDecoration:"none"}} href='/private/college_setup/user/admin'><Image src='/images/admin_logo_select.png' alt='Admin Registration' height={200} width={200} />Admin Registration</Link>
      </div>
      <div className='border-2 mt-32 brightness-95 hover:brightness-100 bg-sky-600'>

      <Link className='text-black' style={{textDecoration:"none"}} href='/private/college_setup/user/student_admission'><Image src='/images/student_logo.jpg' alt='Student Registration' height={200} width={200} />Student Registration</Link>
      </div>
    </div>
  )
}

export default UserRegistrationPage