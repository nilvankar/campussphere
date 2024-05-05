"use client";
import useFetch from "@/app/hooks/useFetch";
import { branchType } from "@/app/lib/types/schema";
import { PlusCircleFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

const BranchRegistration = () => {
  const initialState = {
    branchLogo: "",
    branchName: "",
    registrationNumber: "",
    alias: "",
    email: "",
    alteranteEmail: "",
    contactNo: "",
    officeNo: "",
    address: "",
    yearOfEstablishment: "",
  };
  const [branch, setBranch] = useState(initialState);
  const [data] = useFetch("/api/college_setup/institute/branch_registration");

  return (
    <div className="h-screen w-screen">
      <div className="flex justify-around flex-row w-30 border-2 mx-24">
        <div>
          <label className="block" htmlFor="branchName">
            BranchName
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
          <label className="block" htmlFor="branchNo">
            BranchNo
          </label>
          <select name="branchNo" id="branchNo">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
      </div>
      <span className="mx-24 mt-12">
        Add Branch <PlusCircleFilled className="hover:text-white" />
      </span>
      <form
        action=""
        method="POST"
        className="grid grid-cols-3 mx-12 mt-12"
        style={{ gridTemplateColumns: "" }}
      >
        <div className="border-2">
          <label className="block text-base font-normal" htmlFor="branchLogo">
            BRANCH Logo
          </label>
          <input
            className="rounded-lg block w-80 border-2"
            type="file"
            name="branchLogo"
            id="branchLogo"
          />
        </div>
        <div className="border-2">
          <div>
            <label className="block text-base font-normal" htmlFor="branchName">
              <span className="text-red-500">*</span> BRANCH NAME
            </label>
            <input
              className="rounded-lg block w-80 border-2"
              type="text"
              name="branchName"
              id="branchName"
            />
          </div>
          <div>
            <label
              className="block text-base font-normal"
              htmlFor="registrationNumber"
            >
              <span className="text-red-500">*</span> Registration No
            </label>
            <input
              className="rounded-lg block w-80 border-2"
              type="number"
              name="registrationNumber"
              id="registrationNumber"
            />
          </div>
          <div>
            <label
              className="block text-base font-normal"
              htmlFor="yearOfEstablishment"
            >
              <span className="text-red-500">*</span> Year Of Establishment
            </label>
            <input
              className="rounded-lg block w-80 border-2"
              type="date"
              name="yearOfEstablishment"
              id="yearOfEstablishment"
            />
          </div>
          <div>
            <label className="block text-base font-normal" htmlFor="alias">
              Branch Alias
            </label>
            <input
              className="rounded-lg block w-80 border-2"
              type="text"
              name="alias"
              id="alias"
            />
          </div>
          <div>
            <label className="block text-base font-normal" htmlFor="email">
              <span className="text-red-500">*</span> Email Address
            </label>
            <input
              className="rounded-lg block w-80 border-2"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div>
            <label
              className="block text-base font-normal"
              htmlFor="alternateEmail"
            >
              Alternate Email
            </label>
            <input
              className="rounded-lg block w-80 border-2"
              type="email"
              name="alternateEmail"
              id="alternateEmail"
            />
          </div>
        </div>
        <div className="border-2">
          <div>
            <label className="block text-base font-normal" htmlFor="contactNo">
              <span className="text-red-500">*</span> Contact No
            </label>
            <input
              className="rounded-lg block w-80 border-2"
              type="tel"
              name="contactNo"
              id="contactNo"
            />
          </div>
          <div>
            <label className="block text-base font-normal" htmlFor="officeNo">
              Office NO
            </label>
            <input
              className="rounded-lg block w-80 border-2"
              type="tel"
              name="officeNo"
              id="officeNo"
            />
          </div>
          <div>
            <label className="block text-base font-normal" htmlFor="address">
              <span className="text-red-500">*</span> Address
            </label>
            <input
              className="rounded-lg block w-80 border-2"
              type="text"
              name="address"
              id="address"
            />
          </div>
          <div>
            <label
              className="block text-base font-normal"
              htmlFor="instituteName"
            >
              <span className="text-red-500">*</span>InstituteName
            </label>
            <input
              type="text"
              className="rounded-lg block w-80 border-2"
              name="instituteName"
              id="instituteName"
            />
          </div>
        </div>
        <div className="flex justify-center flex-row">
          <input
            className="rounded-lg block w-80 border-2 bg-sky-400 hover:bg-white text-white"
            type="submit"
            value="EDIT"
          />
          <button
            onClick={() => setBranch(initialState)}
            className="rounded-lg block w-80 border-2 bg-red-600 hover:bg-white text-white"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default BranchRegistration;
