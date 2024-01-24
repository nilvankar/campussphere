import React, { useEffect } from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'
import Home from './component/pages/Home.jsx'
import SingUp from './component/pages/SingUp.jsx'
import About from './component/pages/About.jsx'
import Blogs from './component/pages/Blogs.jsx'
import Login from './component/pages/Login.jsx'
import Contact from './component/pages/Contact.jsx'
import Products from './component/pages/Products.jsx'
export default function App() {


  return (
    <>
     {
      <Routes>
        <Route exact path='/' element={<Home />}>Home</Route>
        <Route exact path='/about' element={<About />}>About Us</Route>
        <Route exact path='/products' element={<Products />}>Products</Route>
        <Route exact path='/signup' element={<SingUp />}>SignUp</Route>
        <Route exact path='/contact' element={<Contact />} >Contact Us</Route>
        <Route exact path='/blogs' element={<Blogs />}>Blogs</Route>
        <Route exact path='/login' element={<Login />}>Blogs</Route>
      </Routes>
    }
      
    </>
  );
}