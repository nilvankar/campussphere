"use client";
import React, { useState } from "react";
import {
  SettingOutlined,
  BookOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
const LibraryPage = () => {
  const [config, setConfig] = useState(true);
  const [ConfigForm, setConfigForm] = useState(false);
  const [inventory, setInventory] = useState(false);
  const [inventoryForm, setInventoryForm] = useState(false);
  return (
    <div>
      <div className="inline-flex">
        <hr />
        <button
          onClick={() => {
            setConfig(true);
            setInventory(false);
          }}
          className="text-6xl mx-24 12 mt-32 hover:text-gray-500"
        >
          Config
        </button>

        <hr />
        <button
          onClick={() => {
            setConfig(false);
            setInventory(true);
          }}
          className="text-6xl mx-24 12 mt-32 hover:text-gray-500"
        >
          Inventory
        </button>
        <hr />
      </div>

      <div className={config ? "visible" : "hidden"}>
        <div>
          <div>
            <label className="block" htmlFor="userRole">
              User Role
            </label>
            <select className="rounded-lg w-80 border-2" name="role" id="role">
              <option value="" hidden>
                Select
              </option>
              <option value="director">Director</option>
              <option value="principal">Principal</option>
              <option value="staffFaculty">Staff or Faculty</option>
              <option value="studentParent">Student or Parent</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block" htmlFor="materialType">
              Material Type
            </label>
            <select
              className="rounded-lg w-80 border-2"
              name="materialType"
              id="materialType"
            >
              <option value="" hidden>
                Select
              </option>
              <option value="book">Book</option>
              <option value="newspape">NewsPaper</option>
              <option value="magzine">Magzine</option>
            </select>
          </div>
        </div>
        <button onClick={() => setConfigForm(!ConfigForm)}>
          Library Material Allowances
          <PlusCircleOutlined />
        </button>
        <table className="table border-2">
          <thead>
            <tr>
              <th className="border-2">User Role</th>
              <th className="border-2">Material Type</th>
              <th className="border-2">Maximum Allowed</th>
              <th className="border-2">Maximum Days Allowed</th>
              <th className="border-2">Fees Per Day</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        <form
          action=""
          method="POST"
          className={`fixed z-10 inset-0 overflow-y-auto bg-blue-600 my-4 rounded-lg grid grid-cols-2  gap-8  ${
            ConfigForm ? "block" : "hidden"
          }`}
          style={{ marginLeft: "50rem", height: "30rem" }}
        >
          <div>
            <label htmlFor="userRole">User Role</label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="userRole"
              id="userRole"
            >
              <option value="" hidden>
                Select
              </option>
              <option value="Staff or Faculty">Staff or Faculty</option>
              <option value="Student or Parent">Student or Parent</option>
              <option value="Director">Director</option>
              <option value="Principal">Principal</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="materialType">MaterialType</label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="materialType"
              id="materialType"
            >
              <option value="" hidden>
                Select
              </option>
              <option value="book">Book</option>
              <option value="newspape">NewsPaper</option>
              <option value="magzine">Magzine</option>
            </select>
          </div>
          <div>
            <label htmlFor="maxAllowed">Maximum Allowed</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="maxAllowed"
              id="maxAllowed"
            />
          </div>
          <div>
            <label htmlFor="maxDayAllow">Maximum Day Allow</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="maxDayAllow"
              id="maxDayAllow"
            />
          </div>
          <div>
            <label htmlFor="feePerDay">Fees Per Day</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="feePerDay"
              id="feePerDay"
            />
          </div>
          <div>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="submit"
              value="SEND"
            />
          </div>
        </form>
      </div>
      <div className={inventory ? "block" : "hidden"}>
        <div className="inline-flex flex-row justify-around">
          <div>
            <label className="block" htmlFor="lang">
              Language
            </label>
            <select
              className="rounded-lg w-80 border-2"
              name="Language"
              id="Language"
            >
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
          <div>
            <label className="block" htmlFor="materialType">
              MaterialType
            </label>
            <select
              className="rounded-lg w-80 border-2"
              name="materialType"
              id="materialType"
            >
              <option value="" hidden>
                Select
              </option>
              <option value="book">Book</option>
              <option value="newspape">NewsPaper</option>
              <option value="magzine">Magzine</option>
            </select>
          </div>
          <div>
            <label className="block" htmlFor="publisher">
              Publisher
            </label>
            <select
              className="rounded-lg w-80 border-2"
              name="publisher"
              id="publisher"
            >
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
          <div>
            <label className="block" htmlFor="author">
              Author
            </label>
            <select
              className="rounded-lg w-80 border-2"
              name="author"
              id="author"
            >
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
        </div>
        <div>
          <span>
            Add Inventory Details
            <PlusCircleOutlined onClick={() => setInventoryForm(true)} />
          </span>
          <table className="border-2 table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Language</th>
                <th>Publisher</th>
                <th>Material Type</th>
                <th>ISBN</th>
                <th>Available Quantity</th>
                <th>Book Price</th>
                <th>Total Quantity</th>
              </tr>
            </thead>
          </table>

          <form
            action=""
            className={
              inventoryForm
                ? "visible border-2 rounded-lg ml-40 w-96"
                : "hidden"
            }
            style={{ marginLeft: "60rem" }}
          >
            <div>
              <label htmlFor="title">Title</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="title"
                id="title"
              />
            </div>
            <div>
              <label htmlFor="lang" className="block">
                Language
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="lang"
                id="lang"
              >
                <option value="" hidden></option>
              </select>
            </div>
            <div>
              <label htmlFor="publisher">Publisher</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="publisher"
                id="publisher"
              />
            </div>
            <div>
              <label htmlFor="ISBN">ISBN</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="ISBN"
                id="ISBN"
              />
            </div>
            <div>
              <label htmlFor="availableQuantity">Available Qunatity</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="availableQuantity"
                id="availableQuantity"
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name=""
                id=""
              />
            </div>
            <div>
              <label htmlFor="totalQuantity">Total Quantity</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="totalQuantity"
                id="totalQuantity"
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

export default LibraryPage;
