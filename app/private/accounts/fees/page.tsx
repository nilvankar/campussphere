"use client";
import React, { useState } from "react";

const FeesPage = () => {
  const [feeType, setFeeType] = useState(true);
  const [feeStrcture, setFeeStrcture] = useState(false);
  const [feeDetails, setfeeDetails] = useState(false);
  const [feeRecivaties, setFeeRecivaties] = useState(false);
  const [walverType, setWalverType] = useState(false);
  const [feeTypeRadio, setFeeTypeRadio] = useState(true);
  const [specificFee, setspecificFee] = useState(false);
  const [feeAdjustment, setFeeAdjustment] = useState(false);
  const [productLednger, setProductLednger] = useState(false);
  const [scholarshipConfig, setscholarshipConfig] = useState(false);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setFeeType(true);
            setFeeStrcture(false);
            setfeeDetails(false);
            setFeeRecivaties(false);
            setspecificFee(false);
            setFeeAdjustment(false);
            setProductLednger(false);
            setscholarshipConfig(false);
          }}
          className="border-2 rounded-lg bg-blue-400 hover:bg-white text-white mx-4 w-40"
        >
          Fee Type
        </button>
        <button
          onClick={() => {
            setFeeType(false);
            setFeeStrcture(true);
            setfeeDetails(false);
            setFeeRecivaties(false);
            setspecificFee(false);
            setFeeAdjustment(false);
            setProductLednger(false);
            setscholarshipConfig(false);
          }}
          className="border-2 rounded-lg bg-blue-400 hover:bg-white text-white mx-4 w-40"
        >
          Fee Structure
        </button>
        <button
          onClick={() => {
            setFeeType(false);
            setFeeStrcture(false);
            setfeeDetails(true);
            setFeeRecivaties(false);
            setspecificFee(false);
            setFeeAdjustment(false);
            setProductLednger(false);
            setscholarshipConfig(false);
          }}
          className="border-2 rounded-lg bg-blue-400 hover:bg-white text-white mx-4 w-40"
        >
          Fee Details
        </button>
        <button
          onClick={() => {
            setFeeType(false);
            setFeeStrcture(false);
            setfeeDetails(false);
            setFeeRecivaties(true);
            setspecificFee(false);
            setFeeAdjustment(false);
            setProductLednger(false);
            setscholarshipConfig(false);
          }}
          className="border-2 rounded-lg bg-blue-400 hover:bg-white text-white mx-4 w-40"
        >
          Fee Recivaties
        </button>
        <button
          onClick={() => {
            setFeeType(false);
            setFeeStrcture(false);
            setfeeDetails(false);
            setFeeRecivaties(false);
            setspecificFee(true);
            setFeeAdjustment(false);
            setProductLednger(false);
            setscholarshipConfig(false);
          }}
          className="border-2 rounded-lg bg-blue-400 hover:bg-white text-white mx-4 w-40"
        >
          Special Fee Management
        </button>
        <button
          onClick={() => {
            setFeeType(false);
            setFeeStrcture(false);
            setfeeDetails(false);
            setFeeRecivaties(false);
            setspecificFee(false);
            setFeeAdjustment(true);
            setProductLednger(false);
            setscholarshipConfig(false);
          }}
          className="border-2 rounded-lg bg-blue-400 hover:bg-white text-white mx-4 w-40"
        >
          Fee Adjustment
        </button>
        <button
          onClick={() => {
            setFeeType(false);
            setFeeStrcture(false);
            setfeeDetails(false);
            setFeeRecivaties(false);
            setspecificFee(false);
            setFeeAdjustment(false);
            setProductLednger(true);
            setscholarshipConfig(false);
          }}
          className="border-2 rounded-lg bg-blue-400 hover:bg-white text-white mx-4 w-40"
        >
          Product Ledger
        </button>
        <button
          onClick={() => {
            setFeeType(false);
            setFeeStrcture(false);
            setfeeDetails(false);
            setFeeRecivaties(false);
            setspecificFee(false);
            setFeeAdjustment(false);
            setProductLednger(false);
            setscholarshipConfig(true);
          }}
          className="border-2 rounded-lg bg-blue-400 hover:bg-white text-white mx-4 w-40"
        >
          Scholarship Config
        </button>
      </div>
      <div className={feeType ? "visible" : "hidden"}>
        <div className="inline-flex">
          <div>
            <label className="mx-12" htmlFor="feeType">
              FeeType
            </label>
            <input
              onSelect={() => {
                setFeeTypeRadio(true);
                setWalverType(false);
              }}
              type="radio"
              name="feeType"
              id="feeType"
            />
          </div>
          <div>
            <label className="mx-12" htmlFor="walverType">
              Walver Type
            </label>
            <input
              type="radio"
              onSelect={() => {
                setFeeTypeRadio(true);
                setWalverType(false);
              }}
              name="walverType"
              id="walverType"
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <table className={feeTypeRadio ? "table border-2 w-80" : "hidden"}>
            <thead>
              <tr>
                <th className="border-2">Generic Fee Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2">Academic Fee</td>
              </tr>
              <tr>
                <td className="border-2">Activity Fee</td>
              </tr>
              <tr>
                <td className="border-2">Associative Fee</td>
              </tr>
              <tr>
                <td className="border-2">Book Fee</td>
              </tr>
              <tr>
                <td className="border-2">Computer Fee</td>
              </tr>
              <tr>
                <td className="border-2">Disaster Fee</td>
              </tr>
              <tr>
                <td className="border-2">Dorm Fee</td>
              </tr>
              <tr>
                <td className="border-2">Event Fee</td>
              </tr>
              <tr>
                <td className="border-2">Exam Fee</td>
              </tr>
              <tr>
                <td className="border-2">Cantein Fee</td>
              </tr>
              <tr>
                <td className="border-2">Library Fee</td>
              </tr>
              <tr>
                <td className="border-2">Library Fine</td>
              </tr>
            </tbody>
          </table>
          <div>
            <span>Add Special Fee Type</span>

            <table
              className={feeTypeRadio ? "visible table border-2" : "hidden"}
            >
              <thead>
                <tr>
                  <th>Special Fee Type</th>
                </tr>
              </thead>
            </table>
            <div className="">
              <input
                type="submit"
                value="SAVE"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              />
              <input
                type="reset"
                value="RESET"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              />
            </div>
          </div>
          <div className="">
            <input
              type="submit"
              value="SAVE"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            />
            <input
              type="reset"
              value="RESET"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default FeesPage;
