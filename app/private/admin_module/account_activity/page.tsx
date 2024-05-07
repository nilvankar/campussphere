"use client";
import { months } from "@/app/data";
import React, { useState } from "react";

const AccountActivity = () => {
  const [activityFees, setactivityFees] = useState(true);
  const [donateFunds, setDonateFunds] = useState(false);
  const [exprenses, setExprenses] = useState(false);
  const [Salary, setSalary] = useState(false);
  const [walletHistory, setWalletHistory] = useState(false);
  return (
    <div>
      <button className="border-2 bg-blue-500 text-white hover:text-blue-300">
        Activity Fees
      </button>
      <button
        className="border-2 bg-blue-500 text-white hover:text-blue-300"
        onClick={() => {
          setactivityFees(false);
          setExprenses(false);
          setSalary(false);
          setWalletHistory(false);
          setDonateFunds(!donateFunds);
        }}
      >
        Donate Funds
      </button>
      <button
        className="border-2 bg-blue-500 text-white hover:text-blue-300"
        onClick={() => {
          setactivityFees(false);
          setExprenses(!exprenses);
          setSalary(false);
          setWalletHistory(false);
          setDonateFunds(false);
        }}
      >
        Expenses
      </button>
      <button
        className="border-2 bg-blue-500 text-white hover:text-blue-300"
        onClick={() => {
          setactivityFees(false);
          setExprenses(false);
          setSalary(!Salary);
          setWalletHistory(false);
          setDonateFunds(false);
        }}
      >
        Salary
      </button>
      <button
        className="border-2 bg-blue-500 text-white hover:text-blue-300"
        onClick={() => {
          setactivityFees(false);
          setExprenses(false);
          setSalary(false);
          setWalletHistory(!walletHistory);
          setDonateFunds(false);
        }}
      >
        Wallet History
      </button>
      <div className={activityFees ? "visible" : "hidden"}>
        <table className="border-2 table">
          <thead>
            <tr>
              <th className="border-2">Activity</th>
              <th className="border-2">Total Amount</th>
              <th className="border-2">Walved Amount</th>
              <th className="border-2">Paid Amount</th>
              <th className="border-2">Payment Status</th>
              <th className="border-2">Due Date</th>
              <th className="border-2">Pay Here</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={donateFunds ? "visible" : "hidden"}>
        <span>Available Donor Campaigns</span>
        <table className="table border-2">
          <thead>
            <tr>
              <th className="border-2">Sn.no</th>
              <th className="border-2">Donate Fees</th>
              <th className="border-2">Donate Reasons</th>
              <th className="border-2">Start Date</th>
              <th className="border-2">End Date</th>
              <th className="border-2">Min Amount</th>
              <th className="border-2">Max Amount</th>
            </tr>
          </thead>
        </table>
        <span>Donated History</span>
        <table className="table border-2">
          <thead>
            <tr>
              <th className="border-2">Sn.no</th>
              <th className="border-2">Donate Fees</th>
              <th className="border-2">Donate Reasons</th>
              <th className="border-2">Start Date</th>
              <th className="border-2">End Date</th>
              <th className="border-2">Min Amount</th>
              <th className="border-2">Max Amount</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={exprenses ? "visible" : "hidden"}>
        <div>
          <div>
            <label htmlFor="month">Month</label>
            <select name="month" id="month">
              <option value="" hidden></option>
              {months.map((month, i) => (
                <option value={month.label} key={i}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="expenseType">Expense Type</label>
            <select name="expenseType" id="expenseType">
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select name="status" id="status">
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
        </div>

        <table className="border-2 table">
          <thead>
            <tr>
              <th className="border-2">Expense Type</th>
              <th className="border-2">Tran Date</th>
              <th className="border-2">Tran Amount</th>
              <th className="border-2">Claim Date</th>
              <th className="border-2">Claim Response</th>
              <th className="border-2">Approved Amount</th>
              <th className="border-2">Documents</th>
              <th className="border-2">Status</th>
            </tr>
          </thead>
        </table>
        <div className="mt-96 ml-96">
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
      <div className={Salary?"visible":"hidden"}>
        <table className="table border-2">
          <thead>
            <tr>
              <th className="border-2">From Date</th>
              <th className="border-2">To Date</th>
              <th className="border-2">Notes</th>
              <th className="border-2">Attachments</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default AccountActivity;
