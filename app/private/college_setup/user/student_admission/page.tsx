import { PlusCircleFilled } from "@ant-design/icons";
import React from "react";

const StudentRegistration = () => {
  return (
    <div
      className="grid grid-cols-3 h-screen"
      style={{ gridTemplateColumns: "16rem 56rem 24rem" }}
    >
      <div
        className="grid grid-rows-2 border-2"
        style={{ gridTemplateRows: "8rem 37rem" }}
      >
        <div className="border-2 grid grid-cols-2">
          <div>
            <div>
              <label className="block" htmlFor="academicYear">
                Academic Year
              </label>
              <select
                className="border-2"
                name="academicYear"
                id="academicYear"
              >
                <option value="" hidden>
                  Select
                </option>
              </select>
            </div>
            <div>
              <label className="block" htmlFor="degreeCode">
                DegreeCode
              </label>
              <select className="border-2" name="degreeCode" id="degreeCode">
                <option value="" hidden>
                  Select
                </option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label className="block" htmlFor="courseYear">
                CourseYear
              </label>
              <select className="border-2" name="courseYear" id="courseYear">
                <option value="" hidden>
                  Select
                </option>
              </select>
            </div>
            <div>
              <label className="block" htmlFor="appType">
                Application Type
              </label>
              <select className="border-2" name="appType" id="appType">
                <option value="" hidden>
                  Select
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="border-2 overflow-y-scroll">
          <span>
            Add User
            <PlusCircleFilled className="hover:text-white" />
          </span>
          <table className="table border-2">
            <thead className="table-header-group">
              <tr className="table-cell border-2 text-center">Student Name</tr>
              <tr className="table-cell border-2 text-center">CourseYear</tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
      <div className="border-2 grid grid-rows-3" style={{gridTemplateRows:"30rem 7rem 7rem"}}>
        <form action=""  className="border-2 grid grid-cols-3" method="POST">
          <div className="border-2"></div>
          <div className="border-2"></div>
          <div className="border-2"></div>
        </form>
        <div className="border-2">
          <span>Language Proefficiency<PlusCircleFilled className="hover:text-white"/></span>
        </div>
        <div className="border-2"></div>
          <span>Family Details<PlusCircleFilled className="hover:text-white"/></span>
      </div>
      <div className="border-2"></div>
    </div>
  );
};

export default StudentRegistration;
