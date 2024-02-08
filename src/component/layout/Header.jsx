import React from 'react'
import LogoImg from '../../assets/images/logo.png'
const Header = () => {

 const handleToDos=(e)=>{
  e.preventDefault();
  navigate('/todos')
 }
  return (
    <div className='header w-screen h-36 bg-slate-300/100 '>
    <div className='log'><img src={LogoImg} style={{height:'89px',width:'89px',borderRadius:'55px',marginLeft:'99px' }} alt="" /></div>
    <button className='todos inline-block' onClick={handleToDos}>todos</button>
  
    </div>
  )
}

export default Header