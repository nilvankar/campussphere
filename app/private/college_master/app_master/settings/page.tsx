"use client";
import React, { ChangeEvent, useState } from "react";

const MasterSettings = () => {
  const [appDoc, setAppDoc] = useState(true);
  const [assVisible, setAssVisible] = useState(false);
  const [digitalDiary, setdigitalDiary] = useState(false);
  const handleMasterConfigChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (value === "appDoc") {
      setAppDoc(true);
      setAssVisible(false); // Ensure the other table is hidden
    } else if (value === "assType") {
      setAppDoc(false);
      setAssVisible(true);
    } else if (value === "digitalDiary") {
      setAppDoc(false);
      setAssVisible(false);
      setdigitalDiary(true);
    }
  };

  return (
    <div className="grid grid-cols-2">
      <div>
        <select
          name="masterConfig"
          id="masterConfig"
          onChange={handleMasterConfigChange}
        >
          <option value="appDoc">Application Document Type</option>
          <option value="assType">Assignment Type</option>
          <option value="digitalDiary">Digital Diary Setting</option>
        </select>
      </div>
      <div className={appDoc ? "visible" : "hidden"}>
        <table className="table border-2">
          <thead>
            <tr>
              <th className="border-2">Document Type</th>
              <th className="border-2">Action</th>
              <th className="border-2">Sno</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2">1</td>
              <td className="border-2">Word</td>
              <td className="border-2">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={assVisible ? "visible" : "hidden"}>
        <table className="table border-2">
          <thead>
            <tr>
              <th className="border-2">Sno</th>
              <th className="border-2">Assignment Type</th>
              <th className="border-2">Action</th>
            </tr>
          </thead>
          <tbody>{/* Add rows for Assignment Type */}</tbody>
        </table>
      </div>
      <div className={digitalDiary ? "visible" : "hidden"}>
        <table className="border-2 table">
          <thead>
            <tr>
              <th>DegreeCode</th>
              <th>Is Digital Diary</th>
              <th>Absent Notifications</th>
            </tr>
            <tr>
                <th></th>
                <th>Enable</th>
                <th>Email Time</th>
                <th>Enable</th>
                <th>SMS TIME</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default MasterSettings;
