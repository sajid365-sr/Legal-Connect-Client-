import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const UserAction = () => {
  return (
    <div className=" flex gap-3 justify-center items-center mt-10 md:mt-0">
      <Link href="/login">
        <Button variant="outline" className="text-base">
          Login
        </Button>
      </Link>

      <Link href="/register" className="text-lg">
        <Button className="text-base">Create Account</Button>
      </Link>
    </div>
  );
};

export default UserAction;
