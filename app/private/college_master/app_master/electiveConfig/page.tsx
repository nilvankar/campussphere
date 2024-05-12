import React from "react";

const ElectiveConfig = () => {
  return (
    <div>
      <table className="table border-2">
        <thead>
          <tr>
            {" "}
            <th>Elective Name</th>
            <th>Code</th>
            <th>Any Deadline</th>
            <th>Deadline</th>
            <th>Commment</th>
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
  );
};

export default ElectiveConfig;
