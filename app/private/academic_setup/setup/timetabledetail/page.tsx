import { months, weekDays } from "@/app/data";
import React from "react";

const TimetableDetails = () => {
  
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
        <table className="table mt-40">
          <thead>
            <tr>
              <th className="border-2">S.No</th>
              <th className="border-2">Section Name</th>
              <th className="border-2">From Time</th>
              <th className="border-2">To Time</th>
              {weekDays.map((day, i) => (
                <th className="border-2" key={i}>{day.label}</th>
              ))}
            </tr>
          </thead>
        </table>
      
      <label htmlFor="tillTimeTable">Allot TimeTable till</label>
      <input type="date" name="tillTimeTable" id="tillTimeTable" />
      <input type="submit" value="SAVE CHANGES" />
    </div>
  );
};

export default TimetableDetails;
