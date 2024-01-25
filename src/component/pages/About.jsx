import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function About() {
  return (
    <div className='about' style={{height:"140vh",width:"100vw"}}>
    <Header />
    <div className='w-screen bg-blue-600' style={{height:"180vh"}}>
    about
    </div>
    <Footer />
    </div>
  )
}
