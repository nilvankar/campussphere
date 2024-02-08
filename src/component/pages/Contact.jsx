import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import contactImg from "../../assets/images/contactus_img.jpg";
import {
  MobileOutlined,
  MailFilled,
  ContactsOutlined,
} from "@ant-design/icons";
export default function Contact() {
  return (
    <>
      <Header />
      <div
        className="contact border-8 border-cyan-400 bg-blue-500/100 flex flex-col items-center"
        style={{ height: "200vh", width: "100vw" }}
      >
        
        <img src={contactImg} alt="" />
        <h1 className="text-3xl font-semibold mb-6 text-white">CONTACT US</h1>
        <form
          className="contact-form flex flex-col items-center bg-green-300/100"
          style={{ border: "2px solid green", width: "41vw" }}
        >
          <div className="mb-4">
            <label htmlFor="email" className=" mb-1 text-white"  required>
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-2 border rounded-md w-80 inline-block "
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className=" mb-1 text-white" required >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="p-2 border rounded-md w-80 inline-block "
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className=" mb-1 text-white"
            >
              FIRSTNAME
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="p-2 border rounded-md w-80 "
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className=" mb-1 text-white">
              LastName
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="p-2 border rounded-md w-80 "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contactNumber"
              className=" mb-1 text-white"
            >
              CONTACT NUMBER
            </label>
            <input
              type="tel"
              name="contactNumber"
              id="contactNumber"
              className="p-2 border rounded-md w-80 w-82"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="org" className=" mb-1 text-white">
              ORGANIZATION
            </label>
            <input
              type="text"
              name="org"
              id="org"
              className="p-2 border rounded-md w-80 "
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="msg" className=" mb-1 text-white">
              MESSAGE
            </label>
            <textarea
              name="msg"
              id="msg"
              placeholder="Type your message"
              className="p-2 border rounded-md w-80 resize-none"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="location" className=" mb-1 text-white">
              LOCATION
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="p-2 border rounded-md w-80"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="submit"
              style={{ width: "10vw" }}
              value="Submit"
              className="bg-sky-300 hover:bg-sky-500 text-white p-2 rounded-md cursor-pointer mx-28"
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          </div>
        </form>
        <div
          className="detials flex flex-row justify-between my-8 h-56"
          style={{ width: "80vw", border: "2px solid" }}
        >
          <div
            className="detail-icon border-2 border-yellow-600 text-white"
            style={{ width: "26.66vw" }}
          >
            <MobileOutlined className="mx-32 h-11 w-8" />
            <strong>Sales: +91 8128863575</strong>
            <strong>Support: +918799146289</strong>
          </div>
          <div
            className="detail-icon border-2 border-yellow-600 text-white"
            style={{ width: "26.66vw" }}
          >
            <MailFilled className="mx-32 h-11 w-8" />
            <strong>campussuport@gmail.com</strong>
          </div>
          <div
            className="detail-icon border-2 border-yellow-600 text-white"
            style={{ width: "26.66vw" }}
          >
            <ContactsOutlined className="mx-32 h-11 w-8" />
            401,Tredex tower-1,alpha-1,commerical belt,greater noida-201310
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
