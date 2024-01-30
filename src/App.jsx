import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Routes, Route,  } from "react-router-dom";
// import Home from "./component/pages/Home.jsx";
// import SignUp from './component/pages/SignUp.jsx'
// import About from "./component/pages/About.jsx";
// import Blogs from "./component/pages/Blogs.jsx";
import Login from "./component/pages/Login.jsx";
// import Contact from "./component/pages/Contact.jsx";
// import Products from "./component/pages/Products.jsx";
// import Dashboard from "./component/Dashbord.jsx";

import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from "./firebase/firebase.js";
export default function App() {
 const [user]= useAuthState(auth)

//  <Routes>
//  {user?(
//    <h1>Thanks for signin</h1>
//  ):(
//    <h1>please login first</h1>
//  )}
//  <Route exact path="/" element={<Home />}/>
//    <Route exact path="/about" element={<About />}>
    
//    </Route>
//    <Route exact path="/products" element={<Products />} />
    
 
//      <Route exact path="/contact" element={<Contact />} />
   
     
//      <Route exact path="/blogs" element={<Blogs />} />
   
//      <Route exact path="/login" element={<Login />} />
//      <Route exact path="/signup" element={<SignUp />} />
//      <Route exact path="/dashbord" element={<Dashboard />} />
//  </Routes>
  return (
    <>
     <Login />
    </>
  );
}
