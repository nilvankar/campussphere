import React, { Suspense } from "react";
import MainHeader from "./components/MainHeader";
const Private = React.lazy(() => import("./private/page"));
const Footer = React.lazy(() => import("./components/Footer"));
const Carousel = React.lazy(() => import("./components/Carousel"));
const Page = async () => {
  
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Private />
    </Suspense>
  );
};

export default Page;
