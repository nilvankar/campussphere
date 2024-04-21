import Link from "next/link";
import React from "react";
import Image from "next/image";
const TransporationModule = () => {
  return (
    <div>
      <Link
        className="text-black"
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
      <Link
        className="text-black"
        style={{ textDecoration: "none" }}
        href="/transporation/vehical_activity"
      >
        <Image src="/images/bus_logo.jpg" alt="Vehical Activity" height={200} width={200} />
        <span>Vehical Activity</span>
      </Link>
      <Link
        className="text-black"
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
  );
};

export default TransporationModule;
