import Link from "next/link";
import React from "react";
import Image from "next/image";
const CollegeMaster = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="hover:brightness-100 brightness-90 bg-amber-300 mx-32 mt-32">

      <Link
        className="text-black"
        style={{ textDecoration: "none" }}
        href="/private/college_master/app_master"
        >
        <Image
          src="/images/university_logo.png"
          alt="Collge Master"
          height={200}
          width={200}
          />Collge Master
      </Link>
          </div>
          <div className="brightness-90 hover:brightness-100 bg-stone-400 mx-32 mt-32">

      <Link
        className="text-black"
        style={{ textDecoration: "none" }}
        href="/private/college_master/institute_config"
        >
        <Image
          src="/images/collge_master.jpeg"
          alt="Institute Configuration"
          height={200}
          width={200}
          />Institute Configuration
      </Link>
          </div>
    </div>
  );
};

export default CollegeMaster;
