'use client'
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useFetch from "@/app/hooks/useFetch";
import { instituteType } from "@/app/lib/models/institute";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpPage = () => {
  const [instituteName, setInstituteName] = useState([])
  const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(8),
    instituteName: z.string(),
    fullName: z.string(),
    role: z.string(),
  });

  const router = useRouter();
  const initialState = {
    email: "",
    fullName: "",
    instituteName: "",
    password: "",
    role: "",
  };
  const [user, setUser] = useState<typeof initialState>(initialState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeof user>({
    resolver: zodResolver(userSchema),
  });

  const onsubmit = async (user: typeof initialState) => {
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

  const [data] = useFetch(
    "/api/college_setup/institute/university",
    instituteName
  );
  console.log(data);

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
        <form
          className="space-y-4 w-2/4 h-4/5"
          onSubmit={handleSubmit(onsubmit)}
        >
          <div>
            <label className="block text-sm mx-28 font-medium text-gray-700"
              htmlFor="fullName"
                >
              Name
            </label>
            <input
              required
              {...register("fullName")}
              type="text"
              id="fullName"
              name="fullName"
              className="input-field rounded-lg border-2 w-80 mx-28"
            />
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block text-sm mx-28 font-medium text-gray-700"
              htmlFor="email"
             
            >
              Email Address
            </label>
            <input
              required
              {...register("email")}
              type="email"
              id="email"
              name="email"
              className="input-field rounded-lg border-2 w-80 mx-28"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
          <div><label className="block text-sm mx-28 font-medium text-gray-700" htmlFor="password">Password</label>
          <input className="input-field rounded-lg border-2 w-80 mx-28" type="password" name="password" id="password" />
          
          </div>
            <label className="block text-sm mx-28 font-medium text-gray-700" htmlFor="instituteName">Institute Name</label>
            <select name="instituteName" className="input-field rounded-lg border-2 w-80 mx-28" id="instituteName">
              Institute Name
              <option value="" hidden>
                Select
              </option>
              {data.map((val: string, i: number) => (
                <option value={val} key={i} >
                  {val}
                </option>
              ))}
            </select>
          </div>
        <div>
          <label className="block text-sm mx-28 font-medium text-gray-700" htmlFor="role">Your Role</label>
          <select className="input-field rounded-lg border-2 w-80 mx-28" name="role" id="role"><option value="" hidden>Select</option>
          <option value="director">Director</option>
          <option value="principal">Principal</option>
          <option value="staffFaculty">Staff or Faculty</option>
          <option value="studentParent">Student or Parent</option>
          <option value="other">Other</option>
          </select>
        </div>
          {/* Similarly, add validation errors for other fields */}

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
