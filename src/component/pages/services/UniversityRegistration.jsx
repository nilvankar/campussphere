import React, { useState } from "react";
import "../../../assets/styles/main.css";
const UniversityRegistration = () => {
   const initalState={
    name:"",
    founder:"",
    affilation:"",
    email:"",
    alternateNo:"",
    contact:"",
    shortCode:'',
   banner:null,
   logo:null,
   officeNo:9586224971,
   address:"",
   pan:'AAAPZ1234C'
   }
    const [university, setUniversity] = useState([])

    const handleChange=(e)=>{
        e.preventDefault();
        const {name,value,files}=e.target;
        const newVal=name==="upload"||name==="banner"?files[0]:value
      setUniversity((prev)=>({...prev,[name]:newVal}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(`university added ${university}`);
    }
  return (
    <div className="h-screen w-screen ">
      <form action="" className="w-screen h-screen grid grid-cols-3">
      <div
      className="col-span-1 border-2 w-96 ml-16 my-16"
      style={{ height: "27rem" }}
    >
      <div className="border-2 h-16 w-full">
        <input required onChange={handleChange} type="file" className="hidden" name="upload" id="upload" accept="image/*" />
        <label htmlFor="upload" className="border-2 rounded-md w-12">University Logo</label>
     
      </div>
    
      <div className="w-full h-16">
       <input type="submit" value="Saved Changes" className="bg-sky-300 mx-28 my-4 transition-colors text-white hover:bg-sky-500" onSubmit={handleSubmit} />
      </div>
    </div>
        <div
          className="col-span-1 border-2 w-96 ml-16 my-16"
          style={{ height: "34rem" }}
        >
          <div className="w-full h-16 ">
            <label className="block ml-4" htmlFor="name">
              Institute Name
            </label>
            <input required onChange={handleChange}
              type="text"
              name="name"
              id="name"
              className="ml-4 w-72 border-2 rounded-md"
            />
          </div>
          <div className="w-full h-16">
            <label className="block ml-4" htmlFor="founderName">
              Founder 's Name
            </label>
            <input required onChange={handleChange}
              className="ml-4 w-72 border-2 rounded-md"
              type="text"
              name="founderName"
              id="founderName"
            />
          </div>
          <div className="w-full h-16">
            <label className="block ml-4" htmlFor="affilation">
              Affliation
            </label>
            <input required onChange={handleChange}
              className="ml-4 w-72 border-2 rounded-md"
              type="text"
              name="affilation"
              id="affilation"
            />
          </div>
          <div className="w-full h-16">
            <label className="block ml-4" htmlFor="shortCode">
              Insitute shortcode
            </label>
            <input required onChange={handleChange}
              className="ml-4 w-72 border-2 rounded-md"
              type="text"
              name="shortCode"
              id="shortCode"
            />
          </div>
          <div className="w-full h-16">
            <label className="block ml-4" htmlFor="email">
              Email Address
            </label>
            <input required onChange={handleChange}
              className="ml-4 w-72 border-2 rounded-md"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="w-full h-16">
            <label className="block ml-4" htmlFor="alterEmail">
              Alternate Email Address
            </label>
            <input required onChange={handleChange}
              className="ml-4 w-72 border-2 rounded-md"
              type="email"
              name="alterEmail"
              id="alterEmail"
            />
          </div>
          <div className="w-full h-16">
            {" "}
            <label htmlFor="contact" className="block ml-4">
              Contact Number
            </label>
            <input required onChange={handleChange}
              type="tel"
              name="contact"
              id="contact"
              className="rounded-md border-2 ml-4"
            />
          </div>
          <div className="w-full h-16">
            <label htmlFor="banner" className="block ml-4">
              Banner Image
            </label>
            <input required onChange={handleChange}
              type="file"
              accept="image/*"
              name="banner"
              id="banner"
              
              className="ml-4 hidden rounded-md border-2 w-72"
            />
          </div>
        </div>
        <div
          className="col-span-1 border-2 w-96 ml-16 my-16"
          style={{ height: "27rem" }}
        >
          <div className="w-full h-16">
            <label htmlFor="officeNo" className="ml-4 block">
              Office Number
            </label>
            <input required onChange={handleChange}
              type="number"
              name="officeNo"
              id="officeNo"
              className="ml-4 rounded-md w-72 border-2"
              style={{ MozAppearance: "textfield" }}
            />
          </div>
          <div className="w-full h-16">
            <label htmlFor="pan" className="block ml-4">
              Pan Number
            </label>
            <input required onChange={handleChange}
              type="number"
              name="pan"
              id="pan"
              className="ml-4 rounded-md w-72 border-2"
            />
          </div>
          <div className="w-96 h-64">
          <label htmlFor="address" className="ml-4 block">Address</label>
            <textarea
              name="address"
              minLength={40}
              id="address"
              cols="40"
              onChange={handleChange}
              className="border-2 ml-4 rounded-md resize-none"
              rows="8" 
              placeholder="Address"
            ></textarea>
          </div>
        </div>
      
      </form>
    </div>
  );
};

export default UniversityRegistration;
