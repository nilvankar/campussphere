"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import "@/app/globals.css";
import { useRouter } from "next/navigation";
import { UserOutlined, LockFilled } from "@ant-design/icons";
const LoginPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const router = useRouter();
  const { email, password } = user;

  const onsubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const resData = await res.json();
      if (res.ok) {
        console.log("successfully login", resData);
        const token = await resData.token;
        localStorage.setItem(token, "token");
        console.log(localStorage.getItem(token));

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
  return (
    <div className="h-screen w-screen flex justify-center bg-gradient-to-r from-violet-500/95 to-purple-600 items-center">
      <div className="z-50 bg-white bg-opacity-80 p-8 w-2/4 h-4/5 rounded-lg">
        <h1 className="text-2xl mx-72  block font-extrabold text-blue-500">
          CampusSphere
        </h1>
        <Image
          src="/images/campusshere_logo.png"
          alt="CAMPUSSPHERE LOGO"
          height={100}
          width={100}
          className="mx-72 block rounded-full border-2"
        />

        <form
          className="space-y-4 h-48 w-96 mt-12"
          onSubmit={onsubmit}
          method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm mx-28 font-medium text-gray-700"
            >
              <UserOutlined />
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
              <LockFilled />
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
            className="bg-blue-500 ml-40 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            LOGIN
          </button>
        </form>
        <button
          className="text-blue-500 hover:text-blue-300"
          onClick={() => router.push("/auth/forgot_password")}
        >
          forgot password?
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
