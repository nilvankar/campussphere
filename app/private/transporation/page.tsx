import Link from "next/link";
import React from "react";
import Image from "next/image";
const TransporationModule = () => {
  return (
    <div className="flex justify-center flex-row items-center">
      <div className="brightness-90 hover:brightness-100 mx-32 mt-10 bg-blue-600">
        <Link
          className="text-white"
          style={{ textDecoration: "none" }}
          href="/transporation/route_mgmt"
        >
          <Image
            src="/images/bus_route.jpeg"
            alt="Vehical Routes"
            height={200}
            width={200}
          />
          <span>Vehical Routes</span>
        </Link>
      </div>

      <div className="brightness-90 hover:brightness-100 mx-32 mt-10 bg-red-600">
        <Link
          className="text-white"
          style={{ textDecoration: "none" }}
          href="/transporation/vehical_activity"
        >
          <Image
            src="/images/bus_logo.jpg"
            alt="Vehical Activity"
            height={200}
            width={200}
          />
          <span>Vehical Activity</span>
        </Link>
      </div>
      <div className="brightness-90 hover:brightness-100 mx-32 mt-10 bg-green-400 ">
        <Link
          className="text-white"
          style={{ textDecoration: "none" }}
          href="/transporation/vehical_mgmt"
        >
          <Image
            src="/images/vehical_mgmt.jpeg"
            alt="Vehical Managment"
            height={200}
            width={200}
          />
          <span>Vehical Managment</span>
        </Link>
      </div>
    </div>
  );
};

export default TransporationModule;
