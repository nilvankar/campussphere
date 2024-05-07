"use client";
import { months } from "@/app/data";
import { PlusCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";

const LeadManagmentModule = () => {
  const [managelead, setManagelead] = useState(true);
  const [manageleadForm, setManageleadForm] = useState(false);
  const [leadhistory, setLeadhistory] = useState(false);
  const [leadhistoryForm, setLeadhistoryForm] = useState(false);
  const [hostlead, setHostlead] = useState(false);
  const [hotleadForm, setHotleadForm] = useState(false);
  const [dailyLead, setDailyLead] = useState(false);
  const [dialyLeadForm, setDialyLeadForm] = useState(false);
  const [inactiveLead, setInactiveLead] = useState(false);
  const [inactiveLeadForm, setInactiveLeadForm] = useState(false);
  return (
    <div>
      <div className="inline-flex">
        <button
          className="border-2 w-40 rounded-lg bg-blue-500 text-white hover:bg-white mx-4"
          onClick={() => {
            setManagelead(true);

            setLeadhistory(false);
            setHostlead(false);
            setDailyLead(false);
            setInactiveLead(false);
          }}
        >
          Manage Lead
        </button>

        <button
          className="border-2 w-40 rounded-lg bg-blue-500 text-white hover:bg-white mx-4"
          onClick={() => {
            setManagelead(false);

            setLeadhistory(true);
            setHostlead(false);
            setDailyLead(false);
            setInactiveLead(false);
          }}
        >
          Lead History
        </button>
        <button
          className="border-2 w-40 rounded-lg bg-blue-500 text-white hover:bg-white mx-4"
          onClick={() => {
            setManagelead(false);

            setLeadhistory(false);
            setHostlead(true);
            setDailyLead(false);
            setInactiveLead(false);
          }}
        >
          Host Lead
        </button>
        <button
          className="border-2 w-40 rounded-lg bg-blue-500 text-white hover:bg-white mx-4"
          onClick={() => {
            setManagelead(false);

            setLeadhistory(false);
            setHostlead(false);
            setDailyLead(true);
            setInactiveLead(false);
          }}
        >
          Daily Lead
        </button>
        <button
          className="border-2 w-40 rounded-lg bg-blue-500 text-white hover:bg-white mx-4"
          onClick={() => {
            setManagelead(false);

            setLeadhistory(false);
            setHostlead(false);
            setDailyLead(false);
            setInactiveLead(true);
          }}
        >
          Inactive Lead
        </button>
      </div>
      <div className={managelead ? "visible" : "hidden"}>
        <div className="inline-flex">
          <div>
            <label htmlFor="dateRange">Date Range</label>
            <input type="date" name="dateRange" id="dateRange" />
          </div>
          <div>
            <label htmlFor="leadStatus">Lead Status</label>
            <select name="leadStatus" id="leadStatus">
              <option value="" hidden></option>
            </select>
          </div>
          <div>
            <label htmlFor="enrollmentStatus">EnrollmentStatus</label>
            <select name="enrollmentStatus" id="enrollmentStatus">
              <option value="" hidden>
                Select
              </option>
              <option value="pending">Pending</option>
              <option value="WaitingList">WaitingList</option>
              <option value="disqualified">Disqualified</option>
              <option value="forLater">For Later</option>
            </select>
          </div>
        </div>
        <div>
          <span>
            Enquiry Management
            <PlusCircleFilled
              onClick={() => setManageleadForm(!manageleadForm)}
            />
          </span>
          <table className="table border-2">
            <thead>
              <tr>
                <th className="border-2">Enquiry Date</th>
                <th className="border-2">Student Name</th>
                <th className="border-2">Contact Email</th>
                <th className="border-2">Contact NO</th>
                <th className="border-2">Assign to User</th>
                <th className="border-2">Lead Status</th>
                <th className="border-2">Next Follow Up</th>
                <th className="border-2">Enrollment Status</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>

          <form
            action=""
            className={`fixed z-10 inset-0 overflow-y-auto bg-blue-600 mt-56 grid grid-cols-2 h-96 gap-8 mx-40 ${
              manageleadForm ? "block" : "hidden"
            }`}
          >
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
              <label htmlFor="studentName">Student Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="studentName"
                id="studentName"
              />
            </div>
            <div>
              <label htmlFor="contactNo">Contact Number</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                name="contactNo"
                id="contactNo"
              />
            </div>
            <div>
              <label htmlFor="assignToUser">Assign To </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="assignToUser"
                id="assignToUser"
              />
            </div>
            <div>
              <label htmlFor="nextfollowUp">Next Follow Up</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                name="nextfollowUp"
                id="nextfollowUp"
              />
            </div>
            <div>
              <label htmlFor="contactEmail">Contact Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="contactEmail"
                id="contactEmail"
              />
            </div>
            <div>
              <label htmlFor="enrollStatus">Enroll Status</label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="enrollmentStatus"
                id="enrollmentStatus"
              >
                <option value="" hidden>
                  Select
                </option>
                <option value="pending">Pending</option>
                <option value="WaitingList">WaitingList</option>
                <option value="disqualified">Disqualified</option>
                <option value="forLater">For Later</option>
              </select>
            </div>
            <div className="">
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
          </form>
        </div>
      </div>
      <div className={leadhistory ? "visible" : "hidden"}>
      <div className="inline-flex">
          <div>
            <label htmlFor="dateRange">Date Range</label>
            <input type="date" name="dateRange" id="dateRange" />
          </div>
          <div>
            <label htmlFor="leadStatus">Lead Status</label>
            <select name="leadStatus" id="leadStatus">
              <option value="" hidden></option>
            </select>
          </div>
          <div>
            <label htmlFor="enrollmentStatus">EnrollmentStatus</label>
            <select name="enrollmentStatus" id="enrollmentStatus">
              <option value="" hidden>
                Select
              </option>
              <option value="pending">Pending</option>
              <option value="WaitingList">WaitingList</option>
              <option value="disqualified">Disqualified</option>
              <option value="forLater">For Later</option>
            </select>
          </div>
        </div>
      </div>
      <div className={hostlead ? "visible" : "hidden"}>
      <div className="inline-flex">
          <div>
            <label htmlFor="dateRange">Date Range</label>
            <input type="date" name="dateRange" id="dateRange" />
          </div>
          <div>
            <label htmlFor="leadStatus">Lead Status</label>
            <select name="leadStatus" id="leadStatus">
              <option value="" hidden></option>
            </select>
          </div>
         
        </div>
      </div>
      <div className={dailyLead ? "visible" : "hidden"}>
      <div className="inline-flex">
          <div>
            <label htmlFor="month">Month</label>
            <select name="month" id="month">
              <option value="" hidden>Select</option>
              {months.map((month,i)=>(
                <option value={month.label} key={i}>{month.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={inactiveLead ? "visible" : "hidden"}></div>
    </div>
  );
};

export default LeadManagmentModule;
