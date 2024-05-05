"use client";
import { userStatistics } from "@/app/data";
import useFetch from "@/app/hooks/useFetch";
import { userSummarySchemaType } from "@/app/lib/types/schema";
import React, { useState } from "react";

const UserSummary = () => {
  const [userSummary, setUserSummary] = useState([]);
  const data = useFetch("/api/home/statistics/user_summary");
  console.log(data);

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
          <label className="block" htmlFor="role">
            Role
          </label>
          <select name="role" id="role">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label className="block" htmlFor="degreecode">
            DegreeCode
          </label>
          <select name="degreecode" id="degreecode">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label className="block" htmlFor="courseYear">
            CourseYear
          </label>
          <select name="courseYear" id="courseYear">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr className="border-2">
            <th className="border-2">BranchName</th>
            <th className="border-2">DegreeCode</th>
            <th className="border-2">Section</th>
            <th className="border-2">Female</th>
            <th className="border-2">Transporation</th>
            <th className="border-2">Dom</th>
            <th className="border-2">Total Count</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-2">
            {data &&
              data.map((item: userSummarySchemaType, i: number) => {
                return (
                  <>
                    <td key={i}>{item.branchname}</td>
                    <td key={i}>{item.degreecode}</td>
                    <td key={i}>{item.courseyear}</td>
                    <td key={i}>{item.section}</td>
                    <td key={i}>{item.male_no}</td>
                    <td key={i}>{item.female_no}</td>
                    <td key={i}>{item.transportation}</td>
                    <td key={i}>{item.total_count}</td>
                  </>
                );
              })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserSummary;
