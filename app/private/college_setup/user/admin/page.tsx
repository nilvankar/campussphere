"use client";
import useFetch from "@/app/hooks/useFetch";
import { branchType } from "@/app/lib/types/schema";
import { PlusCircleFilled } from "@ant-design/icons";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

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

  const onchange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdmin((prev) => ({ ...prev, [name]: value }));
  };
  const onsubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      const res = await fetch("/api/college_setup/user/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(admin),
      });
      const data = res.json();
      if (res.ok) {
        console.log("successfully add new admin");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [data] = useFetch("/api/college_setup/user/admin");
  return (
    <div className="h-screen w-screen ">
      <div className="flex w-96 mx-24 justify-around border-2">
        <div>
          <label className="block" htmlFor="branchName">
            Branch Name
          </label>
          <select name="branchName" id="branchName">
            <option value="" hidden>
              Select
            </option>
            {data &&
              data.map((item:branchType) => {
                return <option key={item._id}>{item.branchName}</option>;
              })}
          </select>
        </div>
        <div>
          <label className="block" htmlFor="branchAdmin">
            Branch Admin
          </label>
          <select name="branchAdmin" id="branchAdmin">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
      </div>

      <form
        onSubmit={() => onsubmit}
        action=""
        method="POST"
        className={"grid grid-cols-2 gap-4 max-w-xl"}
        style={{ gridTemplateColumns: "" }}
      >
        <div className="border-2">
          <label htmlFor="profilePhoto">
            <span className="text-red-500">*</span>ProfilePhoto
          </label>
          <input type="file" name="profilePhoto" id="profilePhoto" />
        </div>
        <div className="border-2 grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="firstName">
              <span className="text-red-500">*</span>FirstName
            </label>
            <input type="text" name="firstName" id="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">
              <span className="text-red-500">*</span>Last Name
            </label>
            <input type="text" name="lastName" id="lastName" />
          </div>
          <div>
            <label htmlFor="middleName">
              <span className="text-red-500">*</span>Middle Name
            </label>
            <input type="text" name="middleName" id="middleName" />
          </div>
          <div>
            <label htmlFor="dob">
              <span className="text-red-500">*</span>Date of Birth
            </label>
            <input type="date" name="dob" id="dob" />
          </div>
          <div>
            <label htmlFor="gender">
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
            <label htmlFor="maritalStatus">
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
            <label htmlFor="email">
              <span className="text-red-500">*</span>Email Address
            </label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="alternateEmail">Alternate Email</label>
            <input type="email" name="alternateEmail" id="alternateEmail" />
          </div>
          <div>
            <label htmlFor="landLineNumber">
              <span className="text-red-500">*</span>Landline
            </label>
            <input type="tel" name="landLineNumber" id="landLineNumber" />
          </div>
          <div>
            <label htmlFor="contactNo">
              <span className="text-red-500">*</span>Contact No
            </label>
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
            <label htmlFor="joiningData">
              <span className="text-red-500">*</span>Joining Data
            </label>
            <input type="date" name="joiningData" id="joiningData" />
          </div>
          <div>
            <label htmlFor="jobDesignation">
              <span className="text-red-500">*</span>Job Designation
            </label>
            <input type="text" name="jobDesignation" id="jobDesignation" />
          </div>
          <div>
            <label htmlFor="salary">
              Salary <span>in INR</span>
            </label>
            <input type="number" name="salary" id="salary" />
          </div>
          <div>
            <label htmlFor="address">
              <span className="text-red-500">*</span>Address
            </label>
            <input type="text" name="address" id="address" />
          </div>
        </div>
        <input type="submit" value="Register" />
        <button>clear</button>
      </form>

      <div>
        <button>
          Qualifications Details
          <PlusCircleFilled className="hover:text-white" />
        </button>
        <table className={"border-2 table"}>
          <th className="table-header-group">
            <tr className="table-cell border-2 text-center">Qualifications</tr>
            <tr className="table-cell border-2 text-center">Uniersity</tr>
            <tr className="table-cell border-2 text-center">Institue Name</tr>
            <tr className="table-cell border-2 text-center">YearOfPassing</tr>
            <tr className="table-cell border-2 text-center">Percentage</tr>
            <tr className="table-cell border-2 text-center">Marks_Memo</tr>
          </th>
          <tbody></tbody>
        </table>
      </div>
      <button>
        Add Experience
        <PlusCircleFilled className="hover:text-white" />
      </button>
      <div>
        <table className={"grid grid-cols-2 gap-4 max-w-xl"}>
          <th className="table-header-group">
            <tr className="border-2 table-cell">Institue Name</tr>
            <tr className="border-2 table-cell">Desigation</tr>
            <tr className="border-2 table-cell">From Date</tr>
            <tr className="border-2 table-cell">To Date</tr>
            <tr className="border-2 table-cell">Year Of Exp.</tr>
            <tr className="border-2 table-cell">Starting Salary</tr>
            <tr className="border-2 table-cell">Ending Salary</tr>
            <tr className="border-2 table-cell">Attatchments</tr>
          </th>
        </table>
      </div>
    </div>
  );
};

export default AdminRegistration;
