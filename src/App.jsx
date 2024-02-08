import React from "react";
import { Routes, Route, } from "react-router-dom";
import SignUp from './component/pages/SignUp.jsx'
import About from "./component/pages/About.jsx";
import Login from "./component/pages/Login.jsx";
import Contact from "./component/pages/Contact.jsx";
import Dashboard from "./component/pages/Dashbord.jsx";
import Attendance from './component/pages/services/Attendance.jsx'
import Assignment from './component/pages/services/Assignment.jsx'
import Courses from './component/pages/services/Courses.jsx'
import Fees from './component/pages/services/Fees.jsx'
import ToDos from './component/pages/ToDos.jsx'
import Home from "./component/Home.jsx";
  
import Sidebar from "./component/layout/Sidebar.jsx";
export default function App() {

  return (
   <>
   <Sidebar />
      <Routes>
       <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
       <Route exact path="/login" element={<Login />} />
       <Route exact path="/home" element={<Home />}/>
       <Route exact path="/attendance" element={<Attendance />}/>
       <Route exact path="/assignment" element={<Assignment />} />
       <Route exact path="/fees" element={<Fees />} />
       <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/todos" element={<ToDos />}/>
      </Routes>
   
    </>
  );
}
