import React, { useState } from "react";
import contactImg from '../../assets/images/contactus_img.jpg'
import "../../assets/styles/signup.css";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "../../assets/styles/base.css"
import "../../assets/styles/forms.css"

export default function SingUp() {
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
    alternativeNo: " ",
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
    alternativeNo,
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
    alternativeNo,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storedToken = localStorage.getItem('authToken');
      const response = await fetch(
        "https://blcdjd0s-5000.inc1.devtunnels.ms/create-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'X-Access-token': storedToken
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const userData = await response.json();
        const jwtToken = userData.token;

        // Corrected line: use setItem method to store the token in local storage

        setFetchUser(userData);
        navigate('/');
        console.log("singup successful :", userData);
      } else {
        console.error("singup failed:", response.statusText);
        // Handle the error, e.g., set an error state or display a message to the user
        navigate('/signup');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle the error, e.g., set an error state or display a message to the user
    }
  };

  // https://blcdjd0s-5000.inc1.devtunnels.ms/create-user  ----------------------------->forwared port
  return (
    <div className="signup" style={{ height: "100%", width: "100vw" }}>
      <Header />
      <div className="main">
        <h1 className="">Register Account</h1>
        <form action="">

          <div>
            Personal Info
            <hr />
          </div>

          <div className="form-control multi-input">

            <div>
              <label htmlFor="firstName">Enter firstname</label>
              <input type="text" name="firstName" id="firstName" />
            </div>

            <div>
              <label htmlFor="lastName">Enter lastname</label>
              <input type="text" name="lastName" id="lastName" />
            </div>

          </div>

          <div className="form-control">
            <label htmlFor="fatherName">Enter your father name</label>
            <input type="text" name="fatherName" id="fatherName" />
          </div>

          <div className="form-control">
            <label htmlFor="gender">Select Gender</label>
            <select name="gender" id="gender">
              <option hidden>Select your Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="form-control multi-input">

            <div>
              <label htmlFor="primaryNo">Enter primary number</label>
              <input type="tel" name="primaryNo" id="primaryNo" />
            </div>

            <div>
              <label htmlFor="alternativeNo">Enter alternative number</label>
              <input type="tel" name="alternativeNo" id="alternativeNo" />
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="dob">Pick your date of birth</label>
            <input type="date" name="dob" id="dob" />
          </div>

          <div>
            Residential info
            <hr />
          </div>

          <div className="form-control">
            <label htmlFor="colonyName">Enter Colony name</label>
            <input type="text" name="colonyName" id="colonyName" placeholder="House no, Flat name/Society Name" />
          </div>

          <div className="form-control">
            <label htmlFor="landmark">Enter landmark</label>
            <input type="text" name="landmark" id="landmark" placeholder="Opp XYZ, Near ABC" />
          </div>

          <div className="form-control">
            <label htmlFor="area">Enter Colony name</label>
            <input type="text" name="area" id="area" placeholder="Ex Wagodia Road" />
          </div>

          <div className="form-control multi-input">
            <div>
              <label htmlFor="city">Enter City</label>
              <input type="text" name="city" id="city" placeholder="Ex Vadodara" />
            </div>

            <div>

              <label htmlFor="pincode">Enter Pincode</label>
              <input type="number" name="pincode" id="pincode" placeholder="Ex 390019" />
            </div>
          </div>

          <div>
            Login Info
            <hr />

            <span>The provided info will be used for Login your ERP</span>
          </div>

          <div className="form-control">
            <label htmlFor="email">Enter email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="form-control">
            <label htmlFor="password">Enter password</label>
            <input type="password" name="password" id="password" />
          </div>


          <div>
            Academic Info
            <hr />
          </div>

          <div className="form-control multi-input">

            <div>
              <label htmlFor="dept">Select department</label>
              <select name="dept" id="dept">
                <option hidden>Select your department</option>
                <option value="CSE">CSE</option>
                <option value="mechanical">Mechanical</option>
                <option value="civil">Civil</option>
                <option value="mechatronics">Mechatronics</option>
              </select>
            </div>

            <div>
              <label htmlFor="batch">Select batch</label>
              <select name="batch" id="batch">
                {/* It should be rendered dynamically */}
                <option hidden>Select batch</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="desg">Select Designation</label>
            <select name="desg" id="desg">
              <option hidden>Select Designation</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="hod">HOD</option>
              <option value="Admin">Admin</option>
            </select>
          </div>


        </form>
      </div>
      <Footer />
    </div>
  );
}
