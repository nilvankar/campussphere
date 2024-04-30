import { screens } from "@/app/data";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const AcademicsSetupPage = () => {
 
  return (
    <div className="grid grid-cols-2">
      {screens.map((screen, i) => (
        <Link 
          href={screen.href}
          className="bg-blue-400 block w-32 h-12 decoration-transparent text-white brightness-95 hover:brightness-100 border-2 mx-12"
          key={i}
        >
          {screen.label}
        </Link>
      ))}
      <Image  src='/images/syllabus_logo.jpeg' alt="Academic setup" className="mx-96" height={300} width={300} />
    </div>
  );
};

export default AcademicsSetupPage;
