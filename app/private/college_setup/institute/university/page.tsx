"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Image from "next/image";
const UniversityInformation = () => {
  const router = useRouter();
  const intialState = {
    email: "",
    alternateEmail: "",
    instituteName: "",
    founderName: "",
    affiliation: "",
    logo: "",
    shortcode: "",
    contactno: "",
    officeno: "",
    panNo: "",
    address: "",
  };
  const [institute, setInstitute] = useState(intialState);

  const {
    affiliation,
    alternateEmail,
    contactno,
    email,
    founderName,
    instituteName,
    logo,
    officeno,
    panNo,
    shortcode,
    address,
  } = institute;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      const res = await fetch("/api/college_setup/institute/university", {
        method: "PUT",
      });
      const data = res.json();
      if (res.ok) {
        console.log("successfully update");
        alert("all changes are reflected to univeristy");
        router.push("/private/college_setup/institute/university");
      }
    } catch (error) {
      console.error(`something went wrong ${error}`);
    }
  };

  const onchange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInstitute((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const getUniveristy = async () => {
      const response = await fetch("/api/college_setup/institute/university");
      const resData = await response.json();
      setInstitute(resData);
      const {
        affiliation,
        alternateEmail,
        contactno,
        email,
        founderName,
        instituteName,
        logo,
        officeno,
        panNo,
        shortcode,
        address,
      } = resData;
    };
    getUniveristy();
  }, []);
  return (
    <div className="h-screen w-screen overscroll-y-none ">
      <form
        method="PUT"
        onSubmit={handleSubmit}
        className="grid grid-cols-3 mt-10 ml-20 "
        style={{ gridTemplateColumns: "", width: "61rem", height: "37rem" }}
      >
        <div className="border-2">
          <div className="justify-center">
            <label className="block" htmlFor="logo">
              University Logo<span className="text-red-500">*</span>
            </label>
            <input
              className="rounded-lg border-2 block"
              onChange={onchange}
              type="file"
              name="logo"
              value={logo}
              id="logo"
            />
            <Image
              src={"/images/setup_academics.jpeg"}
              alt="UNIVERSITY LOGO"
              height={200}
              width={200}
              className="border-2 mx-8 my-12 rounded-full"
            />
          </div>
        </div>
        <div className="border-2">
          <div className="justify-center">
            <label className="block" htmlFor="instituteName">
              Institute Name<span className="text-red-500">*</span>
            </label>
            <input
              className="rounded-lg border-2 block"
              onChange={onchange}
              type="text"
              value={instituteName}
              name="instituteName"
              id="instituteName"
            />
          </div>
          <div className="justify-center">
            <label className="block" htmlFor="founderName">
              Founder Name<span className="text-red-500">*</span>
            </label>
            <input
              className="rounded-lg border-2 block"
              onChange={onchange}
              type="text"
              value={founderName}
              name="founderName"
              id="founderName"
            />
          </div>
          <div className="justify-center">
            <label className="block" htmlFor="affiliation">
              Affiliation<span className="text-red-500">*</span>
            </label>
            <input
              className="rounded-lg border-2 block"
              onChange={onchange}
              type="text"
              name="affiliation"
              value={affiliation}
              id="affiliation"
            />
          </div>
          <div className="justify-center">
            <label className="block" htmlFor="shortcode">
              Institute ShortCode
            </label>
            <input
              className="rounded-lg border-2 block"
              onChange={onchange}
              type="number"
              name="shortcode"
              id="shortcode"
              value={shortcode}
            />
          </div>
          <div className="justify-center">
            <label className="block" htmlFor="email">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              className="rounded-lg border-2 block"
              onChange={onchange}
              type="email"
              name="email"
              id="email"
              value={email}
            />
          </div>
          <div className="justify-center">
            <label className="block" htmlFor="alternateEmail">
              Alternate Email
            </label>
            <input
              className="rounded-lg border-2 block"
              onChange={onchange}
              type="email"
              name="alternateEmail"
              id="alternateEmail"
              value={alternateEmail}
            />
          </div>
          <div className="justify-center">
            <label className="block" htmlFor="contactNo">
              Contact Number<span className="text-red-500">*</span>
            </label>
            <input
              className="rounded-lg border-2 block"
              onChange={onchange}
              type="tel"
              name="contactNo"
              id="contactNo"
              value={contactno}
            />
          </div>
        </div>
        <div className="border-2">
          <div className="justify-center">
            <label className="block" htmlFor="officeNo">
              OFFICE NO<span className="text-red-500">*</span>
            </label>
            <input
              className="rounded-lg border-2 block"
              onChange={onchange}
              type="tel"
              name="officeNo"
              id="officeNo"
              value={officeno}
            />
          </div>
          <div className="justify-center">
            <label className="block" htmlFor="panNo">
              PAN NO
            </label>
            <input
              className="rounded-lg border-2 block"
              onChange={onchange}
              type="number"
              name="panNo"
              id="panNo"
              value={panNo}
            />
          </div>
          <div className="justify-center">
            <label className="block" htmlFor="address">
              Address<span className="text-red-500">*</span>
            </label>
            <input
              className="rounded-lg border-2 block"
              onChange={onchange}
              type="text"
              name="address"
              id="address"
              value={address}
            />
          </div>
        </div>
        <div className="inline-flex justify-around mt-28">
          <div className="">
            <input
              className="rounded-lg mx-24 w-32 border-2 block bg-sky-400 hover:text-black hover:bg-white text-white"
              type="submit"
              value="EDIT"
            />
          </div>
          <div>
            <button
              onClick={() => setInstitute(intialState)}
              className="rounded-lg mx-24 w-32 border-2 bg-red-600 hover:text-black hover:bg-white text-white block"
            >
              RESET
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UniversityInformation;
