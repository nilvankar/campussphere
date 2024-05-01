"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import "@/app/globals.css";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const router = useRouter();
  const { email, password } = user;
  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const onsubmit = async (e:FormEvent<HTMLFormElement>) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const resData = await res.json();
      if (res.ok) {
        console.log("successfuly logged in");
        setUser(resData)
        console.log(resData);
        
        localStorage.setItem("token", resData.token);
        console.log(localStorage.getItem("token"));
        router.push("/private");
      }
    } catch (error) {
      console.error(error);
      router.push('/auth/login')
    }
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="absolute inset-0 z-30">
        <Image
          src="/images/collge_master.jpeg"
          alt="SIGNUP IMAGE"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="z-50 bg-white bg-opacity-80 p-8 w-2/4 h-4/5 rounded-lg">
        <Image
          src="/images/campusshere_logo.png"
          alt="CAMPUSSPHERE LOGO"
          height={50}
          width={50}
          className="inline-block rounded-lg border-2 mx-28"
        />
        <h3 className="text-lg inline-block">CampusSphere</h3>
        <hr className="w-80 inline-block mx-28" />
        <span className="text-gray-500/100 inline-block">
          A Complete Online Solution for Institutes
        </span>
        <hr />
        <form className="space-y-4 w-2/4 h-4/5" onSubmit={onsubmit} method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm mx-28 font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              onChange={onchange}
              value={email}
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
              onChange={onchange}
              type="password"
              value={password}
              name="password"
              id="password"
              className="input-field rounded-lg border-2 w-80 mx-28"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Get Demo Credentials
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
