import React from "react";

const FacultySubject = () => {
  return (
    <div>
      <div
        className="flex flex-row justify-between  ml-24"
        style={{ width: "60rem" }}
      >
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="degreeCode"
          >
            DegreeCode
          </label>
          <select name="degreeCode" id="degreeCode">
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
          <select name="courseYear" id="courseYear">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="section"
          >
            Section
          </label>
          <select name="section" id="section">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="subjectType" className="block text-gray-700 text-sm font-bold mb-2">Subject Type</label>
          <select name="subjectType" id="subjectType">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
      </div>
      <table className="table overflow-y-scroll">
        <thead>
          <tr>
            <th className="border-2">DegreeCode</th>
            <th className="border-2">CourseYear</th>
            <th className="border-2">Section</th>
            <th className="border-2">Subject Type</th>
            <th className="border-2">Subject</th>
            <th className="border-2">Primary Faculty</th>
            <th className="border-2">Secondary Faculty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2">B.Tech.CSE(2021-22)</td>
            <td className="border-2">3rd year 4th sem</td>
            <td className="border-2">3</td>
            <td className="border-2">Non-Elective</td>
            <td className="border-2">Programming with Javascript</td>
            <td className="border-2">Nitish Singh</td>
            <td className="border-2">Aryan Singh</td>
          </tr>
        </tbody>
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
  );
};

export default FacultySubject;
