import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route,  } from "react-router-dom";
import Home from "./component/pages/Home.jsx";
import SignUp from './component/pages/SignUp.jsx'
import About from "./component/pages/About.jsx";
import Blogs from "./component/pages/Blogs.jsx";
import Login from "./component/pages/Login.jsx";
import Contact from "./component/pages/Contact.jsx";
import Products from "./component/pages/Products.jsx";
export default function App() {
 
  return (
    <>
      <Routes>
      <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}>
         
        </Route>
        <Route exact path="/products" element={<Products />} />
         
      
          <Route exact path="/contact" element={<Contact />} />
        
          
          <Route exact path="/blogs" element={<Blogs />} />
        
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
           
      </Routes>
    </>
  );
}
