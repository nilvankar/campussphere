import React from "react";
import Image from "next/image";
const ProfilePage = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <Image
          src={"/images/student_logo.jpg"}
          alt="Profile Image"
          height={150}
          width={150}
          className="border-2 rounded-full mt-28"
        />
      </div>
      <div>
        <h1 className="mt-12">John Don</h1>
        <label className="block" htmlFor="admissionNumber">
          AdmisionNumber
        </label>
        <label className="block" htmlFor="applicationNumber">
          Application Number
        </label>
        <label className="block" htmlFor="father">
          Father/Guardian Name
        </label>
        <label className="block" htmlFor="Fee">
          Fee Category
        </label>
        <label className="block" htmlFor="dob">
          DOB
        </label>
        <label className="block" htmlFor="gender">
          Gender
        </label>
        <label className="block" htmlFor="doAdmission">
          Date Of Admission
        </label>
        <label className="block" htmlFor="nationality">
          Nationality
        </label>
        <label className="block" htmlFor="religion">
          Religion
        </label>
        <label className="block" htmlFor="address">
          Current Address
        </label>
        </div>

      <div>  <label className="block mt-12" htmlFor="permenantAddress">
          Permanent Address
        </label>
        <label className="block" htmlFor="city">
          City
        </label>
        <label className="block" htmlFor="state">
          State
        </label>
        <label className="block" htmlFor="Zip">
          ZipCode
        </label>
        <label className="block" htmlFor="contactNO">
          Contact No
        </label>
        <label className="block" htmlFor="email">
          Email Address
        </label>
        <label className="block" htmlFor="userId">
          UserId
        </label>
        <label className="block" htmlFor="branch">
          BranchName
        </label>
        <label className="block" htmlFor="degreeCode">
          DegreeCode
        </label>
        <label className="block" htmlFor="courseYear">CourseYear</label>
        <label className="block" htmlFor="enrollmentNo">Enrollment NO</label>
    </div>
    </div>
  );
};

export default ProfilePage;
