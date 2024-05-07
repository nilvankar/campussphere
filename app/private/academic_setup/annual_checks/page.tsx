"use client";
import { getYears } from "@/app/data";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const AnnualChecks = () => {
  const [finalmark, setFinalmark] = useState(true);
  const [academicChecks, setAcademicChecks] = useState(false);
  const [studentPromotion, setstudentPromotion] = useState(false);
  const router = useRouter();
  const [icLocked, seticLocked] = useState(false);
  const res = getYears();
  return (
    <div>
      <div className="inline-flex mx-32">
        <button
          className="border-2 rounded-lg bg-blue-500 text-white hover:text-blue-500 shadow-md brightness-90 hover:brightness-100"
          onClick={() => {
            setFinalmark(true);
            setstudentPromotion(false);
            setAcademicChecks(false);
          }}
        >
          Final Marks
        </button>
        <button
          className="border-2 rounded-lg bg-blue-500 text-white hover:text-blue-500"
          onClick={() => {
            setFinalmark(false);
            setstudentPromotion(false);
            setAcademicChecks(true);
          }}
        >
          Academics Checks
        </button>
        <button
          className="border-2 rounded-lg bg-blue-500 text-white hover:text-blue-500"
          onClick={() => {
            setFinalmark(false);
            setstudentPromotion(true);
            setAcademicChecks(false);
          }}
        >
          Student Promotion
        </button>
      </div>
      {/* screens */}
      {/* marks */}
      <div className={finalmark ? "visible mt-20" : "hidden"}>
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

      {/* academic checks */}
      <div
        className={
          academicChecks ? "visible mt-20 grid gap-4 grid-cols-2" : "hidden"
        }
      >
        <div>
          <div>
            <label htmlFor="academicYear">Academic Year</label>
            <select name="academicYear" id="academicYear">
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
          <h4>Academic Check</h4>
          <table className="table border-2">
            <thead>
              <tr>
                {" "}
                <th className="border-2">S.No</th>
                <th className="border-2">setup</th>
                <th className="border-2">Action</th>
                <th className="border-2">Is Setup</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2">1</td>
                <td className="border-2">Campus Calendar</td>
                <td className="border-2">
                  <select name="" id="">
                    <option value="" hidden>
                      Select
                    </option>
                    <option value="completed">Completed</option>
                    <option value="notCompleted">Not Completed</option>
                  </select>
                </td>
                <td className="border-2">
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
              <tr>
                <td className="border-2">2</td>
                <td className="border-2">Subjects</td>
                <td className="border-2">
                  <select name="" id="">
                    <option value="" hidden>
                      Select
                    </option>
                    <option value="completed">Completed</option>
                    <option value="notCompleted">Not Completed</option>
                  </select>
                </td>
                <td className="border-2">
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
              <tr>
                <td className="border-2">3</td>
                <td className="border-2">Syllabus</td>
                <td className="border-2">
                  <select name="" id="">
                    <option value="" hidden>
                      Select
                    </option>
                    <option value="completed">Completed</option>
                    <option value="notCompleted">Not Completed</option>
                  </select>
                </td>
                <td className="border-2">
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
              <tr>
                <td className="border-2">4</td>
                <td className="border-2">OOT ONA (optional)</td>
                <td className="border-2">
                  <select name="" id="">
                    <option value="" hidden>
                      Select
                    </option>
                    <option value="completed">Completed</option>
                    <option value="notCompleted">Not Completed</option>
                  </select>
                </td>
                <td className="border-2">
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
              <tr>
                <td className="border-2">5</td>
                <td className="border-2">Curriculam Grade</td>
                <td className="border-2">
                  <select name="" id="">
                    <option value="" hidden>
                      Select
                    </option>
                    <option value="completed">Completed</option>
                    <option value="notCompleted">Not Completed</option>
                  </select>
                </td>
                <td className="border-2">
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
              <tr>
                <td className="border-2">6</td>
                <td className="border-2">Academic Year</td>
                <td className="border-2">
                  <select name="" id="">
                    <option value="" hidden>
                      Select
                    </option>
                    <option value="completed">Completed</option>
                    <option value="notCompleted">Not Completed</option>
                  </select>
                </td>
                <td className="border-2">
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
              <tr>
                <td className="border-2">7</td>
                <td className="border-2">Student Promotion</td>
                <td className="border-2">
                  <select name="" id="">
                    <option value="" hidden>
                      Select
                    </option>
                    <option value="completed">Completed</option>
                    <option value="notCompleted">Not Completed</option>
                  </select>
                </td>
                <td className="border-2">
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <span>Year Ending Degree Promotion</span>
          <table className="table border-2">
            <thead>
              <tr>
                <th className="border-2">S.No</th>
                <th className="border-2">DegreeCode</th>
                <th className="border-2">Action</th>
                <th className="border-2">IsPromoted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2">1</td>
                <td className="border-2">B.Tech.CSE(2021-22)</td>
                <td className="border-2">
                  <select name="" id="">
                    <option value="" hidden>
                      Select
                    </option>
                    <option value="promoted">Promoted</option>
                    <option value="notPromoted">Not Promoted</option>
                  </select>
                </td>
                <td>
                  {" "}
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* student promotion */}
      <div
        className={
          studentPromotion ? "visible mt-20 grid grid-cols-3" : "hidden"
        }
      >
        <div className="grid grid-rows-2 ml-4" style={{ width: "28rem" }}>
          <div className="block">
            <div className="inline-flex ">
              <div className="mx-12">
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
              <div className="mx-12">
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
              <div className="mx-12">
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
            <table className="table border-2 overflow-y-scroll">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>CourseYear</th>
                  <th>Section</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Neel Vankar</td>
                  <td>4th sem B.Tech.CSE</td>
                  <td>CSE 2</td>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="ml-24">
          <ArrowLeftOutlined className="rounded-full mx-12 text-lg font-extrabold bg-black text-white" />
          <ArrowRightOutlined className="rounded-full mx-12 text-lg font-extrabold bg-black text-white" />
          <div>
            <label htmlFor="movSection">Move To Section</label>
            <select name="movSection" id="movSection">
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
          <div className="mt-12">
            <input
              type="submit"
              value="SAVE"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            />
            
          </div>
        </div>
        <div className="ml-8 grid grid-rows-2">
        <div className="flex flex-row justify-around ">
        <div className="">
          <label htmlFor="degreeCode">DegreeCode</label>
          <select name="degreeCode" id="degreeCode">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="courseYear">CourseYear</label>
          <select name="courseYear" id="courseYear">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="section">Section</label>
          <select name="section" id="section"><option value="" hidden>Select</option></select>
        </div>
        </div>
        <div>
          <table className="table border-2">
            <thead>
              <tr>
                <th>Academic Year</th>
                <th>StudentName</th>
                <th>CourseYear</th>
                <th>Section</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2021-22</td>
                <td>Student Name</td>
                <td>3rd year 4thsem</td>
                <td>3</td>
                <td><input type="checkbox" name="" id="" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AnnualChecks;
