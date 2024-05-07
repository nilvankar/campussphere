"use client";
import { PlusCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";
const AccountJournals = () => {
  const [accountform, setAccountform] = useState(false);
  const [bankAccount, setBankAccount] = useState(true);
  const [journalEntry, setJournalEntry] = useState(false);
  const [accountDetailsForm, setAccountDetailsForm] = useState(false);
  const [journalForm, setJournalForm] = useState(false);
  return (
    <div>
      <div className="inline-flex">
        <button
          className="border-2 rounded-lg mx-12 bg-blue-400 hover:bg-white text-white"
          onClick={() => {
            setBankAccount(!bankAccount);
            setJournalEntry(false);
          
          }}
        >
          Brank Account
        </button>
        <button
          className="border-2 rounded-lg mx-12 bg-blue-400 hover:bg-white text-white"
          onClick={() => {
            setBankAccount(false);
            setJournalEntry(!journalEntry);
          
          }}
        >
          Journal Entry
        </button>
        
      </div>
      <div
        className={bankAccount ? "grid grid-rows-2" : "hidden"}
        style={{ gridTemplateRows: "30rem 30rem" }}
      >
        <div>
          <span>
            Institute Account Details
            <PlusCircleFilled onClick={() => setAccountform(!accountform)} />
          </span>
          <table className="table border-2">
            <thead>
              <tr>
                <th className="border-2">Account Type</th>
                <th className="border-2">Bank Name</th>
                <th className="border-2">Account Holder Name</th>
                <th className="border-2">A/C Number</th>
                <th className="border-2">IFSC Code</th>
                <th className="border-2">Merchant Key</th>
                <th className="border-2">Salt Key</th>
                <th className="border-2">Bank Branch Address</th>
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
          <form
            action=""
            className={
              accountform ? "visible border-2 rounded-lg ml-40 w-96" : "hidden"
            }
            style={{ marginLeft: "60rem" }}
            method="POST"
          >
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="accTpe"
              >
                Account Type
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="accTpe"
                id="accTpe"
              >
                <option value="" hidden>
                  Select
                </option>
                <option value="savings">Savings Account</option>
                <option value="curr">Current Account</option>
                <option value="recurringDepost">
                  Recurring deposit Account
                </option>
                <option value="nri">NRI Account</option>
              </select>
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bankName"
              >
                Bank Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="bankName"
                id="bankName"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="accHolder"
              >
                Account Holder
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="accHolder"
                id="accHolder"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="accNo"
              >
                Account No
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="accNo"
                id="accNo"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="IFSC"
              >
                IFSC CODE
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="IFSC"
                id="IFSC"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="merchantKey"
              >
                Merchant Key
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="merchantKey"
                id="merchantKey"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="saltKey"
              >
                Salt Key
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="saltKey"
                id="saltKey"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bankBranchAddress"
              >
                Bank Branch Address
              </label>
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
          </form>
        </div>
        <div>
          <span>
            SMS Account Details
            <PlusCircleFilled onClick={() => setAccountDetailsForm(true)} />
          </span>
          <table className="border-2 table">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Password</th>
                <th>Url Mark</th>
                <th>Reponse</th>
                <th>Available SMS Count</th>
                <th>SMS Provide</th>
                <th>isOpted</th>
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
      </div>

      {/* journal Entry */}
      <div className={journalEntry ? "visible grid grid-rows-2" : "hidden"}>
        <div className="flex flex-row justify-around">
          <div>
            <label htmlFor="fromDate">From Date</label>
            <input type="date" name="fromDate" id="fromDate" />
          </div>

          <div>
            <label htmlFor="toDate">To Date</label>
            <input type="date" name="toDate" id="toDate" />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="accTpe"
            >
              Account Type
            </label>
            <select
              className=""
              name="accTpe"
              id="accTpe"
            >
              <option value="" hidden>
                Select
              </option>
              <option value="savings">Savings Account</option>
              <option value="curr">Current Account</option>
              <option value="recurringDepost">Recurring deposit Account</option>
              <option value="nri">NRI Account</option>
            </select>
          </div>
          <div>
            <label htmlFor="fromTransaction">From Tansaction Account</label>
            <select name="fromTransaction" id="fromTransaction">
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="toTransaction">To Tansaction Account</label>
            <select name="toTransaction" id="toTransaction">
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="debitCredit">Debit/Credit</label>
            <select name="debitCredit" id="debitCredit">
              <option value="" hidden></option>
            </select>
          </div>
        </div>
        <div>
          <span>
            Journal Entry (INR)
            <PlusCircleFilled onClick={() => setJournalForm(!journalForm)} />
          </span>
          <table className="table border-2">
            <thead>
              <tr>
                <th>Transaction Date</th>
                <th>From Transaction </th>
                <th>To Transaction </th>
                <th>Transaction Amount</th>
                <th>Narration</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
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
          <form
            action=""
            className={
              journalForm ? "visible border-2 rounded-lg ml-40 w-96" : "hidden"
            }
            method="POST"
            style={{ marginLeft: "60rem" }}
          >
            <div>
              <label htmlFor="transactionDate">Transaction Date</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                name="transactionDate"
                id="transactionDate"
              />
            </div>
            <div>
              <label htmlFor="fromTransaction">From Tansaction Account</label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="fromTransaction"
                id="fromTransaction"
              >
                <option value="" hidden>
                  Select
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="toTransaction">To Tansaction Account</label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="toTransaction"
                id="toTransaction"
              >
                <option value="" hidden>
                  Select
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="amount">Amount</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="amount"
                id="amount"
              />
            </div>
            <div>
              <label htmlFor="narration">Narration</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="narration"
                id="narration"
              />
            </div>
            <div>
              <label htmlFor="invoices">Invoices</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="invoices"
                id="invoices"
              />
            </div>
            <div>
              <input
                type="submit"
                value="SEND"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountJournals;
