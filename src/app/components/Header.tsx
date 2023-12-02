"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function Header() {
  const { user, isLoaded } = useUser();
  return (
    <div className="bg-green-200 flex justify-between items-center p-2">
      {isLoaded && user ? (
        <div className=" flex items-center w-full  justify-between bg-red-400 p-1 ">
          <div className="flex gap-2">
            <Link href={"/"}>Home</Link>
            <Link href={"/Dashboard"}>dashboard</Link>
          </div>

          <div>
            {" "}
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      ) : (
        <div className=" flex items-center w-full  justify-between  p-1">
          <div>
            <Link href={"/"}>Home</Link>
          </div>
          <div className=" w-full justify-end flex gap-2 p-1">
            {" "}
            <button className="bg-yellow-300 p-2 rounded-md">
              <Link href={"/sign-in"}>signIn</Link>
            </button>
            <button className="bg-red-300 p-2 rounded-md">
              <Link href={"/sign-up"}>signup</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
