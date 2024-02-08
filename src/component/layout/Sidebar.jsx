import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const[isToggleed,setIsToggled]= useState(false)
 
    const handleToggled = (e) => {
        e.preventDefault();
        setIsToggled(!isToggleed)
    }
    return (
        <div className={isToggleed?`w-56 inline-block h-screen bg-blue-950 text-white`:`w-32 inline-block h-screen bg-blue-950 text-white`}>
            <button className='border-2 border-double rounded-md'
             onClick={handleToggled}
             >
                <div className='w-5 bg-black h-1 m-1'></div>
                <div className='w-5 bg-black h-1 m-1'></div>
                <div className='w-5 bg-black h-1 m-1'></div>
            </button>
            
                <nav className="flex flex-col ">

                    <ul>
                        <li className={isToggleed?`block my-4 text-lg text-white w-32 border-2 border-black`:`block my-4 text-lg text-white w-32 `} >
                            <Link className="m-4 hover:text-gray-400/100" to="/">
                                Dashbord
                            </Link>
                        </li>
                        <li className={isToggleed?`block my-4 text-lg text-white w-32 border-2 border-black`:`block my-4 text-lg text-white w-32`} >
                            <Link className="m-4 hover:text-gray-400/100" to="/home">
                                Home
                            </Link>
                        </li>
                        <li className={isToggleed?`block my-4 text-lg text-white w-32 border-2 border-black`:`block my-4 text-lg text-white w-32`} >
                            <Link className="m-4 hover:text-gray-400/100" to="/about">
                                About Us
                            </Link>
                        </li>
                        <li className={isToggleed?`block my-4 text-lg text-white w-32 border-2 border-black`:`block my-4 text-lg text-white w-32`} >
                            <Link className="m-4 hover:text-gray-400/100" to="/fees">
                                Fees
                            </Link>
                        </li>
                        <li className={isToggleed?`block my-4 text-lg text-white w-32 border-2 border-black`:`block my-4 text-lg text-white w-32`} >
                            <Link className="m-4 hover:text-gray-400/100" to="/signup">
                                SignUp
                            </Link>
                        </li>
                        <li className={isToggleed?`block my-4 text-lg text-white w-32 border-2 border-black`:`block my-4 text-lg text-white w-32`} >
                            <Link className="m-4 hover:text-gray-400/100" to="/contact">
                                Contact Us
                            </Link>
                        </li>
                        <li className={isToggleed?`block my-4 text-lg text-white w-32 border-2 border-black`:`block my-4 text-lg text-white w-32`} >
                            <Link className="m-4 hover:text-gray-400/100" to='/courses'>Courses</Link>

                        </li>
                        <li className={isToggleed?`block my-4 text-lg text-white w-32 border-2 border-black`:`block my-4 text-lg text-white w-32`} >
                            <Link to='/assignment' className="m-4 hover:text-gray-400/100">Assignment</Link>
                        </li>
                        <li className={isToggleed?`block my-4 text-lg text-white w-32 border-2 border-black`:`block my-4 text-lg text-white w-32`} >
                            <Link to='/attendance' className="m-4 hover:text-gray-400/100">Attendance</Link>
                        </li>
                        <li className={isToggleed?`block my-4 text-lg text-white w-32 border-2 border-black`:`block my-4 text-lg text-white w-32`} >
                            <Link className="m-4 hover:text-gray-400/100" to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
      
    )
}

export default Sidebar