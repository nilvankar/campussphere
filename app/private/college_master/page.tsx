import Link from "next/link";
import React from "react";
import Image from "next/image";
const CollegeMaster = () => {
  return (
    <div>
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
  );
};

export default CollegeMaster;
