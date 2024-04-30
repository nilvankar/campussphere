import Link from "next/link";
import React from "react";
import Image from "next/image";
const UserManagment = () => {
  const userMgmtModules=[
    {href:"/user_managment/staff_mgmt",src:"/images/staff_image.jpeg",height:200,width:200,alt:"Staff Management"},
    {href:"/user_managment/job_placement",src:"/images/jobs_img.jpeg",height:200,width:200,alt:"Job and Placement"},
    {href:"/user_managment/student_mgmt",src:"/images/student_logo.jpg",height:200,width:200,alt:"Student Management"},
    {href:"/user_managment/student_attendance",src:"/images/staff_attendance.jpeg",height:200,width:200,alt:"Student Attendance"},
    {href:"/user_managment/past_users",src:"/images/past_users.jpeg",height:200,width:200,alt:"Past Users"},
    {href:"/user_managment/authorization",src:"/images/auth_img.jpeg",height:200,width:200,alt:"Authorization"},
  ]
  return (
    <div>
     {userMgmtModules.map((module)=>(
      <Link key={module.href} className="text-black" style={{textDecoration:"none"}} href={module.href}><Image src={module.src} alt={module.alt} height={module.height} width={module.width} />
      <span>{module.alt}</span>
      </Link>
     ))}
    </div>
  );
};

export default UserManagment;
