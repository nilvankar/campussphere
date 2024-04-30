import React, { Suspense } from "react";
const Header = React.lazy(() => import("../components/Header"));
const MainModules = React.lazy(() => import("../components/MainModules"));

const Private = () => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <div className="grid grid-rows-2" style={{ gridTemplateRows: "6rem" }}>
        <div>
          <Header />
        </div>
        <div>
          <MainModules />
        </div>
      </div>
    </Suspense>
  );
};

export default Private;
