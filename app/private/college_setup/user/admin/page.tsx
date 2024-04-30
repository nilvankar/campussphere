"use client";
import React, { useState } from "react";

const AdminRegistration = () => {
  const init = {
    firstName: "",
    lastName: "",
    middleName: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    email: "",
    alternateEmail: "",
    landLineNumber: "",
    adharNo: "",
    panNo: "",
    joiningData: "",
    salary: "",
    address: "",
    profilePhoto: "",
    contactNo: "",
    jobDesignation: "",
  };
  const [admin, setAdmin] = useState(init);
  const {
    address,
    adharNo,
    alternateEmail,
    contactNo,
    dob,
    email,
    firstName,
    gender,
    jobDesignation,
    joiningData,
    landLineNumber,
    lastName,
    maritalStatus,
    middleName,
    panNo,
    profilePhoto,
    salary,
  } = init;
  return (
    <div className="h-screen w-screen">
        <h1 className="text-3xl font-bold mb-4">Admin Registration</h1>
    
      <div>
        <label htmlFor="branchName">Branch Name</label>
        <select name="branchName" id="branchName">
          <option value="" hidden>
            Select
          </option>
        </select>
      </div>
      <div>
        <label htmlFor="branchAdmin">Branch Admin</label>
        <select name="branchAdmin" id="branchAdmin"><option value="" hidden>Select</option></select>
      </div>
    
      <form
        action=""
        method="POST"
        className="grid grid-cols-2 gap-4 max-w-xl"  style={{ gridTemplateColumns: "" }}
      >
        <div className="border-2">
          <label htmlFor="profilePhoto">ProfilePhoto</label>
          <input type="file" name="profilePhoto" id="profilePhoto" />
        </div>
        <div className="border-2 grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="firstName">FirstName</label>
            <input type="text" name="firstName" id="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" />
          </div>
          <div>
            <label htmlFor="middleName">Middle Name</label>
            <input type="text" name="middleName" id="middleName" />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" name="dob" id="dob" />
          </div>
          <div>
            <label htmlFor="gender">GENDER</label>
            <select name="gender" id="gender">
              <option value="" hidden></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="notspecify">Not Want to specify</option>
            </select>
          </div>
          <div>
            <label htmlFor="maritalStatus">Marital Status</label>
            <select name="maritalStatus" id="maritalStatus">
              <option value="" hidden></option>
              <option value="married">Married</option>
              <option value="unmarried">UnMarried</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="landLineNumber">Landline</label>
            <input type="tel" name="landLineNumber" id="landLineNumber" />
          </div>
          <div>
            <label htmlFor="contactNo">Contact No</label>
            <input type="tel" name="contactNo" id="contactNo" />
          </div>
          <div>
            <label htmlFor="adharNo">Adhar No</label>
            <input type="number" name="adharNo" id="adharNo" />
          </div>
          <div>
            <label htmlFor="panNo">Pan No</label>
            <input type="number" name="panNo" id="panNo" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="joiningData">Joining Data</label>
            <input type="date" name="joiningData" id="joiningData" />
          </div>
          <div>
            <label htmlFor="jobDesignation">Job Designation</label>
            <input type="text" name="jobDesignation" id="jobDesignation" />
          </div>
          <div>
            <label htmlFor="salary">
              Salary <span>in INR</span>
            </label>
            <input type="number" name="salary" id="salary" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" />
          </div>
        </div>
        <input type="submit" value="Register" />
        <button onClick={() => setAdmin(init)}>clear</button>
      </form>
    </div>
  );
};

export default AdminRegistration;
