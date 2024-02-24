import React from "react";
import '../../../assets/styles/main.css'
import {FaUpload} from 'react-icons/fa'
const BranchRegistration = () => {
  const handleChange=()=>{
    console.log('change');
  }
  const handleSubmit=(e)=>{
    console.log('submit');
  }
  return (
    <div className="h-screen w-screen">
      <form action="" className="h-screen w-screen grid grid-cols-3" onSubmit={handleSubmit}>
      <div className="col-span-1">
      <div className="h-16 border-2" style={{width:"21rem"}} ><h1 className="text-lg font-semibold">Branch Logo</h1></div>
      <div className="h-16 border-2" style={{width:"21rem"}}>
      <input onChange={handleChange} type="file" name="logo" id="logo" className="hidden"/>
      <label htmlFor="logo" className="inline-block border-2 h-12 w-72 ml-4">Upload Branch Logo <FaUpload className="inline-block" /></label>

      </div>
      <div className="h-16 border-2" style={{width:"21rem"}}>
      <label htmlFor="description" className="block ml-4">Add Description</label>
      <input onChange={handleChange} type="text" name="description" id="description" className="border-2 rounded-md w-72 ml-4" />
      </div>
      <div className="h-16 border-2" style={{width:"21rem"}}>
      <input type="submit" value="Save" className="w-72 h-8 border-2 ml-4 text-black hover:bg-blue-400 hover:text-white transition-colors" />
      </div>
      </div>
      
      <div className="col-span-1 ml-4 mt-4">
        <div className="h-16 border-2" style={{width:"21rem"}}>
        <h1 className="ml-4 text-lg font-bold">Primary Information</h1>
        </div>
          <div className="h-16  border-2" style={{width:"21rem"}}>
          <label className="block ml-4" htmlFor="branchName">
          Branch Name
          </label>
              <input onChange={handleChange} required
                className="border-2 rounded-md w-72 ml-4 "
                type="text"
                name="branchName"
                id="branchName"
              />
          </div>
          <div className="h-16  border-2" style={{width:"21rem"}}>
            <label className="block ml-4" htmlFor="resgistrationNo">
              Registration Number
            </label>
            <input onChange={handleChange} required
              className="border-2 rounded-md w-72 ml-4 "
              type="number"
              name="resgistrationNo"
              id="resgistrationNo"
            />
          </div>
          <div className="h-16  border-2" style={{width:"21rem"}}>
            <label className="block ml-4" htmlFor="alias">
              Branch Alias
            </label>
            <input onChange={handleChange} required
              className="border-2 rounded-md w-72 ml-4 "
              type="text"
              name="alias"
              id="alias"
            />
          </div>
          <div className="h-16  border-2" style={{width:"21rem"}}>
            <label className="block ml-4" htmlFor="email">
              Email
            </label>
            <input onChange={handleChange} required
              className="border-2 rounded-md w-72 ml-4 "
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="h-16  border-2" style={{width:"21rem"}}>
            <label className="block ml-4" htmlFor="alternateEmail">
              Alternate Email
            </label>
            <input onChange={handleChange} required
              className="border-2 rounded-md w-72 ml-4 "
              type="email"
              name="alternateEmail"
              id="alternateEmail"
            />
          </div>
          <div className="h-16  border-2" style={{width:"21rem"}}>
            <label className="block ml-4" htmlFor="contact">
              Contact Number
            </label>
            <input onChange={handleChange} required
              className="border-2 rounded-md w-72 ml-4 "
              type="tel"
              name="contact"
              id="contact"
            />
          </div>
        </div>
        <div className="col-span-1">
        <div className="h-16 border-2" style={{width:"21rem"}} >
        <h1 className="ml-4 font-bold text-lg">Address Details</h1>
        </div>
        <div className="h-36   border-2" style={{width:"21rem"}} >
        <label htmlFor="address" className="ml-4 block">Address</label>
        <textarea onChange={handleChange} name="address" id="address" cols="30" rows="5" className="border-2 ml-4 resize-none" placeholder="enter you address" required></textarea>
        </div>
      
        </div>
      
      </form>
    </div>
  );
};

export default BranchRegistration;
