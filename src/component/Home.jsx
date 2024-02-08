import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'

const Home = () => {
    const navigate=useNavigate()
  return (
    <>
    <Header />
    <div className='Home bg-blue-500/100 h-screen w-screen'>
    <button onClick={()=>{
        navigate('/fees')
    }}>Fees</button>
    </div>
    <Footer />
    </>
  )
}

export default Home