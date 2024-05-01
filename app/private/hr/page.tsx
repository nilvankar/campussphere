import Link from "next/link";
import React from "react";
import Image from "next/image";
const HRModule = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="brightness-90 hover:brightness-100 mx-10 mt-32 bg-violet-400">

      <Link className="text-white" style={{textDecoration:"none"}} href="/hr/leave_mgmt">
        <Image
          src="/images/leave_mgmt.jpeg"
          alt="Leave Management"
          width={200}
          height={200}
          />Leave Management
      </Link>
          </div>
          <div className="brightness-90 hover:brightness-100 mx-10 mt-32 bg-red-400">

      <Link className="text-white" style={{textDecoration:"none"}} href="/hr/staff_attendance">
        <Image
          src="/images/staff_attendance.jpeg"
          alt="Staff Attendance"
          width={200}
          height={200}
          />Staff Attendance
      </Link>
          </div>
          <div className="brightness-90 hover:brightness-100 mx-10 mt-32 bg-green-400">

      <Link className="text-white" style={{textDecoration:"none"}} href="/hr/staff_payoff">
        <Image src="/images/account_logo.jpeg" alt="Staff Payoff" width={200} height={200} />
        Staff Payoff
      </Link>
          </div>
    </div>
  );
};

export default HRModule;
