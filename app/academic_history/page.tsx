import Link from "next/link";
import React from "react";
import Image from "next/image";
const AcademicsHistoryModule = () => {
  return (
    <div>
      <Link className="text-black" style={{textDecoration:"none"}} href="/academic_history/history">
        <Image src="/images/academic_history.jpeg" alt="Academic History" width={200} height={200} />
        Academic History</Link>
      <Link className="text-black" style={{textDecoration:"none"}} href="/academic_history/no_exam_mgmt">
        <Image src="/images/course_lms.jpeg" alt="No Exam Managment" width={200} height={200} />
        No Exam Managment</Link>
    </div>
  );
};

export default AcademicsHistoryModule;
