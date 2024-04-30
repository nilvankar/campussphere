import React from "react";
import Link from "next/link";
import {
  YoutubeOutlined,
  FacebookFilled,
  InstagramFilled,
  TwitterOutlined,
  LinkedinFilled,
  CopyrightCircleOutlined,
} from "@ant-design/icons";
const Footer = () => {
  const nowYear = new Date().getFullYear();

  return (
    <div
      className="w-screen border-2 bg-gradient-to-r text-white  from-blue-700/100 to-blue-600/95 h-80 grid grid-cols-4"
      style={{ gridTemplateColumns: "" }}
    >
      <div>
        <h6>Products</h6>
        <nav>
          <ul>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                School Management System
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                College Management System
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                University Management System
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                Coaching Management System
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h6>Userful Links</h6>
        <nav>
          <ul>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                Site Map
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                About Us
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                Terms of Services
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                clients
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                carrer
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h6>Help</h6>
        <nav>
          <ul>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                Contact Us
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                Demo Video
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                Blogs
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                Partners
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="decoration-transparent text-white brightness-100 hover:brightness-75"
                href="/"
              >
                Affiliation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h6>Connect with us</h6>
        <nav>
          <ul>
            <li className="list-none">
              <Link
                className="brightness-100 hover:brightness-75 text-white decoration-transparent"
                href="/"
              >
                {" "}
                <FacebookFilled />
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="brightness-100 hover:brightness-75 text-white decoration-transparent"
                href="/"
              >
                {" "}
                <InstagramFilled />
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="brightness-100 hover:brightness-75 text-white decoration-transparent"
                href="/"
              >
                {" "}
                <YoutubeOutlined />
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="brightness-100 hover:brightness-75 text-white decoration-transparent"
                href="/"
              >
                {" "}
                <TwitterOutlined />
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="brightness-100 hover:brightness-75 text-white decoration-transparent"
                href="/"
              >
                {" "}
                <LinkedinFilled />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="text-white text-justify">
        Copyright&
        <CopyrightCircleOutlined />
        {nowYear}All Rights Reserved|Developed By{" "}
      </p>
    </div>
  );
};

export default Footer;
