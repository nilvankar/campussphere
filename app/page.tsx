import React, { Suspense } from "react";
import MainHeader from "./components/MainHeader";
import { getSession } from "./lib/action";
import dbConnect from "./db/database";
const Footer =React.lazy(()=>import( "./components/Footer"));
const Carousel =React.lazy(()=>import("./components/Carousel"));
const Page = async() => {
  await dbConnect()
  
 
  return (
    <Suspense fallback={<div>...Loading</div>}>

    
    <div
      className="h-screen w-screen grid grid-rows-3 overscroll-x-none overflow-y-scroll grid-flow-row"
      style={{ gridTemplateRows: "10rem 200vh 20rem" }}
    >
      <div>
        <MainHeader />
      </div>
      <div>
        <section>
          <h1 className="text-center font-semibold text-gray-400">
            CampusSphere-A Complete Online Solution for Coaching Institutes
          </h1>

        
        </section>
        <section
          className="bg-gradient-to-r  from-slate-300/90 to-slate-300/85"
          style={{ height: "30rem" }}
        >
          <hr
            className=" text-blue-700  mx-96 mt-24"
            style={{ width: "50rem" }}
          />
          <h3 className="text-center">Why Choose Us?</h3>
          <hr className=" text-blue-700 mx-96 " style={{ width: "50rem" }} />

         
        </section>
        <section className="h-80 mt-24 w-screen border-2">
          <hr
            className=" text-blue-700  mx-96 mt-20"
            style={{ width: "50rem" }}
          />
          <h4 className="text-center">Our Aim </h4>
          <span className="text-gray-500/100 text-base font-light text-center">
            CampusSpehre.co is the best web/ cloud based educational Institution
            software solution (ERP + CRM + LMS) provider, designed and developed
            by team of ITM VOCATIONAL UNIVERISTY to automates manual
            administrative tasks such as Attendance, Online Test/Exam, e-payment
            (Fee Collection), ID & Mark sheet, Certificate Generator, etc., with
            35+ unique modules in K-12/High Schools, Colleges, Academies,
            Training and Coaching Classes.
          </span>
          <hr className=" text-blue-700  mx-96 " style={{ width: "50rem" }} />
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
    </Suspense>
  );
};

export default Page;
