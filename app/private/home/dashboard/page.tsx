const ExcelData = React.lazy(() => import("@/app/components/ExcelData"));
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <ExcelData />
    </div>
  );
};

export default Dashboard;
