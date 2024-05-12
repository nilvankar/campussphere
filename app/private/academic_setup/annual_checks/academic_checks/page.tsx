"use client";
import { getYears } from "@/app/data";
import React, { useState } from "react";

const AcademicChecks = () => {
  const [icLocked, seticLocked] = useState(false);
  const res = getYears();
  return (
    <div className="grid grid-cols-2">
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
            <td>  <input type="checkbox" name="" id="" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AcademicChecks;
