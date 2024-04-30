import Link from "next/link";
import React from "react";
import Image from "next/image";
import { academicModule } from "@/app/data";
const AcademicSetup = () => {

  return (
    <div>
      {academicModule.map((module) => (
        <Link key={module.href}
          className="text-black"
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
      ))}

    </div>
  );
};

export default AcademicSetup;
