"use client";
import React, {
  DOMElement,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
const UniversityInformation = () => {
  const [institute, setInstitute] = useState({
    email: "",
    alternateEmail: "",
    instituteName: "",
    founderName: "",
    affiliation: "",
    shortcode: "",
    contactno: "",
    officeno: "",
    panNo: "",
    address: "",
  });

  const {
    affiliation,
    alternateEmail,
    contactno,
    email,
    founderName,
    instituteName,
    officeno,
    panNo,
    shortcode,
    address,
  } = institute;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      const res = await fetch("", { method: "PUT" });
    } catch (error) {
      console.error(`something went wrong ${error}`);
    }
  };
  const handleLoadData = async (e: FormEvent) => {
    try {
      const res = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(institute),
      });
      const resData = await res.json();
      setInstitute(resData);
    } catch (error) {
      console.error(error);
    }
  };
  const onchange = (e:any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInstitute((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="h-screen w-screen" onLoad={handleLoadData}>
      <form
        method="PUT"
        onSubmit={handleSubmit}
      className="h-screen"
        style={{ gridTemplateColumns: "" }}
      >
        <div className="border-2">
          <div>
            <label htmlFor="logo">
              University Logo<span className="text-red-500">*</span>
            </label>
            <input onChange={onchange} type="file" name="logo" id="logo" />
          </div>
        </div>
        <div className="border-2">
          <div>
            <label htmlFor="instituteName">
              Institute Name<span className="text-red-500">*</span>
            </label>
            <input
              onChange={onchange}
              type="text"
              value={instituteName}
              name="instituteName"
              id="instituteName"
            />
          </div>
          <div>
            <label htmlFor="founderName">
              Founder Name<span className="text-red-500">*</span>
            </label>
            <input
              onChange={onchange}
              type="text"
              value={founderName}
              name="founderName"
              id="founderName"
            />
          </div>
          <div>
            <label htmlFor="affiliation">
              Affiliation<span className="text-red-500">*</span>
            </label>
            <input
              onChange={onchange}
              type="text"
              name="affiliation"
              value={affiliation}
              id="affiliation"
            />
          </div>
          <div>
            <label htmlFor="shortcode">Institute ShortCode</label>
            <input
              onChange={onchange}
              type="number"
              name="shortcode"
              id="shortcode"
              value={shortcode}
            />
          </div>
          <div>
            <label htmlFor="email">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              onChange={onchange}
              type="email"
              name="email"
              id="email"
              value={email}
            />
          </div>
          <div>
            <label htmlFor="alternateEmail">Alternate Email</label>
            <input
              onChange={onchange}
              type="email"
              name="alternateEmail"
              id="alternateEmail"
              value={alternateEmail}
            />
          </div>
          <div>
            <label htmlFor="contactNo">
              Contact Number<span className="text-red-500">*</span>
            </label>
            <input
              onChange={onchange}
              type="tel"
              name="contactNo"
              id="contactNo"
              value={contactno}
            />
          </div>
        </div>
        <div className="border-2">
          <div>
            <label htmlFor="officeNo">
              OFFICE NO<span className="text-red-500">*</span>
            </label>
            <input
              onChange={onchange}
              type="tel"
              name="officeNo"
              id="officeNo"
              value={officeno}
            />
          </div>
          <div>
            <label htmlFor="panNo">PAN NO</label>
            <input
              onChange={onchange}
              type="number"
              name="panNo"
              id="panNo"
              value={panNo}
            />
          </div>
          <div>
            <label htmlFor="address">
              Address<span className="text-red-500">*</span>
            </label>
            <input
              onChange={onchange}
              type="text"
              name="address"
              id="address"
              value={address}
            />
          </div>
        </div>
        <input type="submit" value="EDIT" />
      </form>
    </div>
  );
};

export default UniversityInformation;
