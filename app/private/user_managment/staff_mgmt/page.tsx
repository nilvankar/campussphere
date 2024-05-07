"use client";
import React, { useState } from "react";

const StaffManagment = () => {
  const [Profile, setProfile] = useState(true);
  const [Proffessional, setProffessional] = useState(false);
  const [activityfee, setActivityfee] = useState(false);
  const [setsalarayPromo, setSetsalarayPromo] = useState(false);
  const [Behaviour, setBehaviour] = useState(false);
  const [Certifications, setCertifications] = useState(false);
  const [Medical, setMedical] = useState(false);
  const [Discipline, setDiscipline] = useState(false);
  const [Transporation, setTransporation] = useState(false);
  const [paystrcture, setPaystrcture] = useState(false);
  const [dom, setDom] = useState(false);
  return (
    <div
      className="grid grid-cols-2"
      style={{ gridTemplateColumns: "20rem 76rem" }}
    >
      <div className=" border-2 h-screen">
        <div>
          <label className="block" htmlFor="dept">Department</label>
          <select name="dept" id="dept">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label className="block" htmlFor="desg">Designation</label>
          <select name="desg" id="desg">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <table className="table border-2">
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Designation</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="border-2 h-screen">
        <div className="">
          <button
            onClick={() => {
              setProfile(true);
              setActivityfee(false);
              setBehaviour(false);
              setCertifications(false);
              setDiscipline(false);
              setProffessional(false);
              setDiscipline(false);
              setMedical(false);
              setPaystrcture(false);
              setSetsalarayPromo(false);
              setTransporation(false);
            }}
            className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-12"
          >
            Profile
          </button>
          <button
            onClick={() => {}}
            className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-12"
          >
            Proffessional Info
          </button>
          <button
            onClick={() => {}}
            className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-12"
          >
            Activity Fees
          </button>
          <button
            onClick={() => {}}
            className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-12"
          >
            Salaray & Performance
          </button>
          <button
            onClick={() => {}}
            className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-12"
          >
            Behaviour
          </button>
          <button
            onClick={() => {}}
            className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-12"
          >
            Certifications
          </button>
          <button
            onClick={() => {}}
            className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-12"
          >
            Medical
          </button>
          <button
            onClick={() => {}}
            className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-12"
          >
            Discipline & Transfers
          </button>
          <button
            onClick={() => {}}
            className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-12"
          >
            Transporation
          </button>
          <button
            onClick={() => {}}
            className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-12"
          >
            Pay Strcture
          </button>
          <button
            onClick={() => {}}
            className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-12"
          >
            Teaching Details
          </button>
          <button
            onClick={() => {}}
            className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-12"
          >
            Domitory
          </button>
        </div>
        <div className={Profile ? "visible" : "hidden"}>
          <div className="inline-flex">
            <button className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-4 mt-12 block">Personal Profile</button>
            <button className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-4 mt-12 block">Family Details</button>
            <button className="border-2 w-80 rounded-lg bg-blue-500 text-white hover:bg-white  mx-4 mt-12 block">Assignment Assets</button>
          </div>
          <div className="border-2 grid grid-cols-3 gap-4">
          <div>
            <label className="block" htmlFor="firstName">
              <span className="text-red-500">*</span>FirstName
            </label>
            <input className="w-80 rounded-lg border-2" type="text" name="firstName" id="firstName" />
          </div>
          <div>
            <label className="block" htmlFor="lastName">
              <span className="text-red-500">*</span>Last Name
            </label>
            <input className="w-80 rounded-lg border-2" type="text" name="lastName" id="lastName" />
          </div>
          <div>
            <label className="block" htmlFor="middleName">
              <span className="text-red-500">*</span>Middle Name
            </label>
            <input className="w-80 rounded-lg border-2" type="text" name="middleName" id="middleName" />
          </div>
          <div>
            <label className="block" htmlFor="dob">
              <span className="text-red-500">*</span>Date of Birth
            </label>
            <input className="w-80 rounded-lg border-2" type="date" name="dob" id="dob" />
          </div>
          <div>
            <label className="block" htmlFor="gender">
              <span className="text-red-500">*</span>GENDER
            </label>
            <select name="gender" id="gender">
              <option value="" hidden></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="notspecify">Not Want to specify</option>
            </select>
          </div>
          <div>
            <label className="block" htmlFor="maritalStatus">
              <span className="text-red-500">*</span>Marital Status
            </label>
            <select name="maritalStatus" id="maritalStatus">
              <option value="" hidden></option>
              <option value="married">Married</option>
              <option value="unmarried">UnMarried</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <label className="block" htmlFor="email">
              <span className="text-red-500">*</span>Email Address
            </label>
            <input className="w-80 rounded-lg border-2" type="email" name="email" id="email" />
          </div>
          <div>
            <label className="block" htmlFor="alternateEmail">Alternate Email</label>
            <input className="w-80 rounded-lg border-2" type="email" name="alternateEmail" id="alternateEmail" />
          </div>
          <div>
            <label className="block" htmlFor="landLineNumber">
              <span className="text-red-500">*</span>Landline
            </label>
            <input className="w-80 rounded-lg border-2" type="tel" name="landLineNumber" id="landLineNumber" />
          </div>
          <div>
            <label className="block" htmlFor="contactNo">
              <span className="text-red-500">*</span>Contact No
            </label>
            <input className="w-80 rounded-lg border-2" type="tel" name="contactNo" id="contactNo" />
          </div>
          <div>
            <label className="block" htmlFor="adharNo">Adhar No</label>
            <input className="w-80 rounded-lg border-2" type="number" name="adharNo" id="adharNo" />
          </div>
          <div>
            <label className="block" htmlFor="panNo">Pan No</label>
            <input className="w-80 rounded-lg border-2" type="number" name="panNo" id="panNo" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default StaffManagment;
