import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const LibraryModule = () => {
  return (
    <div>
      <Link className='text-black' style={{textDecoration:"none"}} href='/library_module/library_page'><Image src='/images/library_select_logo.jpeg' alt='Library' height={200} width={200}  /><span>Library</span></Link>
      <Link className='text-black' style={{textDecoration:"none"}} href='/library_module/library_activity'><Image src='/images/library_logo.png' alt='Library Activity' height={200} width={200}  /><span>Library Activity</span></Link>
    </div>
  )
}

export default LibraryModule