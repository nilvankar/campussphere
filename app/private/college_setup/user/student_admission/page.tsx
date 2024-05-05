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
            <tbody></tbody>
          </table>
        </div>
      </div>
      <div
        className="border-2 grid grid-rows-3"
        style={{ gridTemplateRows: "30rem 7rem 7rem" }}
      >
        <form action="" className="border-2 grid grid-cols-3" method="POST">
          <div className="border-2">
            <div>
              <label htmlFor="firstName">FirstName</label>
              <input type="text" name="firstName" id="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" />
            </div>
            <div>
              <label htmlFor="middleName">MiddleName</label>
              <input type="text" name="middleName" id="middleName" />
            </div>
            <div>
              <label htmlFor="dob">DOB</label>
              <input type="date" name="dob" id="dob" />
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <select name="gender" id="gender">
                <option value="" hidden>
                  Select
                </option>
                <option value="Male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="maritalStatus">MaritalStatus</label>
              <select name="maritalStatus" id="maritalStatus">
                <option value="" hidden>
                  <option value="married">Married</option>
                  <option value="unMarried">UnMarried</option>
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="adharNo">AdharNo</label>
              <input type="number" name="adharNo" id="adharNo" />
            </div>
            <div>
              <label htmlFor="panNo">PanNo</label>
              <input type="number" name="panNo" id="panNo" accept="number" />
            </div>
          </div>
          <div className="border-2"></div>
          <div className="border-2"></div>
        </form>
        <div className="border-2">
          <span>
            Language Proefficiency
            <PlusCircleFilled className="hover:text-white" />
            <table className="table">
              <thead className="table-header-group">
                <tr className="table-cell">Language</tr>
                <tr className="table-cell">Listening</tr>
                <tr className="table-cell">Speaking</tr>
                <tr className="table-cell">Reading</tr>
                <tr className="table-cell">Writing</tr>
              </thead>
            </table>
          </span>
        </div>
        <div className="border-2">
          <span>
            Family Details
            <PlusCircleFilled className="hover:text-white" />
          </span>
          <table className="table">
            <thead className="table-header-group">
              <tr className="table-cell">Relation</tr>
              <tr className="table-cell">FirstName</tr>
              <tr className="table-cell">LastName</tr>
              <tr className="table-cell">MiddleName</tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="border-2">
        <input type="submit" value="SAVE" />
      </div>
    </div>
  );
};

export default StudentRegistration;
