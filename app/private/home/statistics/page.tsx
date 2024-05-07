"use client";
import { Domitory } from "@/app/data";
import useFetch from "@/app/hooks/useFetch";
import { userSummarySchemaType } from "@/app/lib/types/schema";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SatisticsPage = () => {
  const [dom, setDom] = useState(false);
  const data = useFetch("/api/home/statistics/user_summary");
  const [vehical_summary, setvehical_summary] = useState(false);
  const [user, setuser] = useState(true);
  const [visitors_summary, setVisitors_summary] = useState(false);
  const [toppers_summary, setToppers_summary] = useState(false);
  const [teaching_plan_summary, setTeaching_plan_summary] = useState(false);
  const router = useRouter();
  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <button
        className="border-2 rounded-lg bg-sky-500 text-white brightness-90 hover:brightness-100 mx-12"
        onClick={() => {
          setVisitors_summary(false);
          setuser(!user);
          setvehical_summary(false);
          setToppers_summary(false);
          setTeaching_plan_summary(false);
        }}
      >
        User Summary
      </button>
      <button
        className="border-2 rounded-lg bg-sky-500 text-white brightness-90 hover:brightness-100 mx-12"
        onClick={() => {}}
      >
        Vehical Summary
      </button>
      <button
        className="border-2 rounded-lg bg-sky-500 text-white brightness-90 hover:brightness-100 mx-12"
        onClick={() => {}}
      >
        Dimitory Summary
      </button>
      <button
        className="border-2 rounded-lg bg-sky-500 text-white brightness-90 hover:brightness-100 mx-12"
        onClick={() => {}}
      >
        Toppers Summary
      </button>
      <button
        className="border-2 rounded-lg bg-sky-500 text-white brightness-90 hover:brightness-100 mx-12"
        onClick={() => {}}
      >
        Visitors Summary
      </button>
      <button
        className="border-2 rounded-lg bg-sky-500 text-white brightness-90 hover:brightness-100 mx-12"
        onClick={() => {}}
      >
        Teaching Plan Summary
      </button>

      {/* domitory */}
      <div
        className={
          dom ? "flex flex-row justify-between w-96 mx-32 visible" : "hidden"
        }
      >
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
              <th className="border-2" key={i}>{dom.label}</th>
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
      {/* user summary */}
      <div
        className={
          user ? "visible flex flex-row justify-between w-96 mx-32" : "hidden"
        }
      >
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
                  <td key={i}>
                    {item.branchname}
                    {item.degreecode}
                    {item.courseyear}
                    {item.section}
                    {item.male_no}
                    {item.female_no}
                    {item.transportation}
                    {item.total_count}
                  </td>
                );
              })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SatisticsPage;
