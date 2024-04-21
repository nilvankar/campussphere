import Link from "next/link";
import React from "react";
import Image from "next/image";
const HRModule = () => {
  return (
    <div>
      <Link className="text-black" style={{textDecoration:"none"}} href="/hr/leave_mgmt">
        <Image
          src="/images/leave_mgmt.jpeg"
          alt="Leave Management"
          width={200}
          height={200}
        />Leave Management
      </Link>
      <Link className="text-black" style={{textDecoration:"none"}} href="/hr/staff_attendance">
        <Image
          src="/images/staff_attendance.jpeg"
          alt="Staff Attendance"
          width={200}
          height={200}
        />Staff Attendance
      </Link>
      <Link className="text-black" style={{textDecoration:"none"}} href="/hr/staff_payoff">
        <Image src="/images/account_logo.jpeg" alt="Staff Payoff" width={200} height={200} />
        Staff Payoff
      </Link>
    </div>
  );
};

export default HRModule;
