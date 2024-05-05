"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useFetch from "@/app/hooks/useFetch";
import { instituteType } from "@/app/lib/models/institute";

const SignUpPage = () => {
  const router = useRouter();
  const initalState = {
    email: "",
    fullName: "",
    instituteName: "",
    password: "",
    role: "",
  };
  const [user, setUser] = useState(initalState);
  const onsubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const resData = await res.json();
      if (res.ok) {
        console.log("successfully signup", resData);

        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onchange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    try {
      e.preventDefault();
      const { name, value } = e.target;
      setUser((prev) => ({ ...prev, [name]: value }));
    } catch (error) {
      console.error(error);
    }
  };
  const [data] = useFetch("/api/college_setup/institute/university");
  console.log(data);

  const { email, fullName, password, role, instituteName } = user;
  return (
    <div className="h-screen w-screen flex justify-center bg-gradient-to-r from-violet-500/95 to-purple-600  items-center">
      <div className="z-50 bg-white bg-opacity-80  p-8 w-2/4 h-4/5 rounded-lg">
        <Image
          src="/images/campusshere_logo.png"
          alt="CAMPUSSPHERE LOGO"
          height={50}
          width={50}
          className="inline-block rounded-full border-2 mx-28"
        />
        <h3 className="text-lg inline-block">CampusSphere</h3>
        <hr className="w-80 inline-block mx-28" />
        <span className="text-gray-500/100 inline-block">
          A Complete Online Solution for Institutes
        </span>
        <hr />
        <form className="space-y-4 w-2/4 h-4/5" onSubmit={onsubmit}>
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm mx-28 font-medium text-gray-700"
            >
              Name
            </label>
            <input
              required
              value={fullName}
              onChange={onchange}
              type="text"
              id="fullName"
              name="fullName"
              className="input-field rounded-lg border-2 w-80 mx-28"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm mx-28 font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              required
              value={email}
              onChange={onchange}
              type="email"
              id="email"
              name="email"
              className="input-field rounded-lg border-2 w-80 mx-28"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm mx-28 font-medium text-gray-700"
            >
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              className="input-field rounded-lg border-2 w-80 mx-28"
              onChange={onchange}
              value={password}
            />
          </div>

          <div>
            <label
              htmlFor="instituteName"
              className="block text-sm mx-28 font-medium text-gray-700"
            >
              Institute Name
            </label>
            <select
              className="input-field rounded-lg border-2 w-80 mx-28"
              onChange={onchange}
              value={instituteName}
              name="instituteName"
              id="instituteName"
            >
              <option value="" hidden>
                Select
              </option>
              {data &&
                data.map((item: instituteType) => {
                  return (
                    <option value={item._id} key={item.instituteName}>
                      {item.instituteName}
                    </option>
                  );
                })}
            </select>
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm mx-28 font-medium text-gray-700"
            >
              Your Role in Institute
            </label>
            <select
              value={role}
              onChange={onchange}
              required
              id="role"
              name="role"
              className="input-field rounded-lg border-2 w-80 mx-28"
            >
              <option value="" disabled hidden>
                Select Role
              </option>
              <option value="Principal">Admin or Principal</option>
              <option value="Director">Director</option>
              <option value="Student or Parent">Student or Parent</option>
              <option value="Staff or Faculty">Staff or Faculty</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white ml-32 px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Get Demo Credentials
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
