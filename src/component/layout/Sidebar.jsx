import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import StudentImg from '../../assets/images/student_logo.jpg'
const Sidebar = () => {
    const liItem=[
        {label:'BranchLogin',to:'/branchlogin'},
        {label:'Home',to:'/'},
        {label:"UniversityRegistration",to:"/universitylogin"},
        {label:'Login',to:'/login'},
        {label:'SignUp',to:'/signup'},
        {label:'Accounts',to:'/accounts'}, 
        {label:'Contact Us',to:'/contact'},
        {label:'Assignment',to:'/assignment'},
        {label:'Attendance',to:'/attendance'},
        {label:'Courses',to:'/courses'},
        {label:'Fees',to:'/fees'}
    ]
    
    const[isToggleed,setIsToggled]= useState(false)
    
    const handleToggled = (e) => {
        e.preventDefault();
        setIsToggled(!isToggleed)
    }
    return (
        <div className={isToggleed?'w-32 h-screen bg-blue-950 text-white inline-block': `w-56 inline-block h-screen bg-blue-950 text-white `} style={{height:'175vh'}}>
        <img src={StudentImg} className={isToggleed?`hidden`:`w-24 h-24 inline-block rounded-full`} alt="" />
            <button className='border-2 border-double rounded-md ml-20 hover:bg-white transition-colors'
             onClick={handleToggled}
             >
                <div className='w-5 bg-black h-1 m-1'></div>
                <div className='w-5 bg-black h-1 m-1'></div>
                <div className='w-5 bg-black h-1 m-1'></div>
            </button>
            
                <nav className="flex flex-col ">
{/*m-4 hover:text-gray-400/100 flex flex-row justify-center---link 
block my-4 text-lg text-white w-32 border-2 border-black----->li
*/}
                    <ul>
                        {liItem.map((link)=>(
                            <li className='block my-4 text-lg text-white w-32 border-2 border-black' key={link.to}>
                            <Link to={link.to} className='m-4 hover:text-gray-400/100 transition-colors flex flex-row justify-center'>
                              {link.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                </nav>

            </div>
      
    )
}

export default Sidebar