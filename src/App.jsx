import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route,  } from "react-router-dom";
import Home from "./component/pages/Home.jsx";
import SignUp from './component/pages/SignUp.jsx'
import About from "./component/pages/About.jsx";
import Blogs from "./component/pages/Blogs.jsx";
import Login from "./component/pages/Login.jsx";
import Contact from "./component/pages/Contact.jsx";
import Products from "./component/pages/Products.jsx";
export default function App() {
  const [authToken, setAuthToken] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    // Check if authentication token is present in localStorage
    var storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setAuthToken(storedToken);
    }
  }, []);

  const handleLogin = (token) => {
    // Save token to localStorage and state
    localStorage.setItem('authToken', token);
    setAuthToken(token);
  };

  const handleLogout = () => {
    // Remove token from localStorage and state
    localStorage.removeItem('authToken');
    setAuthToken(null);
  };

  return (
    <>
      <Routes>
      <Route
      path="/login"
      element={authToken ? navigate("/") : <Login onLogin={handleLogin} />}
    />
        <Route exact path="/about" element={<About />}>
          About Us
        </Route>
        <Route exact path="/products" element={<Products />}>
          Products
        </Route>
        <Route exact path="/signup" element={<SignUp />}>
          SignUp
        </Route>
        <Route exact path="/contact" element={<Contact />}>
          Contact Us
        </Route>
        <Route exact path="/blogs" element={<Blogs />}>
          Blogs
        </Route>
        <Route
          path="/"
          element={authToken ? <Home onLogout={handleLogout} /> :navigate("/login")}
        />
      </Routes>
    </>
  );
}
