
import React from "react";
const UniversityInformation = () => {
  return (
    <div className="h-screen w-screen">
    <form className="grid grid-cols-3  w-screen" style={{ gridTemplateColumns: "" }}>
      <div className="border-2">
        <div>
          <label htmlFor="logo">University Logo</label>
          <input type="file" name="logo" id="logo" />
        </div>
      </div>
      <div className="border-2">
        <div>
          <label htmlFor="instituteName">Institute Name</label>
          <input type="text" name="instituteName" id="instituteName" />
        </div>
        <div>
          <label htmlFor="founderName">Founder Name</label>
          <input type="text" name="founderName" id="founderName" />
        </div>
        <div>
          <label htmlFor="affiliation">Affiliation</label>
          <input type="text" name="affiliation" id="affiliation" />
        </div>
        <div>
          <label htmlFor="shortcode">Institute ShortCode</label>
          <input type="number" name="shortcode" id="shortcode" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="alternateEmail">Alternate Email</label>
          <input type="email" name="alternateEmail" id="alternateEmail" />
        </div>
        <div>
          <label htmlFor="contactNo">Contact Number</label>
          <input type="tel" name="contactNo" id="contactNo" />
        </div>
      </div>
      <div className="border-2">
        <div>
          <label htmlFor="officeNo">OFFICE NO</label>
          <input type="tel" name="officeNo" id="officeNo" />
        </div>
        <div>
          <label htmlFor="panNo">PAN NO</label>
          <input type="number" name="panNo" id="panNo" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" />
        </div>
      </div>
    <input type="submit" value="EDIT" />
    </form>
    </div>
  );
};

export default UniversityInformation;
