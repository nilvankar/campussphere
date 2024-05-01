import Link from "next/link";
import React from "react";
import Image from "next/image";
import { userMgmtModules } from "@/app/data";
const UserManagment = () => {
 
  return (
    <div className="flex flex-row justify-center ">
     {userMgmtModules.map((module)=>(
      <div className="brightness-90 hover:brightness-100 mx-10 mt-32">

      <Link key={module.href} className="text-white bg-green-600" style={{textDecoration:"none"}} href={module.href}><Image src={module.src} alt={module.alt} height={module.height} width={module.width} />
      <span>{module.alt}</span>
      </Link>
      </div>
     ))}
    </div>
  );
};

export default UserManagment;
