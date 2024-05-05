
import { screens } from "@/app/data";
import Link from "next/link";
import React, { useState } from "react";
const AcademicsSetupPage = () => {
  return (
    <div className="overscroll-y-none">
      {screens.map((screen, i) => (
        <Link
          href={screen.href}
          className="bg-blue-400 block w-32 h-12 decoration-transparent text-white brightness-95 hover:brightness-100 border-2 mx-12"
          key={i}
        >
          {screen.label}
        </Link>
      ))}
     
      </div>
  );
};

export default AcademicsSetupPage;
