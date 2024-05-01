import Link from "next/link";
import React from "react";
import Image from "next/image";
import { academicModule } from "@/app/data";
const AcademicSetup = () => {

  return (
    <div className="flex justify-center flex-row items-center">
      {academicModule.map((module) => (
        <div className="bg-indigo-500 brightness-90 hover:brightness-100 mt-32 mx-32">

        <Link key={module.href}
          className="text-white "
          style={{ textDecoration: "none" }}
          href={module.href}
          >
          <Image
            src={module.src}
            height={module.height}
            width={module.width}
            alt={module.alt}
            />
          <span>{module.alt}</span>
        </Link>
            </div>
      ))}

    </div>
  );
};

export default AcademicSetup;
