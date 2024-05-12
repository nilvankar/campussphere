"use client";
import React, { useState } from "react";
import { FileAddFilled, MailOutlined } from "@ant-design/icons";
const Dept_Desg = () => {
  const [deptVisible, setDeptVisible] = useState(true);
  const [jobTypeVisible, setjobTypeVisible] = useState(false);
  const [depdesgMap, setdepdesgMap] = useState(false);
  return (
    <div>
      <span className="text-2xl">Deartment</span>
      <FileAddFilled
        className="text-2xl"
        onClick={() => {
          setDeptVisible(false);
          setjobTypeVisible(!jobTypeVisible);
          setdepdesgMap(false);
        }}
      />
      <MailOutlined
        onClick={() => {
          setDeptVisible(false);
          setjobTypeVisible(false);
          setdepdesgMap(!depdesgMap);
        }}
      />
      <div className={deptVisible ? "visible" : "hidden"}>
        <table className="table border-2">
          <thead>
            <tr>
              <th>Department Name</th>
              <th>Department Alias</th>
              <th>Track StartTime</th>
              <th>Track EndTime</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={jobTypeVisible ? "visible" : "hidden"}>
        <table className="table border-2">
          <thead>
            <tr>
              <th>Is Teaching?</th>
              <th>Job Designation Type</th>
              <th>Job Designation</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={depdesgMap ? "visible" : "hidden"}>
        <div>
          <label htmlFor="dept">Department</label>
          <select name="dept" id="dept">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <table className="table border-2">
          <thead>
            <tr>
              <th>Department Name</th>
              <th>Job Designation Type</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="mt-96 ml-96">
        <input
          type="submit"
          value="SAVE"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
        />
        <input
          type="reset"
          value="RESET"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        />
      </div>
    </div>
  );
};

export default Dept_Desg;
