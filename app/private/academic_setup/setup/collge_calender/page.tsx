"use client";

import { getYears, months } from "@/app/data";
import React from "react";

const CollgeCalender = () => {
   
  const res = getYears();

  return (
    <div>
      <div
        className="flex flex-row justify-between  ml-24"
        style={{ width: "60rem" }}
      >
        <div>
          <label
            htmlFor="holidayFor"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            HolidayFor
          </label>
          <select name="holidayFor" id="holidayFor">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            htmlFor="holidayEventType"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Holiday OR Event Type
          </label>
          <select name="holidayEventType" id="holidayEventType">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="year">Select Year</label>
        <select name="calender" id="calender">
          <option value="" hidden>
            Select
          </option>
          {res.map((item, i) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
      
      </div>
    </div>
  );
};

export default CollgeCalender;
