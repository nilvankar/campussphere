import React from 'react'
import LogoImg from '../../assets/images/logo.png'
import {CheckCircleOutlined} from '@ant-design/icons'
const Header = () => {

 const handleToDos=(e)=>{
  e.preventDefault();
  navigate('/todos')
 }
  return (
    <div className='header w-screen flex flex-row items-center h-36 bg-slate-300/100 '>
    <img src={LogoImg} alt="" className='size-32 rounded-full inline-block ml-6' />
    <h1 className='font-extrabold text-4xl text-white inline-block '>CampusSphere</h1>
    <button className='todos inline-block'><CheckCircleOutlined onClick={handleToDos} className='border-2 bg-white hover:underline shadow-xl' /></button>
    
    </div>
  )
}

export default Header