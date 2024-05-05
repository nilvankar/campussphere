import React from "react";

const CourseDesign = () => {
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
      </div>
      <table className="table border-2">
        <thead>
          <tr>
            <th className="border-2">S.no</th>
            <th className="border-2">CourseCode</th>
            <th className="border-2">Subject</th>
            <th className="border-2">Elective Name</th>
            <th className="border-2">Subject Group</th>
            <th className="border-2">PO</th>
            <th className="border-2">Scheme of Teaching</th>
            <th className="border-2">Total Credits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2">1</td>
            <td className="border-2">4th year 7th sem</td>
            <td className="border-2">Mathamatics</td>
            <td className="border-2">Non-Elective</td>
            <td className="border-2">Non-Elective</td>
            <td className="border-2">Non-Elective</td>
            <td className="border-2">
              <select name="" id=""><option value="" hidden>Select</option>
              <option value="lectures">Lectures</option>
              <option value="tutorials">Tutorials</option>
              <option value="pracitals">Pracitcals</option>
              </select>
            </td>
            <td className="border-2">12</td>
            </tr>

        </tbody>
      </table>
    </div>
  );
};

export default CourseDesign;
