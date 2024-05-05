"use client";
import { Vehical } from "@/app/data";
import React, { useState } from "react";

const VehicalSummary = () => {
  const [vehicalSummary, setVehicalSummary] = useState([]);
  return (
    <div>
      <div className="flex flex-row justify-between w-96 mx-32">
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
          <label className="block" htmlFor="vehicalName">
            Vehical Name
          </label>
          <select name="vehicalName" id="vehicalName">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label className="block" htmlFor="vehicalType">
            Vehical Type
          </label>
          <select name="vehicalType" id="vehicalType">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
      </div>
      <table className="table border-2">
        <thead>
          <tr>
            {Vehical.map((vehicalname, i) => (
              <th key={i} className="font-bold">
                {vehicalname.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">Tata</td>
            <td className="">Bus</td>
            <td className="">VS-12</td>
            <td className="">60</td>
            <td className="">45</td>
            <td className="">10</td>
            <td className="">4</td>
            <td className="">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VehicalSummary;
