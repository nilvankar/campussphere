'use client'
import { Domitory } from '@/app/data'
import React, { useState } from 'react'

const DomitorySummary = () => {
  const [domSummary, setDomSummary] = useState([])
  return (
    <div>
    <div className="flex flex-row justify-around">
      {" "}
      <div>
        <label className="block" htmlFor="branch">Branch</label>
        <select name="branch" id="branch">
          <option value="" hidden>
            Select
          </option>
        </select>
      </div>
      <div>
        <label className="block" htmlFor="buildingName">Bulding Name</label>
        <select name="buildingName" id="buildingName"></select>
        <option value="" hidden>
          Select
        </option>
      </div>
      <div>
        <label className="block" htmlFor="domitoryType">Domitory Type</label>
        <select name="domitoryType" id="domitoryType">
          <option value="" hidden>
            Select
          </option>
        </select>
      </div>
      <div>
        <label className="block" htmlFor="fllorNo">Floor No</label>
        <select name="fllorNo" id="fllorNo">
          <option value="" hidden>
            Select
          </option>
        </select>
      </div>
    </div>
    <table className="table border-2">
      <thead className="table-header-group">
        {Domitory.map((dom, i) => (
          <tr
            key={i}
            className="table-cell text-lg font-semibold border-2 text-center"
          >
            {dom.label}
          </tr>
        ))}
      </thead>
    </table>
  </div>
  )
}

export default DomitorySummary