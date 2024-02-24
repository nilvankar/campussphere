import React, { useEffect, useState } from "react";
import {cities} from '../../data/temporary'
const SignUp = () => {
  const batchUrl = "https://blcdjd0s-5000.inc1.devtunnels.ms/batch";
  const deptUrl = "https://blcdjd0s-5000.inc1.devtunnels.ms/dept";
  const [batchArr, setBatchArr] = useState([]);
  const [deptArr, setDeptArr] = useState([]);
  console.log(batchUrl);
  console.log(deptUrl);
  useEffect( () => {
    const fetchData=async()=>{

      try {
        const resBatch = await fetch(batchUrl, {
        method: "GET",
      });
      const resDepartment = await fetch(deptUrl, {
        method: "GET",
      });
      if (resBatch.ok) {
        const batch = await resBatch.json();
        console.log(batch);
        setBatchArr(batch);
      }
      if (resDepartment.ok) {
        const dept = await resDepartment.json();
        console.log(dept);
        setDeptArr(dept);
      }
    } catch (error) {
      console.error(`couldn't fetch batch data ${error}`);
    }
  }
  fetchData()
  }, [batchUrl, deptUrl])
  


  return (
    <div className="w-screen h-screen border-2">
      <form action="" className="flex flex-row">
        <div className="border-2 h-4/5 w-1/4 ml-8 mt-8">
          <h1 className="text-base font-semibold">Personal Information</h1>
          <div className=" h-14  w-80">
            <label className="block ml-4" htmlFor="email">
              Email Address
            </label>
            <input
              className="border-2 rounded-md text-black w-72 ml-4"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className=" h-14  w-80">
            <label className="block ml-4" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 rounded-md text-black w-72 ml-4"
              type="text"
              name="password"
              id="password"
            />
          </div>
          <div className=" h-14  w-80">
            <label className="block ml-4" htmlFor="firstName">
              FirstName
            </label>
            <input
              className="border-2 rounded-md text-black w-72 ml-4"
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>
          <div className=" h-14  w-80">
            <label className="block ml-4" htmlFor="lastName">
              LastName
            </label>
            <input
              className="border-2 rounded-md text-black w-72 ml-4"
              type="text"
              name="lastName"
              id="lastName"
            />
          </div>
          <div className=" h-14  w-80">
            <label className="block ml-4" htmlFor="middleName">
              Middle Name
            </label>
            <input
              className="border-2 rounded-md text-black w-72 ml-4"
              type="text"
              name="middleName"
              id="middleName"
            />
          </div>
          <div className=" h-14  w-80">
            <label className="block ml-4" htmlFor="dob">
              Date Of Birth
            </label>
            <input
              className="border-2 rounded-md text-black w-72 ml-4"
              type="date"
              name="dob"
              id="dob"
            />
          </div>
          <div className=" h-14  w-80">
            <label className="block ml-4" htmlFor="colonyName">
              Colony Name
            </label>
            <input
              className="border-2 rounded-md text-black w-72 ml-4"
              type="text"
              name="colonyName"
              id="colonyName"
            />
          </div>
          <div className=" h-14  w-80">
            <label htmlFor="landMark" className="block ml-4">
              LandMark
            </label>
            <input
              className="border-2 rounded-md text-black w-72 ml-4"
              type="text"
              name="landMark"
              id="landMark"
            />
          </div>
          <div className=" h-14  w-80">
            <label htmlFor="area" className="block ml-4">
              Area
            </label>
            <input
              className="border-2 rounded-md text-black w-72 ml-4"
              type="text"
              name="area"
              id="area"
            />
          </div>
          <div className=" h-14  w-80">
            <div className=" h-14  w-80 ">
              <label htmlFor="city" className="block ml-4">
                Select City
              </label>
              <select
                name="city"
                id="city"
                className="border-2 rounded-md w-72 ml-4 "
              >
                <option value="" hidden>
                  Select
                </option>
                {cities.map((City, i) => (
                  <option key={i}>
                    {City.name},{City.state}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="border-2 h-4/5 w-1/4 ml-8 mt-8">
          <h1 className="font-semibold text-base ml-4 ">Additional Details</h1>
          <div className="h-14  w-80">
            <label htmlFor="dept" className="block ml-4">
              Select Department
            </label>
            <select name="dept" id="dept" className="border-2 rounded-md w-72 ml-4">
              <option value="" hidden>
                Select
              </option>
              {deptArr.map((dep) => (
                <option value={dep.id} key={dep.id}>
                  {dep.deptName}
                </option>
              ))}
            </select>
          </div>
          <div className="h-14  w-80">
            <label htmlFor="batch" className="block ml-4">Select Batch</label>
            <select name="batch" id="batch" className="border-2 rounded-md w-72 ml-4">
              <option value="" hidden></option>
              {batchArr.map((batchN) => (
                <option value={batchN._id} key={batchN.year}>
                  {batchN.year}
                </option>
              ))}
            </select>
          </div>
          <div className="block ml-4">
          <input type="submit" value="SignUp" className="block mx-28 w-20 border-2 rounded-md bg-white text-black hover:bg-sky-300 transition-colors hover:shadow-sm hover:text-white" />
          </div>
        </div>
        
      </form>
    </div>
  );
};


export default SignUp;