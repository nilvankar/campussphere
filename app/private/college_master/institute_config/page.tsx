"use client";

import React, { useState } from "react";

const InstituteConfiguration = () => {
  const [loadData, setloadData] = useState(true);
  const [idCard, setidCard] = useState(false);
  return (
    <div>
      <div className="inline-flex w-screen">
        <button
          className="border-2 rounded-lg bg-blue-500  text-white hover:bg-red-500 w-40"
          onClick={() => {
            setloadData(false);
            setidCard(!idCard);
          }}
        >
          Load Data
        </button>

        <button
          className="border-2 rounded-lg bg-blue-500  text-white hover:bg-red-500 w-40"
          onClick={() => {
            setloadData(false);
            setidCard(!idCard);
          }}
        >
          Id Card
        </button>
      </div>
      <div className={loadData ? "visible" : "hidden"}>
        <div>
          <label htmlFor="loadBuld">Load Bulk Data</label>
          <select name="loadBuld" id="loadBuld">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <table className="table border-2">
          <thead>
            <tr>
              <th>Processed Date</th>
              <th>Processed By</th>
              <th>Lead File Name</th>
              <th>Total Processed</th>
              <th>Successful Records</th>
              <th>Failed Records</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={idCard ? "visible grid grid-cols-2" : "hidden"}>
        <div className="border-2">
          <h2>Social Media Link</h2>
          <div>
            <label htmlFor="websiteUrl">WebSiteURL</label>
            <input type="text" name="websiteUrl" id="websiteUrl" />
          </div>
          <div>
            <label htmlFor="facebookLink">FaceBook Url</label>
            <input type="text" name="facebookLink" id="facebookLink" />
          </div>
          <div>
            <label htmlFor="linkedinLink">LinkedInLink</label>
          </div>
        </div>
        <div className="border-2"></div>
      </div>
    </div>
  );
};

export default InstituteConfiguration;
