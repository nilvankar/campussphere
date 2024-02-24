import React, { useState } from "react";
import logimg from "../../assets/images/login_img.jpg";
import "../../assets/styles/login.css";
import { useNavigate } from "react-router-dom";
// Layouts



// Firebase login system
export default function Login() {
  const navigate = useNavigate();
  const initialState = {
    email: "",
    password: "",
  };

  // token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7I…zOTZ9.Bm8foD4RI_PjRcDqL4XX20bIUHqVWtEzxejZzr1f3B4'
  const [formData, setFormData] = useState(initialState);
  const [fetchUser, setFetchUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const userData = await response.json();
        const jwtToken = userData.token;

        // Corrected line: use setItem method to store the token in local storage
        localStorage.setItem("authToken", jwtToken);
        console.log(authToken);
        setFetchUser(userData);
        navigate("/");
        console.log("Login successful:", userData);
        var storedToken = localStorage.getItem("authToken");
        console.log(storedToken);
      } else {
        console.error("Login failed:", response.statusText);
        // Handle the error, e.g., set an error state or display a message to the user
        navigate("/login");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle the error, e.g., set an error state or display a message to the user
    }
  };

  return (
    
      
      <div className="main h-165 sm:w-screen">
        <div className="card">
          <div className="img-container">
            <img src={logimg} alt="Login Image" className="log-img" />
          </div>
          <div className="form-container">
            <form
              action="http://localhost:3000/login"
              method="POST"
              onSubmit={handleSubmit}
              style={{height:"73%",width:"89%"}}
              className="flex justify-center items-center flex-col object-cover h-full w-full "
            >
              <h1 className="text-3xl font-semibold mb-4 w-80">SIGN IN</h1>
              
              <div className="mb-4 w-80">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  id="email"
                  className="form-input sm:w-full" // Adjusted width class for small screens
                  required
                  value={formData.email}
                />
              </div>
              <div className="mb-4 w-80">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-input sm:w-full" // Adjusted width class for small screens
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4 w-80 flex justify-center items-center ">
                <button type="submit" className="form-btn">
                  Login
                </button>
              </div>

            </form>
            <div className="sign-creadential bg-white border-2 w-72 border-black flex flex-col justify-center">
         
          </div>
          </div>
          
        </div>
      </div>
  
  );
}
