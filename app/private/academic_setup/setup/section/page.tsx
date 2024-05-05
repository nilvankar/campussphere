"use client";
import { PlusCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";

const SectionManagment = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <div className="flex flex-row justify-around w-96 ml-24">
        <div className="">
          <label htmlFor="degreeCode">DegreeCode</label>
          <select name="degreeCode" id="degreeCode">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="courseYear">CourseYear</label>
          <select name="courseYear" id="courseYear">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div></div>
      </div>
      <button onClick={() => setisOpen(!isOpen)}>
        Add Section <PlusCircleFilled />
      </button>
     
      <table className="table overflow-y-scroll">
        <thead>
          <tr>
            <th className="border-2">Section</th>
            <th className="border-2">DegreeCode</th>
            <th className="border-2">CourseYear</th>
            <th className="border-2">Max Strength</th>
            <th className="border-2">Primary Course Year</th>
            <th className="border-2">Secondary Course Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2">1</td>
            <td className="border-2">
              {" "}
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="degreeCode"
                id="degreeCode"
              >
                <option value="" hidden>
                  Select
                </option>
              </select>
            </td>
            <td className="border-2">
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="courseYear"
                id="courseYear"
              >
                <option value="" hidden>
                  Select
                </option>
              </select>
            </td>
            <td className="border-2">23</td>
            <td className="border-2">
              <select name="primaryCourseFaculty" id="primaryCourseFaculty">
                <option value="" hidden>
                  Select
                </option>
              </select>
            </td>
            <td className="border-2">
              <select name="secondaryCourseFaculty" id="secondaryCourseFaculty">
                <option value="" hidden>
                  Select
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-96 ml-96" >

      <input type="submit" value="SAVE" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" />
      <input type="reset" value="RESET" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" />
      </div>
    </div>
  );
};

export default SectionManagment;
