import Link from "next/link";
import React from "react";
import Image from "next/image";
const LibraryModule = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="brightness-90 mt-32 mx-32 hover:brightness-100 bg-green-400">
        <Link
          className="text-white"
          style={{ textDecoration: "none" }}
          href="/private/library_module/library_page"
        >
          <Image
            src="/images/library_select_logo.jpeg"
            alt="Library"
            height={200}
            width={200}
          />
          <span>Library</span>
        </Link>
      </div>
      <div className="brightness-90 mt-32 mx-32 hover:brightness-100 bg-green-400">
        <Link
          className="text-white"
          style={{ textDecoration: "none" }}
          href="/private/library_module/library_activity"
        >
          <Image
            src="/images/library_logo.png"
            alt="Library Activity"
            height={200}
            width={200}
          />
          <span>Library Activity</span>
        </Link>
      </div>
    </div>
  );
};

export default LibraryModule;
