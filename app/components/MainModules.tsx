import React from "react";
import Link from "next/link";
import Image from "next/image";
import {modules} from '@/app/data'

const Sidebar =React.lazy(()=>import('@/app/components/Sidebar'));
const MainModules = () => {
 
  return (
    <div className="w-screen overflow-y-scroll grid grid-cols-2" style={{gridTemplateColumns:"6rem 90rem"}} >
     <div className="border-2 h-full"><Sidebar /></div>
      <div className="w-full grid grid-cols-3">

      {modules.map((module, i) => (
        <Link className="text-black hover:brightness-90 brightness-100" style={{textDecoration:"none"}} key={i} href={module.href}>
          <Image
            height={module.height}
            width={module.width}
            src={module.imageSRC}
            alt={module.alt}
            className="rounded-full border-2"
            />
          <span>{module.alt}</span>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default MainModules;
