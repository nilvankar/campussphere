import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function Blogs() {
  return (
    <div className='blog' style={{height:"120vh",width:"100vw"}}>
    <Header />
    <div className='blog-main bg-blue-500/100' style={{height:"100vh",width:"100vw"}}>
    blog
    </div>
    <Footer />
    </div>
  )
}
