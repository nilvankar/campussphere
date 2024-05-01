import Link from "next/link";
import React from "react";
import Image from "next/image";
const AcademicsHistoryModule = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="brightness-90 hover:brightness-100 bg-orange-600 mt-10 mx-32">

      <Link className="text-white" style={{textDecoration:"none"}} href="/private/academic_history/history">
        <Image src="/images/academic_history.jpeg" alt="Academic History" width={200} height={200} />
        Academic History</Link>
      </div>
      <div className="brightness-90 hover:brightness-100 bg-orange-600 mt-10 mx-32">

        <Image src="/images/course_lms.jpeg" alt="No Exam Managment" width={200} height={200} />
      <Link className="text-white" style={{textDecoration:"none"}} href="/private/academic_history/no_exam_mgmt">
        No Exam Managment</Link>
      </div>
    </div>
  );
};

export default AcademicsHistoryModule;
