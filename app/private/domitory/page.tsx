"use client";
import { PlusCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";

const Domitory = () => {
  const [dormBuilding, setdormBuilding] = useState(true);
  const [dormbuildingForm, setDormbuildingForm] = useState(false);
  const [roomMgmt, setRoomMgmt] = useState(false);
  const [roomForm, setRoomForm] = useState(false);
  const [warden, setWarden] = useState(false);
  const [wardenForm, setWardenForm] = useState(false);
  const [dormTimetable, setDormTimetable] = useState(false);
  const [dormTimetableForm, setDormTimetableForm] = useState(false);
  const [dormVisitors, setDormVisitors] = useState(false);
  const [dormvisitorsForm, setDormvisitorsForm] = useState(false);
  const [outPassMgmt, setOutPassMgmt] = useState(false);
  const [outPassMgmtform, setOutPassMgmtform] = useState(false);
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
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="buildingName"
              id="buildingName"
            >
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
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="domType"
              id="domType"
            >
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
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="floorNo"
              id="floorNo"
            >
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
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name=""
                  id=""
                >
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
          className={
            dormbuildingForm ? "visible border-2 rounded-lg ml-40 w-96" : "hidden"
          }
          style={{ marginLeft: "60rem" }}
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
          <div>
            <input
              type="submit"
              value="SEND"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
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
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="buildingName"
              id="buildingName"
            >
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
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="domType"
              id="domType"
            >
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
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="floorNo"
              id="floorNo"
            >
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
        </div>
        <span>
          Room Management{" "}
          <PlusCircleFilled onClick={() => setRoomForm(!roomForm)} />
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
              <td className="border-2">
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
            </tr>
          </tbody>
        </table>

        <form
          action=""
          method="POST"
          className={
            roomForm ? "visible border-2 rounded-lg ml-40 w-96" : "hidden"
          }
          style={{ marginLeft: "60rem" }}
        >
          <div>
            <label htmlFor="floorNo">Floor No</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="floorNo"
              id="floorNo"
            />
          </div>
          <div>
            <label htmlFor="roomType">Room Type</label>
          </div>
          <div>
            <label htmlFor="roomNo">Room No</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="totalBeds">Total Beds</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="availablebeds">Available Beds</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="availablebeds"
              id="availablebeds"
            />
          </div>
          <div>
            <input
              type="submit"
              value="SEND"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            />
          </div>
        </form>
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
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="buildingName"
              id="buildingName"
            >
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
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="domType"
              id="domType"
            >
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
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="floorNo"
              id="floorNo"
            >
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
        </div>
        <span>
          Add Warden
          <PlusCircleFilled onClick={() => setWardenForm(!wardenForm)} />
        </span>
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
              <td className="border-2">
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
              <td className="border-2">1</td>
              <td className="border-2">Nee</td>
            </tr>
          </tbody>
        </table>
        <form
          action=""
          method="POST"
          className={
            wardenForm ? "visible border-2 rounded-lg ml-40 w-96" : "hidden"
          }
          style={{ marginLeft: "60rem" }}
        >
          <div>
            <label htmlFor="wardenName">Warden Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="wardenName"
              id="wardenName"
            />
          </div>
          <div>
            <input
              type="submit"
              value="SEND"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            />
          </div>
        </form>
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
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="buildingName"
              id="buildingName"
            >
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
        </div>
        <span>
          Add Dorm Timetable{" "}
          <PlusCircleFilled
            onClick={() => setDormTimetableForm(!dormTimetableForm)}
          />
        </span>
        <table className="border-2 table">
          <thead>
            <tr>
              <th className="border-2">Building Name</th>
              <th className="border-2">Dorm Type</th>
              <th className="border-2">Dormitory Activity</th>
              <th className="border-2">Start Time</th>
              <th className="border-2">End Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2">b1</td>
              <td className="border-2">
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
              <td className="border-2">Lunch</td>
              <td className="border-2">12:30</td>
              <td className="border-2">13:01</td>
            </tr>
          </tbody>
        </table>
        <form
          action=""
          method="POST"
          className={
            dormTimetableForm
              ? "visible border-2 rounded-lg ml-40 w-96"
              : "hidden"
          }
          style={{ marginLeft: "60rem" }}
        >
          <div>
            <label htmlFor="dormActivity">Dormitory Activity</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="dormActivity"
              id="dormActivity"
            />
          </div>
          <div>
            <label htmlFor="startTime">Start Time</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="time"
              name="startTime"
              id="startTime"
            />
          </div>
          <div>
            <label htmlFor="endTime">End Time</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="time"
              name="endTime"
              id="endTime"
            />
          </div>
          <div>
            <input
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              type="submit"
              value="SEND"
            />
          </div>
        </form>
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
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="buildingName"
              id="buildingName"
            >
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="fromTime">From</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="fromTime"
              id="fromTime"
            />
          </div>
          <div>
            <label htmlFor="toTime">To</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="datetime"
              id="datetime"
            />
          </div>
        </div>
        <span>
          Add Dorm Visitors
          <PlusCircleFilled
            onClick={() => setDormvisitorsForm(!dormvisitorsForm)}
          />
        </span>
        <table className="table border-2">
          <thead>
            <tr>
              <th className="border-2">Date of Visit</th>
              <th className="border-2">Whome TO Meet?</th>
              <th className="border-2">Visitor Name</th>
              <th className="border-2">Relation</th>
              <th className="border-2">Purpose</th>
              <th className="border-2">Mobile Number</th>
              <th className="border-2">Check IN Time</th>
              <th className="border-2">Check Out Time</th>
            </tr>
          </thead>
        </table>
        <form
          action=""
          method="POST"
          className={
            dormvisitorsForm
              ? "visible border-2 rounded-lg ml-40 w-96"
              : "hidden"
          }
          style={{ marginLeft: "60rem" }}
        >
          <div>
            <label htmlFor="dateOfVisit">Date of Visit</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="dateOfVisit"
              id="dateOfVisit"
            />
          </div>
          <div>
            <label htmlFor="whom">Whom TO Meet</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="whom"
              id="whom"
            />
          </div>
          <div>
            <label htmlFor="visitorName">Visitor Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="visitorName"
              id="visitorName"
            />
          </div>
          <div>
            <label htmlFor="relation">Relation</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="relation"
              id="relation"
            />
          </div>
          <div>
            <label htmlFor="mobileNo">Mobile No</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              name="mobileNo"
              id="mobileNo"
            />
          </div>
          <div>
            <label htmlFor="checkin">Check In</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="time"
              name="checkin"
              id="checkin"
            />
          </div>
          <div>
            <label htmlFor="checkOut">Check Out</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="time"
              name="checkOut"
              id="checkOut"
            />
          </div>
          <div>
            <input
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              type="submit"
              value="Add Dorm Visitor"
            />
          </div>
        </form>
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
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="buildingName"
              id="buildingName"
            >
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="courseYear"
              id="courseYear"
            >
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="room"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Room
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="room"
              id="room"
            >
              <option value="" hidden></option>
            </select>
          </div>
        </div>
        <span>
          OutPass Management{" "}
          <PlusCircleFilled
            onClick={() => setOutPassMgmtform(!outPassMgmtform)}
          />
        </span>
        <table className="table border-2">
          <thead>
            <tr>
              <th className="border-2">Degree Code</th>
              <th className="border-2">Course Year</th>
              <th className="border-2">Admission Number</th>
              <th className="border-2">Name</th>
              <th className="border-2">Phone No</th>
              <th className="border-2">Room Number</th>
              <th className="border-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2"></td>
              <td className="border-2"></td>
              <td className="border-2"></td>
              <td className="border-2"></td>
              <td className="border-2"></td>
              <td className="border-2"></td>
              <td className="border-2"></td>
            </tr>
          </tbody>
        </table>
        <form
          action=""
          method="POST"
          className={
            outPassMgmtform
              ? "visible border-2 rounded-lg ml-40 w-96"
              : "hidden"
          }
          style={{ marginLeft: "60rem" }}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="phoneNo">Phone No</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              name="phoneNo"
              id="phoneNo"
            />
          </div>
          <div>
            <label htmlFor="roomNo">Room No</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="roomNo"
              id="roomNo"
            />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="status"
              id="status"
            >
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="SEND"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Domitory;
