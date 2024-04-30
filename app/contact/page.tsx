import React from "react";
import Image from "next/image";
const ContactPage = () => {
  return (
    <div className="h-screen w-screen bg-no-repeat">
      <Image
        src="/images/admin_logo_select.png"
        alt="bgimg"
        layout="fill"
        objectFit="cover"
        className="opacity-40"
      />
      <h3 className="text-gray-400/70 text-center">
        Free to share your opinion
      </h3>
      <span className="text-lg font-bold">Need Help</span>
      <form
        action=""
        method="POST"
        className="bg-green-800 text-black opacity-100 "
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="border-2 rounded-lg w-80"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            className="border-2 rounded-lg w-80"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            className="border-2 rounded-lg w-80"
            type="tel"
            name="phoneNo"
            id="phoneNo"
          />
        </div>
        <div>
          <label htmlFor="website_url">Website Url</label>
          <input
            className="border-2 rounded-lg w-80"
            type="text"
            name="website_url"
            id="website_url"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols={20}
            rows={6}
            className="border-2"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
