import React from "react";

const StudentPromotion = () => {
  return (
    <div className="grid grid-cols-3">
      <div
        className="grid grid-cols-2 ml-24"
        style={{ width: "28rem" }}
      >
        <div className="block">

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
            </div>
        <table className="table border-2">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>CourseYear</th>
              <th>Section</th>
              <th>Select</th>
            </tr>
          </thead>
        </table>
      </div>
      <div></div>
    </div>
  );
};

export default StudentPromotion;
