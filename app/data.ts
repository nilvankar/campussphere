interface modulesType {
  href: string;
  imageSRC: string;
  height: number;
  width: number;
  alt: string;
}
export const modules: modulesType[] = [
  {
    href: "/private/home",
    imageSRC: "/images/home_img.jpeg",
    height: 200,
    width: 200,
    alt: "Home",
  },
  {
    href: "/private/college_setup",
    imageSRC: "/images/university_logo.png",
    height: 200,
    width: 200,
    alt: "Collge setup",
  },
  {
    href: "/private/academic_setup",
    imageSRC: "/images/setup_academics.jpeg",
    height: 200,
    width: 200,
    alt: "Academics Setup",
  },
  {
    href: "/private/college_master",
    imageSRC: "/images/college_master.jpeg",
    height: 200,
    width: 200,
    alt: "Collge Master",
  },
  {
    href: "/private/admin_module",
    imageSRC: "/images/admin_logo_select.png",
    height: 200,
    width: 200,
    alt: "Admin",
  },
  {
    href: "/private/user_managment",
    imageSRC: "/images/user_mgmt.jpeg",
    height: 200,
    width: 200,
    alt: "User Managment",
  },

  {
    href: "/private/hr",
    imageSRC: "/images/hr_logo.jpg",
    height: 200,
    width: 200,
    alt: "HR",
  },
  {
    href: "/private/accounts",
    imageSRC: "/images/account_logo.jpeg",
    height: 200,
    width: 200,
    alt: "Accounts",
  },
  {
    href: "/private/college_operations",
    imageSRC: "/images/college_operations.jpeg",
    height: 200,
    width: 200,
    alt: "Collge Operations",
  },
  {
    href: "/private/academics_module",
    imageSRC: "/images/acedemics.jpeg",
    height: 200,
    width: 200,
    alt: "Academics",
  },
  {
    href: "/private/library_module",
    imageSRC: "/images/library_logo.png",
    height: 200,
    width: 200,
    alt: "Library",
  },
  {
    href: "/private/transporation",
    imageSRC: "/images/bus_logo.jpg",
    height: 200,
    width: 200,
    alt: "Transportation",
  },
  {
    href: "/private/academic_history",
    imageSRC: "/images/lead_mgmt_final.jpeg",
    height: 200,
    width: 200,
    alt: "Academic History",
  },
  {
    href: "/private/domitory",
    imageSRC: "/images/domitory.jpeg",
    height: 200,
    width: 200,
    alt: "Domitory",
  },
  {
    href: "/private/lead_mgmt_module",
    imageSRC: "/images/lead_mgmt_final.jpeg",
    height: 200,
    width: 200,
    alt: "Lead Managment",
  },
 
];

interface adminType {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}
export const adminModules: adminType[] = [
  {
    href: "/private/admin_module/account_activity",
    src: "/images/account_logo.jpeg",
    width: 200,
    height: 200,
    alt: "Account Activity",
  },
  {
    href: "/private/admin_module/college_activity",
    src: "/images/university_logo.png",
    width: 200,
    height: 200,
    alt: "College Activity",
  },
  {
    href: "/private/admin_module/personal",
    src: "/images/past_users.jpeg",
    width: 200,
    height: 200,
    alt: "Personal Activities",
  },
  {
    href: "/private/admin_module/scholasties",
    src: "/images/user_mgmt.jpeg",
    width: 200,
    height: 200,
    alt: "Scholasties",
  },
];
export const academicModule = [
  {
    href: "/private/academic_setup/setup",
    src: "/images/setup_academics.jpeg",
    width: 200,
    height: 200,
    alt: "Academics Setup",
  },
  {
    href: "/private/academic_setup/annual_checks",
    src: "/images/annual_checks_img.jpeg",
    width: 200,
    height: 200,
    alt: "Annual Checks",
  },
];
export const sideNavItems = [
  {
    href: "/private/home",

    alt: "Home",
  },
  {
    href: "/private/college_setup",

    alt: "Collge setup",
  },
  {
    href: "/private/academic_setup",

    alt: "Academics Setup",
  },
  {
    href: "/private/college_master",

    alt: "Collge Master",
  },
  {
    href: "/private/admin_module",

    alt: "Admin",
  },
  {
    href: "/private/user_managment",

    alt: "User Managment",
  },

  { href: "/private/hr", alt: "HR" },
  {
    href: "/private/accounts",

    alt: "Accounts",
  },
  {
    href: "/private/college_operations",

    alt: "Collge Operations",
  },
  {
    href: "/private/academics_module",

    alt: "Academics",
  },
  {
    href: "/private/library_module",

    alt: "Library",
  },
  {
    href: "/private/transporation",

    alt: "Transportation",
  },
  {
    href: "/private/academic_history",

    alt: "Academic History",
  },
  {
    href: "/private/domitory",

    alt: "Domitory",
  },
  {
    href: "/private/lead_mgmt_module",

    alt: "Lead Managment",
  },
  { href: "/private/reports", alt: "Reports" },
];

