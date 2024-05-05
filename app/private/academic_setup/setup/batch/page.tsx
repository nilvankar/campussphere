"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircleFilled } from "@ant-design/icons";
const AcademicBatch = () => {
  const [isOpen, setisOpen] = useState(false);
  const [batch, setBatch] = useState({
    academicDegree: "",
    degree: "",
    degreeGroup: "",
    medium: "",
    frombatch: "",
    tobatch: "",
    managedDepartment: "",
  });
  const onchange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setBatch((prev) => ({ ...prev, [name]: value }));
  };
  const onsubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/academic_setup/batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(batch),
      });
      const resData = await res.json();
      if (res.ok) {
        alert("New Batch Created");
        console.log(`successfully batch created`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <span>Academic Batch</span>
      <button
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        <PlusCircleFilled />
      </button>
      <form
        onSubmit={onsubmit}
        action=""
        method="POST"
        className={`fixed z-10 inset-0 h-96 gap-8 justify-center mt-40 rounded-lg grid grid-cols-2 overflow-y-auto bg-blue-600 mx-40 ${
          isOpen ? "block" : "hidden"
        }`}
        style={{ width: "64rem", gridTemplateColumns: "25rem 25rem" }}
      >
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="academicDegree"
          >
            Academic Degree
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onchange}
            name="academicDegree"
            id="academicDegree"
          >
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="degree"
          >
            Degree
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onchange}
            name="degree"
            id="degree"
          >
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="degreeGroup"
          >
            Degree Group
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onchange}
            name="degreeGroup"
            id="degreeGroup"
          >
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="medium"
          >
            Medium
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onchange}
            name="medium"
            id="medium"
          >
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="frombatch"
          >
            From
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onchange}
            name="frombatch"
            id="frombatch"
          >
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tobatch"
          >
            To
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onchange}
            name="tobatch"
            id="tobatch"
          >
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="managedDepartment"
          >
            Managed By
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onchange}
            name="managedDepartment"
            id="managedDepartment"
          >
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <input type="submit" value="SAVE" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" />
        </div>
      </form>
      <table className="table border-2">
        <thead>
          <tr>
            <th className="border-2">Degree</th>
            <th className="border-2">Degree Group</th>
            <th className="border-2">Medium</th>
            <th className="border-2">DegreeCode</th>
            <th className="border-2">From Batch Year</th>
            <th className="border-2">To Batch Year</th>
            <th className="border-2">Current Academic Year</th>
            <th className="border-2">Current Course Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <td className="border-2">test</td>
            <td className="border-2">
              {" "}
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="degreeCode"
                id="degreeCode"
              >
                <option value="" hidden>
                  Select
                </option>
              </select>
            </td>
            <td className="border-2">English</td>
        
            <td className="border-2">2023</td>
            <td className="border-2">2024</td>
            <td className="border-2">2023-24</td>
            <td className="border-2">1st sem</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AcademicBatch;
