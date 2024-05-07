"use client";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FileAddFilled,
  MailOutlined,
  PlusCircleFilled,
} from "@ant-design/icons";
const ApplicationMaster = () => {
  const [deptVisible, setDeptVisible] = useState(true);
  const [addDept, setAddDept] = useState(false)
  const [buldingForm, setBuldingForm] = useState(false);
  const [assignForm, setAssignForm] = useState(false);
  const [docForm, setdocForm] = useState(false);
  const [jobTypeVisible, setjobTypeVisible] = useState(false);
  const [depdesgMap, setdepdesgMap] = useState(false);
  const [masterSetting, setMasterSetting] = useState(true);
  const [building_mgmt, setBuilding_mgmt] = useState(false);
  const [dept_desg, setDept_desg] = useState(false);
  const [electiveConfig, setElectiveConfig] = useState(false);
  const router = useRouter();
  const [appDoc, setAppDoc] = useState(true);
  const [assVisible, setAssVisible] = useState(false);
  const handleMasterConfigChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (value === "appDoc") {
      setAppDoc(true);
      setAssVisible(false); // Ensure the other table is hidden
    } else if (value === "assType") {
      setAppDoc(false);
      setAssVisible(true);
    } else if (value === "digitalDiary") {
      setAppDoc(false);
      setAssVisible(false);
    }
  };
  return (
    <div>
      <div className="flex flex-row justify-around">

     
      <button
        className="rounded-lg border-2 bg-blue-500 text-white hover:text-blue-950 shadow-sm"
        onClick={() => {
          setBuilding_mgmt(false);
          setDept_desg(false);
          setElectiveConfig(false);
          setMasterSetting(true);
        }}
      >
        Master Settings
      </button>

      <button
        className="rounded-lg border-2 bg-blue-500 text-white hover:text-blue-950 shadow-sm"
        onClick={() => {
          setBuilding_mgmt(true);
          setDept_desg(false);
          setElectiveConfig(false);
          setMasterSetting(false);
        }}
      >
        BuldingManagement
      </button>
      <button
        className="rounded-lg border-2 bg-blue-500 text-white hover:text-blue-950 shadow-sm"
        onClick={() => {
          setBuilding_mgmt(false);
          setDept_desg(true);
          setElectiveConfig(false);
          setMasterSetting(false);
        }}
      >
        Department and Designation
      </button>
      <button
        className="rounded-lg border-2 bg-blue-500 text-white hover:text-blue-950 shadow-sm"
        onClick={() => {
          setBuilding_mgmt(false);
          setDept_desg(false);
          setElectiveConfig(true);
          setMasterSetting(false);
        }}
      >
        Elective config
      </button>
      </div>
      {/* screens */}
      {/* master configuration */}
      <div className={masterSetting ? "visible" : "hidden"}>
        <div className="">
          <select
            name="masterConfig"
            id="masterConfig"
            onChange={handleMasterConfigChange}
          >
            <option value="appDoc">Application Document Type</option>
            <option value="assType">Assignment Type</option>
          </select>
        </div>
        <div className={appDoc ? "visible" : "hidden"}>
          <label htmlFor="documentType">
            Add Document{" "}
            <PlusCircleFilled onClick={() => setdocForm(!docForm)} />
          </label>
          <table className="table border-2">
            <thead>
              <tr>
                <th className="border-2">Document Type</th>
                <th className="border-2">Action</th>
                <th className="border-2">Sno</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2">1</td>
                <td className="border-2">Word</td>
                <td className="border-2">Pending</td>
              </tr>
            </tbody>
          </table>
          <form
            action=""
            method="POST"
            className={
              docForm ? "visible w-80  border-2 mx-24 rounded-lg" : "hidden"
            }
          >
            <span className="block">Add Document Type</span>
            <label
              htmlFor="docType"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Document Type
            </label>
            <select
              name="docType"
              id="docType"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" hidden>
                Select
              </option>
            </select>
            <div>
              <input
                type="submit"
                value="SUBMIT"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              />
            </div>
          </form>
        </div>
        <div className={assVisible ? "visible" : "hidden"}>
          <label htmlFor="AddAssign">
            Add Assignment{" "}
            <PlusCircleFilled
              onClick={() => {
                setAssignForm(!assignForm);
              }}
            />
          </label>

          <table className="table border-2">
            <thead>
              <tr>
                <th className="border-2">Sno</th>
                <th className="border-2">Assignment Type</th>
                <th className="border-2">Action</th>
              </tr>
            </thead>
            <tbody>{/* Add rows for Assignment Type */}</tbody>
          </table>

          <form
            action=""
            method="POST"
            className={`fixed z-10 inset-0 overflow-y-auto bg-blue-600 mt-56 grid grid-cols-2 h-44 gap-8 mx-40 ${
              assignForm ? "block" : "hidden"
            }`}
          >
            <label htmlFor="addAssignLabel" className="block">
              Add Assignment
            </label>
            <div className="block">
              <label htmlFor="assignType">AssignmentType</label>
              <select name="assignType" id="assignType">
                <option value="" hidden></option>
                <option value="quiz">Quiz</option>
                <option value="homework">HomeWork</option>
                <option value="presentations">Presentations</option>
                <option value="bonus">Bonus</option>
                <option value="popQuiz">Pop Quiz</option>
                <option value="Practicipation">Participation Responses</option>
                <option value="written">Written</option>
                <option value="project">Project Work</option>
                <option value="sleep">Sleep Test</option>
              </select>
            </div>
            <div>
              <input type="submit" value="ADD" />
            </div>
          </form>
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
      {/* bulding mgmt */}
      <div className={building_mgmt ? "visible" : "hidden"}>
        <h5>
          Add Building{" "}
          <PlusCircleFilled onClick={() => setBuldingForm(!buldingForm)} />
        </h5>
        <table className="table border-2">
          <thead>
            <tr>
              <th className="border-2">Block Name</th>
              <th className="border-2">Floor No</th>
              <th className="border-2">Room Number</th>
              <th className="border-2">Hall Name</th>
              <th className="border-2">Maximum Capacity</th>
              <th className="border-2">Hall Type</th>
              <th className="border-2">is Exam Hall?</th>
              <th className="border-2">Comment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2">A1</td>
              <td className="border-2">1</td>
              <td className="border-2">101</td>
              <td className="border-2">H1</td>
              <td className="border-2">30</td>
              <td className="border-2">Room</td>
              <td className="border-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="border-2">No Remarks</td>
            </tr>
          </tbody>
        </table>
        <form
          action=""
          className={`fixed z-10 inset-0 overflow-y-auto bg-blue-600 mt-56 grid grid-cols-2 h-96 gap-8 mx-40 ${
            buldingForm ? "block" : "hidden"
          }`}
        ></form>
      </div>

      {/* dept&desg */}
      <div className={dept_desg ? "visible" : "hidden"}>
        <div className="w-screen flex flex-row justify-around">

        
        <span className="text-2xl">Department</span>
        <FileAddFilled 
          className="text-2xl "
          onClick={() => {
            setDeptVisible(false);
            setjobTypeVisible(!jobTypeVisible);
            setdepdesgMap(false);
          }}
        />
        <MailOutlined className=""
          onClick={() => {
            setDeptVisible(false);
            setjobTypeVisible(false);
            setdepdesgMap(!depdesgMap);
          }}
        />
         </div>
         <h5>Add Department <PlusCircleFilled onClick={()=>setAddDept(!addDept)} /></h5>
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
          <form action="" method="POST" className={`fixed z-10 inset-0 overflow-y-auto bg-blue-600 mt-56 grid grid-cols-2 h-96 gap-8 mx-40 ${
          addDept ? "block" : "hidden"
        }`}></form>
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

      {/* elective */}
      <div className={electiveConfig ? "visible" : "hidden"}>
        <table className="table border-2">
          <thead>
            <tr>
              {" "}
              <th>Elective Name</th>
              <th>Code</th>
              <th>Any Deadline</th>
              <th>Deadline</th>
              <th>Commment</th>
            </tr>
          </thead>
        </table>
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
    </div>
  );
};

export default ApplicationMaster;
