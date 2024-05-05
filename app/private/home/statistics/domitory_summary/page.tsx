import { Domitory } from "@/app/data";
import React, { useState } from "react";

const DomitorySummary = () => {
  return (
    <div>
      <div className="flex flex-row justify-between w-96 mx-32">
        {" "}
        <div>
          <label className="block" htmlFor="branch">
            Branch
          </label>
          <select name="branch" id="branch">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label className="block" htmlFor="buildingName">
            Bulding Name
          </label>
          <select name="buildingName" id="buildingName"></select>
          <option value="" hidden>
            Select
          </option>
        </div>
        <div>
          <label className="block" htmlFor="domitoryType">
            Domitory Type
          </label>
          <select name="domitoryType" id="domitoryType">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label className="block" htmlFor="fllorNo">
            Floor No
          </label>
          <select name="fllorNo" id="fllorNo">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
      </div>
      <table className="table border-2">
        <thead>
          <tr className="">
            {Domitory.map((dom, i) => (
              <th key={i} className="border-2">
                {dom.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2">b-1</td>

            <td className="border-2">Boys</td>

            <td className="border-2">14542</td>

            <td className="border-2">Anant Ambani</td>

            <td className="border-2">B.Tech.CSE(2021-22)</td>

            <td className="border-2">3rd year 4th sem </td>

            <td className="border-2">1</td>

            <td className="border-2">3</td>

            <td className="border-2">AC</td>

            <td className="border-2">101</td>

            <td className="border-2">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DomitorySummary;
