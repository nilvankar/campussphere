import React from "react";

const FinalMarks = () => {
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
      </div>
      <table className="table border-2">
        <thead>
          <tr>
            <th className="border-2">Admission No</th>
            <th className="border-2">Student Name</th>
            <th className="border-2">CourseYear</th>
            <th className="border-2">Section</th>
            <th className="border-2">Subject</th>
            <th className="border-2">Exam Name</th>
            <th className="border-2">Exam Date</th>
            <th className="border-2">Max Marks</th>
            <th className="border-2">Obtain Marks</th>
            <th className="border-2">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>239434</td>
            <td>Neel</td>
            <td>
              {" "}
              <select name="courseYear" id="courseYear">
                <option value="" hidden>
                  Select
                </option>
              </select>
            </td>
            <td>
              {" "}
              <select name="section" id="section">
                <option value="" hidden>
                  Select
                </option>
              </select>
            </td>
            <td>Programming with Java</td>
            <td>final examination</td>
            <td>01/02/2024-15/02/2024</td>
            <td>200</td>
            <td>120</td>
            <td>N/A</td>
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

export default FinalMarks;
