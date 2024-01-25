import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import contactImg from '../../assets/images/contactus_img.jpg'
export default function Contact() {
  return (
    <>
    <Header />
    <div className='contact border-8 border-cyan-400' style={{height:"140vh",width:"50%"}}>
    <h1 className="text-3xl font-semibold mb-6">CONTACT US</h1>
    <form className="contact-form" style={{border:"2px solid green"}}>
      <div className="mb-4">
        <label htmlFor="email" className="text-gray-700 mb-1">
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
        <label htmlFor="password" className="text-gray-700 mb-1">
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
        <label htmlFor="firstName" className="text-gray-700 mb-1">
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
        <label htmlFor="lastName" className="text-gray-700 mb-1">
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
        <label htmlFor="contactNumber" className="text-gray-700 mb-1">
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
        <label htmlFor="org" className="text-gray-700 mb-1">
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
        <label htmlFor="msg" className="text-gray-700 mb-1">
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
        <label htmlFor="location" className="text-gray-700 mb-1">
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
          value="Submit"
          className="bg-sky-300 hover:bg-sky-500 text-white p-2 rounded-md cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      </div>
    </form>
    <img src={contactImg} alt="" />
    </div>
    <Footer />
    </>
  )
}
