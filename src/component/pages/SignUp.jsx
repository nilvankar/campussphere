import React, { useState } from "react";
import signupImg from '../../assets/images/social_img.jpg'
import "../../assets/styles/signup.css";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function SignUp() {
  const initialState = {
    firstName: " ",
    lastName: " ",
    email: " ",
    passwordword: " ",
    fatherName: " ",
    colonyName: " ",
    landmark: " ",
    area: " ",
    city: " ",
    pincode: " ",
    gender: { male: false, female: false },
    primaryNo: " ",
    secondaryNumber: " ",
    desg: {
      admin: false,
      student: false,
      faculty: false,
      hod: false,
    },
    batch: {
      2024: false,
      2023: false,
      2022: false,
      2021: false,
      2020: false,
      2019: false,
      2018: false,
      2017: false,
    },
    dept: {
      computerScience: false,
      civil: false,
      mechatronics: false,
      mechanical: false,
    },
  };
  const [signUp, setSignUp] = useState(initialState);
  // token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7I…zOTZ9.Bm8foD4RI_PjRcDqL4XX20bIUHqVWtEzxejZzr1f3B4'
  const [formData, setFormData] = useState(initialState);
  const [fetchUser, setFetchUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, type, value } = e.target;
    if (type === "checkbox") {
      setSignUp({
        ...signUp,
        gender: { ...signUp.gender, [name]: checked },
        batch: { ...signUp.batch, [name]: checked },
        dept: { ...signUp.dept, [name]: checked },
        desg: { ...signUp.desg, [name]: checked },
      });
    } else {
      setSignUp({ ...signUp, [name]: value });
    }

    setFormData({ ...formData, [name]: value });
  };
  const {
    firstName,
    lastName,
    email,
    passwordword,
    fatherName,
    colonyName,
    landmark,
    area,
    pincode,
    gender,
    desg,
    batch,
    dept,
    primaryNo,
    secondaryNumber,
  } = signUp;

  const data = {
    firstName,
    lastName,
    email,
    passwordword,
    fatherName,
    colonyName,
    landmark,
    area,
    pincode,
    gender,
    desg,
    batch,
    dept,
    primaryNo,
    secondaryNumber,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await fetch(
        "https://blcdjd0s-5000.inc1.devtunnels.ms/create-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Access-token": storedToken,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const userData = await response.json();
        const jwtToken = userData.token;

        // Corrected line: use setItem method to store the token in local storage

        setFetchUser(userData);
        navigate("/");
        console.log("singup successful :", userData);
      } else {
        console.error("singup failed:", response.statusText);
        // Handle the error, e.g., set an error state or display a message to the user
        navigate("/signup");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle the error, e.g., set an error state or display a message to the user
    }
  };
  // https://blcdjd0s-5000.inc1.devtunnels.ms/create-user  ----------------------------->forwared port
  return (
    <>
      <Header />
      <div className="main" style={{ height: "242vh", backgroundImage:`url(${signupImg})` }}>
        {/*    <div className="img-container">
        <img src={contactImg} alt="Login Image" className="log-img" />
      </div>
    
*/}
        <div className="form-container" style={{ height: "200vh" }}>
          <form
            action="https://blcdjd0s-5000.inc1.devtunnels.ms/create-user"
            method="POST"
            className="stuForm"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center font-extrabold text-white">Sign Up</h1>
            <div className="form-div " style={{ width: "42vw" }}>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium"
              >
                Email
              </label>
              <input
                className="form-input"
                style={{ width: "33vw" }}
                type="email"
                name="email"
                id="email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-div " style={{ width: "42vw" }}>
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium"
              >
                password
              </label>
              <input
                className="form-input"
                style={{ width: "33vw" }}
                type="password"
                name="password"
                id="password"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-div " style={{ width: "42vw" }}>
              <label
                htmlFor="firstName"
                className="block text-gray-700 text-sm font-medium"
              >
                First Name
              </label>
              <input
                className="form-input"
                style={{ width: "33vw" }}
                type="text"
                name="firstName"
                id="firstName"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-div " style={{ width: "42vw" }}>
              <label
                htmlFor="lastName"
                className="block text-gray-700 text-sm font-medium"
              >
                Last Name
              </label>
              <input
                className="form-input"
                style={{ width: "33vw" }}
                type="text"
                name="lastName"
                id="lastName"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-div " style={{ width: "42vw" }}>
              <label htmlFor="dob">Date Of Birth</label>
              <input
                className="form-input"
                style={{ width: "33vw" }}
                type="date"
                name="dob"
                id="dob"
                onChange={handleChange}
              />
            </div>
            <div className="form-div " style={{ width: "42vw" }}>
              <label
                htmlFor="fatherName"
                className="block text-gray-700 text-sm font-medium"
              >
                Father 's Name
              </label>
              <input
                className="form-input"
                style={{ width: "33vw" }}
                type="text"
                name="fatherName"
                id="fatherName"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-div " style={{ width: "42vw" }}>
              <label
                htmlFor="colonyName"
                className="block text-gray-700 text-sm font-medium"
              >
                colonyName
              </label>
              <input
                className="form-input"
                style={{ width: "33vw" }}
                type="text"
                name="colonyName"
                id="colonyName"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-div " style={{ width: "42vw" }}>
              <label
                htmlFor="landmark"
                className="block text-gray-700 text-sm font-medium"
              >
                Landmark
              </label>
              <input
                className="form-input"
                style={{ width: "33vw" }}
                type="text"
                name="landmark"
                id="landmark"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-div " style={{ width: "42vw" }}>
              <label
                htmlFor="area"
                className="block text-gray-700 text-sm font-medium"
              >
                Area
              </label>
              <input
                className="form-input"
                style={{ width: "33vw" }}
                type="text"
                name="area"
                id="area"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-div " style={{ width: "42vw" }}>
              <label
                htmlFor="city"
                className="block text-gray-700 text-sm font-medium"
              >
                City
              </label>
              <input
                className="form-input"
                style={{ width: "33vw" }}
                type="text"
                name="city"
                id="city"
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-div " style={{ width: "42vw" }}>
              <label
                htmlFor="pincode"
                className="block text-gray-700 text-sm font-medium"
              >
                Pincode
              </label>
              <input
                className="form-input"
                style={{ width: "33vw" }}
                type="number"
                name="pincode"
                id="pincode"
                required
                onChange={handleChange}
              />
            </div>
            <div
              className="form-div "
              style={{
                width: "42vw",
                height: "11vh",
                marginTop: "9px",
                fontWeight: "bold",
              }}
            >
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                required
                className="block text-gray-700 text-sm font-medium"
                onChange={handleChange}
              >
                <option hidden> Select Gender</option>

                <option value="male" onChange={handleChange}>
                  Male
                </option>
                <option value="female" onChange={handleChange}>
                  Female
                </option>
              </select>
            </div>

            <div className="form-div " style={{ width: "42vw" }}>
              <label
                htmlFor="primaryNo"
                className="block text-gray-700 text-sm font-medium"
              >
                Contact Number
              </label>
              <input
                className="form-input"
                style={{ width: "33vw" }}
                type="number"
                name="primaryNo"
                id="primaryNo"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-div " style={{ width: "42vw" }}>
              <label
                htmlFor="alternativeNo"
                className="block text-gray-700 text-sm font-medium"
              >
                Alternative Number
              </label>
              <input
                className="form-input"
                style={{ width: "33vw" }}
                type="number"
                name="alternativeNo"
                id="alternativeNo"
                onChange={handleChange}
              />
            </div>
            <div className="form-div " style={{ width: "42vw" }}>
              <select
                name="desg"
                id="desg"
                required
                className="block text-gray-700 text-sm font-medium"
                onChange={handleChange}
              >
                <option hidden>Select Designation</option>
                <option value="admin" onChange={handleChange}>
                  Administrator
                </option>
                <option value="student" onChange={handleChange}>
                  Student
                </option>
                <option value="hod" onChange={handleChange}>
                  Head Of Department
                </option>
                <option value="faculty" onChange={handleChange}>
                  Faculty
                </option>
              </select>
            </div>
            <div className="form-div " style={{ width: "42vw" }}>
              <select
                name="batch"
                id="batchsel"
                className="block text-gray-700 text-sm font-medium"
              >
                <option value="batchsel" hidden onChange={handleChange}>
                  {" "}
                  Select Batch
                </option>
                <option value="2024" onChange={handleChange}>
                  2024
                </option>
                <option value="2023" onChange={handleChange}>
                  2023
                </option>
                <option value="2022" onChange={handleChange}>
                  2022
                </option>
                <option value="2021" onChange={handleChange}>
                  2021
                </option>
                <option value="2020" onChange={handleChange}>
                  2020
                </option>
                <option value="2019" onChange={handleChange}>
                  2019
                </option>
                <option value="2018" onChange={handleChange}>
                  2018
                </option>
                <option value="2017" onChange={handleChange}>
                  2017
                </option>
              </select>
            </div>
            <div className="form-div " style={{ width: "42vw" }}>
              <select name="dept" id="dept">
                <option value="dept" hidden onChange={handleChange}>
                  Select Department
                </option>
                <option value="computerScience" onChange={handleChange}>
                  CSE
                </option>
                <option value="civil" onChange={handleChange}>
                  Civil
                </option>
                <option value="mechanical" onChange={handleChange}>
                  Mechanical
                </option>
                <option value="mechatronics" onChange={handleChange}>
                  Mechatronics
                </option>
              </select>
            </div>
            <div className="form-div " style={{ width: "42vw" }}>
              <input
                className="form-input bg-sky-300/95 hover:bg-sky-600/100 text-white"
                style={{ width: "20vw", marginLeft: "95px" }}
                type="submit"
                value="submit"
              />
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
