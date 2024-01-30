import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
export default function Header() {
  return (
    <div className=" w-screen h-1/6 sm:h-40w-screen">
      <div className="navbar-img" style={{ paddingBottom: "2px" }}>
        <nav
          className="relative flex items-center "
          style={{ height: "22vh", width: "100vw" }}
        >
          <Link to={"/"} className="p-8">
            <img
              src={logo}
              alt="Logo of Campus Sphere"
              style={{ width: "12vw", height: "18vh" }}
              className="object-cover "
            />
          </Link>

          <div
            className="navbar"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <ul>
              <li className="inline">
                <Link className="p-8" to="/">
                  Home
                </Link>
              </li>
              <li className="inline">
                <Link className="p-8" to="/about">
                  About Us
                </Link>
              </li>
              <li className="inline">
                <Link className="p-8" to="/products">
                  Products
                </Link>
              </li>
              <li className="inline">
                <Link className="p-8" to="/signup">
                  SignUp
                </Link>
              </li>
              <li className="inline">
                <Link className="p-8" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="inline">
                <Link className="p-8" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="inline">
                <Link className="p-8" to="/login">
                  Login
                </Link>
              </li>
              <li>
              <Link to={'/dashbord'} className="p-8 " >Dashbord</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
