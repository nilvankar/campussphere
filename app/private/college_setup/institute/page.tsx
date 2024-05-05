import Link from "next/link";
import React from "react";
import Image from "next/image";
const InstituteRegistration = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="bg-blue-600 mx-32 mt-32">
        <Link
          className="text-white brightness-90 hover:brightness-100 "
          style={{ textDecoration: "none" }}
          href="/private/college_setup/institute/university"
        >
          <Image
            src="/images/university_logo.png"
            alt="University Registration"
            height={200}
            width={200}
          />
          University Registration
        </Link>
      </div>
      <div className="bg-stone-400 mx-32 mt-32">
        <Link
          className="text-white brightness-90 hover:brightness-100 "
          style={{ textDecoration: "none" }}
          href="/private/college_setup/institute/branch_registration"
        >
          <Image
            src="/images/branch_img.jpeg"
            alt="Branch Registration"
            height={200}
            width={200}
          />
          Branch Registration
        </Link>
      </div>
    </div>
  );
};

export default InstituteRegistration;
