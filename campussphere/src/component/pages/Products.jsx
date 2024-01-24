import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function Products() {
  return (
    <div className='products' style={{height:"140vh",width:"100vw"}}>
    <Header />
    <div className='w-screen bg-blue-600' style={{height:"180vh"}}>Products</div>
    <Footer />
    </div>
  )
}
