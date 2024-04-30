"use client";
import React, { useState } from "react";

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

  return (
    <div className="h-screen w-screen">
       <div>
        <label htmlFor="branchName">Branch Name</label>
        <select name="branchName" id="branchName">
          <option value="" hidden>Select</option>

        </select>
      </div>
      <div><label htmlFor="branchNo">Branch No</label><select name="branchNo" id="branchNo"><option value="" hidden>Select</option></select></div>
      <form
        action=""
        method="POST"
        className="grid grid-cols-3"
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
              BRANCH NAME
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
              Registration No
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
              Year Of Establishment
            </label>
            <input
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
              Email Address
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
              Contact No
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
              Address
            </label>
            <input
              className="rounded-lg block w-80 border-2"
              type="text"
              name="address"
              id="address"
            />
          </div>
        </div>
        <input
          className="rounded-lg block w-80 border-2"
          type="submit"
          value="EDIT"
        />
        <button onClick={() => setBranch(initialState)}>Clear</button>
      </form>
    </div>
  );
};

export default BranchRegistration;
