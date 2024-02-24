import React, { Suspense } from "react";
import { Routes, Route, } from "react-router-dom";
const StudentAdmission=React.lazy(()=>import( "./component/pages/services/StudentAdmission.jsx"));
const UniversityRegistration =React.lazy(()=>import( "./component/pages/services/UniversityRegistration.jsx"));
const BranchRegistration=React.lazy(()=>import(  "./component/pages/services/BranchRegistration.jsx"));
const Header=React.lazy(()=>import('./component/layout/Header.jsx'))
const Signup=React.lazy(()=>import('./component/pages/SignUp.jsx'))
const About = React.lazy(() => import("./component/pages/About.jsx"))
const Login = React.lazy(() => import("./component/pages/Login.jsx"))
const Contact = React.lazy(() => import("./component/pages/Contact.jsx"))
const Attendance = React.lazy(() => import('./component/pages/services/Attendance.jsx'))
const Assignment = React.lazy(() => import('./component/pages/services/Assignment.jsx'))
const Courses = React.lazy(() => import('./component/pages/services/Courses.jsx'))
const Fees = React.lazy(() => import('./component/pages/services/Fees.jsx'))
const Home = React.lazy(() => import("./component/Home.jsx"))
const Sidebar = React.lazy(()=>import("./component/layout/Sidebar.jsx"));

export default function App() {

  return (
    <Suspense fallback={<div>..Loading</div>}>
    
    <div className="main-container min-h-screen w-screen" style={{ display: 'grid',
    gridTemplateColumns: '1fr 3fr',  // Adjust column widths as needed
    gridTemplateRows: 'auto 1fr auto',  // Adjust row heights as needed
    gridTemplateAreas: `
      'sidebar header'
      'sidebar content'
      
    `,
    height: '100vh', }}>
      <div className="sidebar" style={{gridArea:'sidebar'}}>
      <Sidebar  />
      </div>
      <div className="header" style={{gridArea:'header'}}>
      <Header />
      </div>
      <div className="content" style={{gridArea:'content'}}>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/attendance" element={<Attendance />} />
      <Route exact path="/assignment" element={<Assignment />} />
      <Route exact path="/fees" element={<Fees />} />
      <Route exact path="/courses" element={<Courses />} />
      <Route exact path="/admission" element={<StudentAdmission />}/>
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/universitylogin" element={<UniversityRegistration />} />
      <Route exact path="/branchlogin" element={<BranchRegistration />}/>
      </Routes>
      </div>
       
    </div>
    </Suspense>
  );
}