// nav li
interface liTypes {
  href: string;
  alt: string;
}
export const productsList: liTypes[] = [
  { alt: "School Management System", href: "/" },
  { alt: "Collge Management System", href: "/" },
  { alt: " University Management System", href: "/" },
  { alt: "Coaching   Management System", href: "/" },
];
export const solutionList: liTypes[] = [
  { alt: "Student Information System", href: "/" },
  { alt: "Fees Collection", href: "/" },
  { alt: "Online Examination", href: "/" },
  { alt: "Online Student Admission", href: "/" },
  { alt: "Classroom Management System", href: "/" },
  { alt: "Library Management System", href: "/" },
  { alt: "Outcome based Education Software", href: "/" },
  { alt: "Account and Billing", href: "/" },
  { alt: "HR", href: "/" },
  { alt: "Mobile App", href: "/" },
];
export const Companylist: liTypes[] = [
  { alt: "About Us", href: "/" },
  { alt: "Leaderships", href: "/" },
  { alt: "Clients", href: "/" },
  { alt: "Partners", href: "/" },
  { alt: "Global Partners", href: "/" },
  { alt: "Media Coverage", href: "/" },
  { alt: "Carrier", href: "/" },
  { alt: "FAQs", href: "/" },
];

export const Vehical = [
  { label: "Vehical Name" },
  { label: "Vehical Type" },
  { label: "Max Capacity" },
  { label: " Route Name" },
  { label: " Allocated Capicity" },
  { label: " Staff Count" },
  { label: "Student Count" },
  { label: " Available Seats" },
];
export const Domitory = [
  { label: "Building Name" },
  { label: "Domitory Type" },
  { label: "UserId" },
  { label: "UserName" },
  { label: "DegreeCode" },
  { label: "CourseYear" },
  { label: "Section" },
  { label: "Floor No" },
  { label: "Room Type" },
  { label: "Room No" },
  { label: "Bed No" },
];
export const Toppers = [
  { label: "DegreeCode" },
  { label: "CourseYear" },
  { label: "Section" },
  { label: "Name" },
  { label: "Gender" },
  { label: "Grade" },
  { label: "CGPA" },
  { label: "Rank" },

  { label: "Percentage" },
];
export const Visitor = [
  { label: "Sno" },
  { label: "UserName" },
  { label: "Visitor Name" },
  { label: "Department" },
  { label: "Date" },
  { label: "Mobile No" },
  { label: "Meeting Purpose" },
];
export const userStatistics = [
  { label: "Branch Name" },
  { label: " Degreecode" },
  { label: " CourseYear" },
  { label: "Section" },
  { label: " No.Male" },
  { label: " No.Female" },
  { label: "No.Doms" },
  { label: "Transporation" },
  { label: "Total Count" },
];


export const weekDays = [
  { label: "Monday" },
  { label: "TuesDay" },
  { label: "WednesDay" },
  { label: "ThursDay" },
  { label: "Friday" },
  { label: "SaturDay" },
];
export const teaching_plan_summary = [
  { label: "Subject" },
  { label: "Lesson Name" },
  { label: "Lesson No" },
  { label: "Lesson Plan" },
  { label: "No Of Period" },
  { label: "From Date" },
  { label: "To Date" },
  { label: "Status" },
  { label: "Actual completion date" },
];
export const screens = [
  { label: "Academic Batch", href: "/private/academic_setup/setup/batch" },
  {
    label: "Subject Management",
    href: "/private/academic_setup/setup/subject",
  },
  {
    label: "Section Management",
    href: "/private/academic_setup/setup/section",
  },
  {
    label: "Student to Section",
    href: "/private/academic_setup/setup/student_section",
  },
  {
    label: "Faculty to Subject",
    href: "/private/academic_setup/setup/faculty_subject",
  },
  {
    label: "Collge Calander",
    href: "/private/academic_setup/setup/collge_calender",
  },
  {
    label: "Timetable Configuration",
    href: "/private/academic_setup/setup/timetableconfig",
  },
  {
    label: "Timetable Details",
    href: "/private/academic_setup/setup/timetabledetail",
  },
  { label: "Timetable", href: "/private/academic_setup/setup/timetable" },
  {
    label: "Course Design",
    href: "/private/academic_setup/setup/course_design",
  },
];
export const userMgmtModules = [
  {
    href: "/private/user_managment/staff_mgmt",
    src: "/images/staff_image.jpeg",
    height: 200,
    width: 200,
    alt: "Staff Management",
  },
  {
    href: "/private/user_managment/job_placement",
    src: "/images/jobs_img.jpeg",
    height: 200,
    width: 200,
    alt: "Job and Placement",
  },
  {
    href: "/private/user_managment/student_mgmt",
    src: "/images/student_logo.jpg",
    height: 200,
    width: 200,
    alt: "Student Management",
  },
  {
    href: "/private/user_managment/student_attendance",
    src: "/images/staff_attendance.jpeg",
    height: 200,
    width: 200,
    alt: "Student Attendance",
  },
  {
    href: "/private/user_managment/past_users",
    src: "/images/past_users.jpeg",
    height: 200,
    width: 200,
    alt: "Past Users",
  },
  {
    href: "/private/user_managment/authorization",
    src: "/images/auth_img.jpeg",
    height: 200,
    width: 200,
    alt: "Authorization",
  },
];
