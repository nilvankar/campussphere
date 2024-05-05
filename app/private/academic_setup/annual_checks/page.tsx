"use client";
import { useRouter } from "next/navigation";
import React from "react";
const AnnualChecks = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="border-2 rounded-lg bg-blue-500 text-white hover:text-blue-500 shadow-md brightness-90 hover:brightness-100"
        onClick={() =>
          router.push("/private/academic_setup/annual_checks/marks")
        }
      >
        Final Marks
      </button>
      <button
        className="border-2 rounded-lg bg-blue-500 text-white hover:text-blue-500"
        onClick={() =>
          router.push("/private/academic_setup/annual_checks/academic_checks")
        }
      >
        Academics Checks
      </button>
      <button
        className="border-2 rounded-lg bg-blue-500 text-white hover:text-blue-500"
        onClick={() => router.push("/private/academic_setup/annual_checks/")}
      >
        Student Promotion
      </button>
    </div>
  );
};

export default AnnualChecks;
