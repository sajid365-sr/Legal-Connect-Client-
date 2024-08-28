"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X, Menu } from "lucide-react";
import MainNav from "./main-nav";
import UserAction from "./user-action";

const MobileMenu = () => {
  return (
    <div className="relative ">
      <Drawer direction="right">
        <DrawerTrigger>
          <Menu />
        </DrawerTrigger>
        <DrawerContent className="h-[90%] mt-0 top-0 rounded-l-3xl rounded-r-none">
          <MainNav />
          <UserAction />
          <DrawerFooter className="fixed top-5 left-5">
            <DrawerClose>
              <X />
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
