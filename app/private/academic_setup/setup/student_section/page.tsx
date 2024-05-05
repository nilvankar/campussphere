import React from "react";

const StudentSection = () => {
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
          <label
            htmlFor="admissionType"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Admission Type
          </label>
          <select name="admissionType" id="admissionType">
            <option value="" hidden></option>
          </select>
        </div>
        <div>
          <label
            htmlFor="marritRating"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            MarritRating
          </label>
          <select name="marritRating" id="marritRating">
            <option value="" hidden></option>
          </select>
        </div>
        <div>
          <label
            htmlFor="firstLang"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            FirstLanguage
          </label>
          <select name="firstLang" id="firstLang">
            <option value="" hidden></option>
          </select>
        </div>
        <div>
          <label
            htmlFor="secondaryLang"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Secondary Language
          </label>
          <select name="secondaryLang" id="secondaryLang">
            <option value="" hidden></option>
          </select>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="border-2">DegreeCode</th>
            <th className="border-2">CourseYear</th>
            <th className="border-2">AdmissionNo</th>
            <th className="border-2">Student Name</th>
            <th className="border-2">Marit Rating</th>
            <th className="border-2">FirstLanguage</th>
            <th className="border-2">secondaryLang</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2">B.Tech.CSE(2021-22)</td>
            <td className="border-2">3rd year 4th sem</td>
            <td className="border-2">304385435</td>
            <td className="border-2">Neel Vankar</td>
            <td className="border-2">UnStarted</td>
            <td className="border-2">Gujarati</td>
            <td className="border-2">English</td>
          </tr>
        </tbody>
      </table>
      <label htmlFor="alloat"  className="block text-gray-700 text-sm font-bold mb-2 ml-96 mt-96" >Allocated to section</label>
      <select name="alloat" className="shadow appearance-none border ml-96 rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"id="alloat"><option value="" hidden>Select</option></select>
    </div>
  );
};

export default StudentSection;
