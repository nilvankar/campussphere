import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {} from './Login.jsx'
export default function Contact() {
  const initial = {
    email: " ",
    password: " ",
    firstName: " ",
    lastName: " ",
    contactNumber: " ",
    org: " ",
    msg: " ",
    location: " ",
  };
  const [contact, setContact] = useState(initial);
  const handleChange = (e) => {
    const { name, type, value } = e.target;
    e.preventDefault();
    setContact({ ...contact, [name]: value });
  };
  const { email, password, firstName, lastName, contactNumber, msg, location } =
    contact;
  return (
    <div className="contact " style={{height:"180vh",width:"100vw"}}>
    <Header />
    <div className="main flex justify-center" style={{height:"481vh"}}>
      <div className="card w-3/4 md:w-2/4 mx-auto p-8 bg-white shadow-md rounded-md h-2/5">
        <div className="contact-container " style={{width:"27vw"}}>
          <h1 className="text-3xl font-semibold mb-6">CONTACT US</h1>
          <form className="contact-form">
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-700 mb-1">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 border rounded-md w-80 inline-block "
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="p-2 border rounded-md w-80 inline-block "
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="firstName" className="text-gray-700 mb-1">
                FIRSTNAME
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="p-2 border rounded-md w-80 "
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="text-gray-700 mb-1">
                LastName
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="p-2 border rounded-md w-80 "
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contactNumber" className="text-gray-700 mb-1">
                CONTACT NUMBER
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                className="p-2 border rounded-md w-80 w-82"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="org" className="text-gray-700 mb-1">
                ORGANIZATION
              </label>
              <input
                type="text"
                name="org"
                id="org"
                className="p-2 border rounded-md w-80 "
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="msg" className="text-gray-700 mb-1">
                MESSAGE
              </label>
              <textarea
                name="msg"
                id="msg"
                placeholder="Type your message"
                className="p-2 border rounded-md w-80 resize-none"
                rows="4"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="text-gray-700 mb-1">
                LOCATION
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="p-2 border rounded-md w-80"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="submit"
                value="Submit"
                className="bg-sky-300 hover:bg-sky-500 text-white p-2 rounded-md cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const data = {
                    email,
                    password,
                    firstName,
                    lastName,
                    contactNumber,
                    org,
                    location,
                    msg,
                  };
                  console.log(data);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
