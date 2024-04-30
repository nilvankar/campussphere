'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SatisticsPage = () => {
    const router=useRouter()
  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <button className="border-2 rounded-lg bg-sky-500 text-white brightness-90 hover:brightness-100 mx-12" onClick={()=>router.push('/private/home/statistics/user_summary')}>
        User Summary
      </button>
      <button
        className="border-2 rounded-lg bg-sky-500 text-white brightness-90 hover:brightness-100 mx-12"
        onClick={()=>router.push('/private/home/statistics/vehical_summary')}
      >
        Vehical Summary
      </button>
      <button
        className="border-2 rounded-lg bg-sky-500 text-white brightness-90 hover:brightness-100 mx-12"
        onClick={()=>router.push('/private/home/statistics/domitory_summary')}
      >
        Dimitory Summary
      </button>
      <button
        className="border-2 rounded-lg bg-sky-500 text-white brightness-90 hover:brightness-100 mx-12"
        onClick={()=>router.push('/private/home/statistics/toppers_summary')}
      >
        Toppers Summary
      </button>
      <button
        className="border-2 rounded-lg bg-sky-500 text-white brightness-90 hover:brightness-100 mx-12"
        onClick={()=>router.push('/private/home/statistics/visitors_summary')}
      >
        Visitors Summary
      </button>
      <button
        className="border-2 rounded-lg bg-sky-500 text-white brightness-90 hover:brightness-100 mx-12"
        onClick={()=>router.push('/private/home/statistics/teaching_plan_summary')}
      >
        Teaching Plan Summary
      </button>
    
    </div>
  );
};

export default SatisticsPage;
