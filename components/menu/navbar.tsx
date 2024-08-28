"use client";

import React from "react";
import MainNav from "./main-nav";
import UserAction from "./user-action";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import useMediaQuery from "@/hooks/use-media-query";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 500px)");

  return (
    <div className="flex items-center justify-between container  py-3">
      <Link href="/" className="font-bold">
        <span className="text-orange-700 sm:text-lg lg:text-2xl">Legal</span>
        <span className="text-gray-900 sm:text-2xl lg:text-4xl">Connect</span>
      </Link>

      <div className="hidden md:block">
        <MainNav />
      </div>

      <div className="hidden md:block">
        <UserAction />
      </div>

      {/* ======================= Mobile Menu =================== */}

      {isMobile && <MobileMenu />}
    </div>
  );
};

export default Navbar;
