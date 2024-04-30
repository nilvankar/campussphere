"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircleFilled } from "@ant-design/icons";
const AcademicBatch = () => {
  const [form, setForm] = useState(false);
  const [batch, setBatch] = useState({
    academicDegree: "",
    degree: "",
    degreeGroup: "",
    medium: "",
    frombatch: "",
    tobatch: "",
    managedDepartment: "",
  });
  const onchange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setBatch((prev) => ({ ...prev, [name]: value }));
  };
  const onsubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/academic_setup/batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(batch),
        
      });
      const resData=await res.json()
      if(res.ok){
        alert('New Batch Created')
        console.log(`successfully batch created`);
      }
      
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <span>Academic Batch</span>
      <button onClick={() => setForm(!form)}>
        {" "}
        <PlusCircleFilled />
      </button>
      <form
        onSubmit={onsubmit}
        action=""
        method="POST"
        className={
          form
            ? "visible flex justify-center border-2 w-96 mx-24 h-96"
            : "hidden"
        }
      >
        <div>
          <label htmlFor="academicDegree">Academic Degree</label>
          <select onChange={onchange} name="academicDegree" id="academicDegree">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="degree">Degree</label>
          <select onChange={onchange} name="degree" id="degree">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="degreeGroup">Degree Group</label>
          <select onChange={onchange} name="degreeGroup" id="degreeGroup">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="medium">Medium</label>
          <select onChange={onchange} name="medium" id="medium">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="frombatch">From</label>
          <select onChange={onchange} name="frombatch" id="frombatch">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="tobatch">To</label>
          <select onChange={onchange} name="tobatch" id="tobatch">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="managedDepartment">Managed By</label>
          <select
            onChange={onchange}
            name="managedDepartment"
            id="managedDepartment"
          >
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        <div>
          <input type="submit" value="SAVE" />
        </div>
      </form>
    </div>
  );
};

export default AcademicBatch;
