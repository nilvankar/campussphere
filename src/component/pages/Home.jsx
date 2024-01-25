import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <div className="home" style={{ height: "140vh", width: "100vw" }}>
      <Header />
      <div className="main "></div>
      <Footer />
    </div>
  );
}
