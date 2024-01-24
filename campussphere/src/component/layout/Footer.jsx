import React from "react";
import logo from "../../assets/images/logo.png";
import {
  YoutubeFilled,
  TwitterCircleFilled,
  InstagramOutlined,
  LinkedinFilled,
  FacebookFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer h-2/5 w-full border-2 border-red-400 inline-block bg-gray-400/100">
      <div className="papa flex justify-between mx-4 my-1">
        <div className="footer-logo  h-56 w-40">
          <img
            src={logo}
            alt=""
            className=""
            style={{ borderRadius: "100px" }}
          />
        </div>
        <div className="container">
          <nav className="child-container">
            <ul>
              <li className="inline-block px-14 py-5">
                <u> Quick Links</u>
                <div className="sub-link">
                  <nav>
                    <ul>
                      <li>Modle</li>
                      <li>Library</li>
                      <li>Email</li>
                      <li>Pay My Bills</li>
                      <li>Employment</li>
                      <li>Feedback</li>
                    </ul>
                  </nav>
                </div>
              </li>
              <li className="inline-block px-14 py-5">
                <u>Top Courses</u>
                <div className="sub-link">
                <nav><ul><li>modle</li></ul></nav>
                <nav><ul><li>modle</li></ul></nav>
                <nav><ul><li>modle</li></ul></nav>
                <nav><ul><li>modle</li></ul></nav>
                <nav><ul><li>modle</li></ul></nav>
                <nav><ul><li>modle</li></ul></nav>
                </div>
              </li>
              <li className="inline-block px-14 py-5">
                <u>About Baker</u>
                <div className="sub-link">
                <nav><ul><li>modle</li></ul></nav>
                <nav><ul><li>modle</li></ul></nav>
                <nav><ul><li>modle</li></ul></nav>
                <nav><ul><li>modle</li></ul></nav>
                <nav><ul><li>modle</li></ul></nav>
                <nav><ul><li>modle</li></ul></nav>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="icons inline-grid grid-cols-5 w-28 h-16 m-4 float-right">
        <div className="" style={{ padding: "2px" }}>
        <YoutubeFilled />
        </div>
        <div className="" style={{ padding: "2px" }}>
        <TwitterCircleFilled />
        </div>
        <div className="" style={{ padding: "2px" }}>
        <InstagramOutlined />
        </div>
        <div className="" style={{ padding: "2px" }}>
        <FacebookFilled />
        </div>
        <div className="" style={{ padding: "2px" }}>
        <LinkedinFilled />
        </div>
        </div>
        </div>
        <div
        className="bg-black/50 flex justify-center mt-16"
        style={{ color: "white" }}
        >
        <div className="bg-black/25 text-white"><Link to={'/'}>Disclaimer</Link></div>
        <h2>
          &#169; 2023 Copyright <Link to={"/"}> campussphere.org</Link>
        </h2>

        <Link to={"/"} style={{ float: "right" }}>
          Terms
        </Link>
        <Link to={"/"} state={{ float: "right" }}>
          Privacy
        </Link>
      </div>
    </div>
  );
}
