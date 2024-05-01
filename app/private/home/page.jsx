import React from "react";
import Link from "next/link";
import Image from "next/image";
const HomeMainPage = () => {
  return (
    <div className="flex flex-row justify-center">
    <div className="brightness-90 hover:brightness-100 mt-32 mx-10 bg-red-500">
    <Link
    className="text-white"
    style={{ textDecoration: "none" }}
    href="/private/home/dashboard"
    >
    <Image
    src="/images/dashbord.png"
    height={200}
    width={200}
    alt="Dashboard"
    />
    <span>Dashboard</span>
    </Link>
    </div>
    <div className="brightness-90 hover:brightness-100 mt-32 mx-10 bg-sky-400">
    <Link
    className="text-white"
    style={{ textDecoration: "none" }}
    href="/private/home/statistics"
    >
    <Image
    src="/images/statistics.png"
    height={200}
    width={200}
    alt="Statistics"
    />
    Statistics
    </Link>
    </div>
    </div>
  );
};

export default HomeMainPage;
