"use client";
import { PlusCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";

const Domitory = () => {
  const [dormBuilding, setdormBuilding] = useState(true);
  const [dormbuildingForm, setDormbuildingForm] = useState(false);
  const [roomMgmt, setRoomMgmt] = useState(false);
  const [roomForm, setRoomForm] = useState(false)
  const [warden, setWarden] = useState(false);
  const [wardenForm, setWardenForm] = useState(false)
  const [dormTimetable, setDormTimetable] = useState(false);
  const [dormTimetableForm, setDormTimetableForm] = useState(false)
  const [dormVisitors, setDormVisitors] = useState(false);
  const [dormvisitorsForm, setDormvisitorsForm] = useState(false)
  const [outPassMgmt, setOutPassMgmt] = useState(false);
  const [outPassMgmtform, setOutPassMgmtform] = useState(false)
  return (
    <div>
      <div className="inline-flex">
        <button
          className="border-2 w-40 rounded-lg bg-blue-500 text-white hover:bg-white"
          onClick={() => {
            setdormBuilding(true);
            setRoomMgmt(false);
            setWarden(false);
            setDormTimetable(false);
            setDormVisitors(false);
            setOutPassMgmt(false);
          }}
        >
          Dorm Budling
        </button>
        <button
          className="border-2 w-40 rounded-lg bg-blue-500 text-white hover:bg-white"
          onClick={() => {
            setdormBuilding(false);
            setRoomMgmt(true);
            setWarden(false);
            setDormTimetable(false);
            setDormVisitors(false);
            setOutPassMgmt(false);
          }}
        >
          Room Management
        </button>
        <button
          className="border-2 w-40 rounded-lg bg-blue-500 text-white hover:bg-white"
          onClick={() => {
            setdormBuilding(false);
            setRoomMgmt(false);
            setWarden(true);
            setDormTimetable(false);
            setDormVisitors(false);
            setOutPassMgmt(false);
          }}
        >
          Warden Management
        </button>
        <button
          className="border-2 w-40 rounded-lg bg-blue-500 text-white hover:bg-white"
          onClick={() => {
            setdormBuilding(false);
            setRoomMgmt(false);
            setWarden(false);
            setDormTimetable(true);
            setDormVisitors(false);
            setOutPassMgmt(false);
          }}
        >
          Dorm TimeTable
        </button>
        <button
          className="border-2 w-40 rounded-lg bg-blue-500 text-white hover:bg-white"
          onClick={() => {
            setdormBuilding(false);
            setRoomMgmt(false);
            setWarden(false);
            setDormTimetable(false);
            setDormVisitors(true);
            setOutPassMgmt(false);
          }}
        >
          Dorm Visitors
        </button>
        <button
          className="border-2 w-40 rounded-lg bg-blue-500 text-white hover:bg-white"
          onClick={() => {
            setdormBuilding(false);
            setRoomMgmt(false);
            setWarden(false);
            setDormTimetable(false);
            setDormVisitors(false);
            setOutPassMgmt(true);
          }}
        >
          Outpass Management
        </button>
      </div>
    
      {/* dorm building screen */}
      <div className={dormBuilding ? "visible" : "hidden"}>
      <div className="flex justify-around w-96 border-2 mt-12">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="buildingName"
          >
            Building Name
          </label>
          <select name="buildingName" id="buildingName">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="domType"
          >
            Domitory Type
          </label>
          <select name="domType" id="domType">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="floorNo"
          >
            Floor No
          </label>
          <select name="floorNo" id="floorNo">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
      </div>
        <span>
          Dorm Building
          <PlusCircleFilled
            onClick={() => setDormbuildingForm(!dormbuildingForm)}
          />
        </span>
        <table className="table border-2">
          <thead>
            <tr>
              <th className="border-2">Bulding Name</th>
              <th className="border-2">Dom Type</th>
              <th className="border-2">Number of Floor</th>
              <th className="border-2">In Charge</th>
              <th className="border-2">Maximum Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2">
              <td className="border-2">b1</td>
              <td className="border-2">
                <select name="" id="">
                  <option value="" hidden>
                    Select
                  </option>
                  <option value="boys">Boys</option>
                  <option value="girls">Girls</option>
                </select>
              </td>
              <td className="border-2">1</td>
              <td className="border-2">Ankur</td>
              <td className="border-2">100</td>
            </tr>
          </tbody>
        </table>

        <form
          action=""
          className={`fixed z-10 inset-0 overflow-y-auto bg-blue-600 mt-56 grid grid-cols-2 h-96 gap-8 mx-40 ${
            dormbuildingForm ? "block" : "hidden"
          }`}
        >
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="buildingName"
            >
              Building Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              minLength={10}
              maxLength={20}
              name="buildingName"
              id="buildingName"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="domType"
            >
              Dorm Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="domType"
              id="domType"
            >
              <option value="" hidden></option>
              <option value="boys">Boys</option>
              <option value="girls">Girls</option>
            </select>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="numberOfFloor"
            >
              Number of Floor
            </label>
            <select
              name="numberOfFloor"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="numberOfFloor"
            >
              <option value="" hidden></option>
            </select>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="incharge"
            >
              In Charge
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="incharge"
              id="incharge"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="maxCapacity"
            >
              Maximum Capacity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="maxCapacity"
              id="maxCapacity"
            />
          </div>
        </form>
      </div>

      {/* room management */}
      <div className={roomMgmt ? "visible" : "hidden"}>
      <div className="flex justify-around w-96 border-2 mt-12">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="buildingName"
          >
            Building Name
          </label>
          <select name="buildingName" id="buildingName">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="domType"
          >
            Domitory Type
          </label>
          <select name="domType" id="domType">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="floorNo"
          >
            Floor No
          </label>
          <select name="floorNo" id="floorNo">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
      </div>
        <span>
          Room Management <PlusCircleFilled onClick={() => setRoomForm(!roomForm)} />
        </span>
        <table className="table border-2">
          <thead>
            <tr>
              <th className="border-2">Bulding Name</th>
              <th className="border-2">Dom Type</th>
              <th className="border-2">Floor No</th>
              <th className="border-2">Room Type</th>
              <th className="border-2">Room No</th>
              <th className="border-2">Total Beds</th>
              <th className="border-2">Available Beds</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2">b1</td>
              <td className="border-2"><select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="domType"
              id="domType"
            >
              <option value="" hidden></option>
              <option value="boys">Boys</option>
              <option value="girls">Girls</option>
            </select></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={warden ? "visible" : "hidden"}>
      <div className="flex justify-around w-96 border-2 mt-12">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="buildingName"
          >
            Building Name
          </label>
          <select name="buildingName" id="buildingName">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="domType"
          >
            Domitory Type
          </label>
          <select name="domType" id="domType">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="floorNo"
          >
            Floor No
          </label>
          <select name="floorNo" id="floorNo">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
      </div>
      <table className="table border-2">
          <thead>
            <tr>
              <th className="border-2">Bulding Name</th>
              <th className="border-2">Dom Type</th>
              <th className="border-2">Floor No</th>
             <th className="border-2">Warden Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2">b1</td>
              <td className="border-2"><select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="domType"
              id="domType"
            >
              <option value="" hidden></option>
              <option value="boys">Boys</option>
              <option value="girls">Girls</option>
            </select></td>
            <td>1</td>
            <td>Nee</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={dormTimetable ? "visible" : "hidden"}>
      <div className="flex justify-around w-96 border-2 mt-12">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="buildingName"
          >
            Building Name
          </label>
          <select name="buildingName" id="buildingName">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        
      </div>
        <span>Add Dorm Timetable <PlusCircleFilled onClick={()=>setDormTimetableForm(!dormTimetableForm)} /></span>
        <table className="border-2 table">
          <thead>
            <tr>
              <th>Building Name</th>
              <th>Dorm Type</th>
              <th>Dormitory Activity</th>
              <th>Start Time</th>
              <th>End Time</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>b1</td>
              <td>
              <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="domType"
              id="domType"
            >
              <option value="" hidden></option>
              <option value="boys">Boys</option>
              <option value="girls">Girls</option>
            </select>
              </td>
              <td>Lunch</td>
              <td>12:30</td>
              <td>13:01</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={dormVisitors ? "visible" : "hidden"}>
      <div className="flex justify-around w-96 border-2 mt-12">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="buildingName"
          >
            Building Name
          </label>
          <select name="buildingName" id="buildingName">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="fromTime">From</label>
          <input type="date" name="fromTime" id="fromTime" />
        </div>
        <div>
          <label htmlFor="toTime">To</label>
          <input type="date" name="datetime" id="datetime" />
        </div>
      </div>
        <table className="table border-2">
          <thead>
            <tr>
              <th>Date of Visit</th>
              <th>Whome TO Meet?</th>
              <th>Visitor Name</th>
              <th>Relation</th>
              <th>Purpose</th>
              <th>Mobile Number</th>
              <th>Check IN Time</th>
              <th>Check Out Time</th>
            </tr>
          </thead>
        </table>
         </div>
      <div className={outPassMgmt ? "visible" : "hidden"}>
      <div className="flex justify-around w-96 border-2 mt-12">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="buildingName"
          >
            Building Name
          </label>
          <select name="buildingName" id="buildingName">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="degreeCode"
          >
            DegreeCode
          </label>
          <select
            className=""
            name="degreeCode"
            id="degreeCode"
          >
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="courseYear"
          >
            CourseYear
          </label>
          <select
            className=""
            name="courseYear"
            id="courseYear"
          >
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
       <div><label htmlFor="room" className="block text-gray-700 text-sm font-bold mb-2">Room</label><select name="room" id="room"><option value="" hidden></option></select></div>
      </div>

      <table className="table border-2">
          <thead>
            <tr>
              <th>Degree Code</th>
              <th>Course Year</th>
              <th>Admission Number</th>
              <th>Name</th>
              <th>Phone No</th>
              <th>Room Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
      </table>
      </div>
    </div>
  );
};

export default Domitory;
