'use client'
import { userStatistics } from '@/app/data'
import React, { useState } from 'react'

const UserSummary = () => {
  const [userSummary, setUserSummary] = useState([])
  return (
    <div>
    <div className="flex flex-row justify-between">
      <div>
        <label className="block" htmlFor="branch">Branch</label>
        <select name="branch" id="branch">
          <option value="" hidden>
            Select
          </option>
        </select>
      </div>
      <div>
        <label className="block" htmlFor="role">Role</label>
        <select name="role" id="role">
          <option value="" hidden>
            Select
          </option>
        </select>
      </div>
      <div>
        <label className="block" htmlFor="degreecode">DegreeCode</label>
        <select name="degreecode" id="degreecode">
          <option value="" hidden>
            Select
          </option>
        </select>
      </div>
      <div>
        <label className="block" htmlFor="courseYear">CourseYear</label>
        <select name="courseYear" id="courseYear">
          <option value="" hidden>
            Select
          </option>
        </select>
      </div>
    </div>
    <table className="table mt-20 border-2">
      <thead className="table-header-group">
        {userStatistics.map((user, i) => (
          <tr
            key={i}
            className="table-cell text-lg font-semibold border-2 text-center"
          >
            {user.label}
          </tr>
        ))}
      </thead>
      <tbody>
        <tr className="table-cell text-lg font-semibold border-2 text-center"></tr>
      </tbody>
    </table>
  </div>
  )
}

export default UserSummary