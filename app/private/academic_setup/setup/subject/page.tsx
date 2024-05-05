"use client";
import { PlusCircleFilled } from "@ant-design/icons";
import React, { ChangeEvent, useState } from "react";

const SubjectManagment = () => {
  const [isOpen, setisOpen] = useState(false);

  const intialState = {
    sno: 0,
    subjectName: "",
    subjectCode: "",
    electiveType: "",
    electiveName: "",
    subjectGroup: "",
  };
  const [subject, setSubject] = useState(intialState);
  const onsubmit = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };
  const onchange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubject((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <div className="flex flex-row justify-around w-96 ml-24">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="degreeCode"
          >
            DegreeCode
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="degreeCode"
            id="degreeCode"
          >
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
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="courseYear"
            id="courseYear"
          >
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subjectType"
          >
            SujectType
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="subjectType"
            id="subjectType"
          >
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
      </div>
      <button onClick={() => setisOpen(!isOpen)}>
        Add Subject
        <PlusCircleFilled />
      </button>
      <form
        action=""
        method="POST"
        className={`fixed z-10 inset-0 overflow-y-auto bg-blue-600 mt-56 grid grid-cols-2 h-96 gap-8 mx-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onSubmit={onsubmit}
      >
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="sno"
          >
            Sno
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onchange}
            type="number"
            name="sno"
            id="sno"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subjectName"
          >
            SubjectName
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onchange}
            type="text"
            name="subjectName"
            id="subjectName"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subjectCode"
          >
            SubjectCode
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onchange}
            type="text"
            name="subjectCode"
            id="subjectCode"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="electiveName"
          >
            Elective Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onchange}
            type="text"
            name="electiveName"
            id="electiveName"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="electiveType"
          >
            Elective Type
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="electiveType"
            id="electiveType"
          >
            <option value="" hidden>
              Select
            </option>
            <option value="Elective">Elective</option>
            <option value="Non-Elective">Non-Elective</option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subjectGroup"
          >
            SubjectGroup
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="subjectGroup"
            id="subjectCode"
          >
            <option value="" hidden>
              Select
            </option>
            <option value="Theory">Theory</option>
            <option value="Practicle">Practicle</option>
          </select>
        </div>
        <div>
          <input
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            onChange={onchange}
            type="submit"
            value="SAVE"
            onClick={() => alert("")}
          />
        </div>
      </form>
      <table className="table">
        <thead className="">
          <tr>
            <th className="border-2">Sno</th>
            <th className="border-2">Subject Name</th>
            <th className="border-2">Subject Code</th>
            <th className="border-2">ElectiveName</th>
            <th className="border-2">Elective Type</th>
            <th className="border-2">Subject Group</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2">1</td>
            <td className="border-2">Applied Physics</td>
            <td className="border-2">160450321046</td>
            <td className="border-2">Non-Elective Subject</td>
            <td className="border-2">
              <select name="electiveNametb" id="electiveNametb">
                <option value="" hidden>
                  Select
                </option>
                <option value="Elective">Elective</option>
                <option value="Non-Elective">Non-Elective</option>
              </select>
            </td>
            <td className="border-2">
              <select name="electiveTypetb" id="electiveTypetb">
                <option value="" hidden>
                  Select
                </option>
                <option value="Theory">Theory</option>
                <option value="Practicle">Practicle</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SubjectManagment;
