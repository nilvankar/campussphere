'use client'
import { Vehical } from '@/app/data'
import React, { useState } from 'react'

const VehicalSummary = () => {
  const [vehicalSummary, setVehicalSummary] = useState([])
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
              <label className="block" htmlFor="vehicalName">Vehical Name</label>
              <select name="vehicalName" id="vehicalName">
                <option value="" hidden>
                  Select
                </option>
              </select>
            </div>
            <div>
              <label className="block" htmlFor="vehicalType">Vehical Type</label>
              <select name="vehicalType" id="vehicalType">
                <option value="" hidden>
                  Select
                </option>
              </select>
            </div>
          </div>
          <table className="table border-2">
            <thead className="table-header-group">
              {Vehical.map((vehicalname, i) => (
                <tr
                  key={i}
                  className="table-cell text-lg font-semibold border-2 text-center"
                >
                  {vehicalname.label}
                </tr>
              ))}
            </thead>
            <tbody></tbody>
          </table>
        </div>
  )
}

export default VehicalSummary