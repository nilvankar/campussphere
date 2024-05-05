"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const ApplicationMaster = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="rounded-lg border-2 bg-blue-500 text-white hover:text-blue-950 shadow-sm"
        onClick={() => router.push("/private/college_master/app_master/settings")}
      >
        Master Settings
      </button>
    
      <button
        className="rounded-lg border-2 bg-blue-500 text-white hover:text-blue-950 shadow-sm"
        onClick={() => router.push("/private/college_master/app_master/building_mgmt")}
      >
        BuldingManagement
      </button>
      <button
        className="rounded-lg border-2 bg-blue-500 text-white hover:text-blue-950 shadow-sm"
        onClick={() => router.push("/private/college_master/app_master/dept&desg")}
      >
        Department and Designation
      </button>
      <button
        className="rounded-lg border-2 bg-blue-500 text-white hover:text-blue-950 shadow-sm"
        onClick={() => router.push("/private/college_master/app_master/electiveConfig")}
      >
        Elective config
      </button>
    </div>
  );
};

export default ApplicationMaster;
