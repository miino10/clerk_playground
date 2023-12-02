import React from "react";
import { SignUp } from "@clerk/nextjs";

function Signup() {
  return (
    <div className="flex justify-center items-center">
      <SignUp />
    </div>
  );
}

export default Signup;
