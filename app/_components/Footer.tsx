"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../contexts/CursorContext";
import Socials from "./Socials";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Separator } from "./ui/separator";

const Footer = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <footer className="z-40 w-full bg-popover">
      <div className="mb-6 py-4 xl:mb-[50px] xl:h-[50px] xl:py-0">
        <div className="container mx-auto h-full">
          <div className="h-full items-center justify-between text-left xl:flex">
            {/* phone e email */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex h-full w-full flex-col items-start justify-between gap-2 pb-3 lg:flex-row xl:w-auto xl:items-center xl:justify-normal xl:gap-6 xl:pb-0"
            >
              {/* phone */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <FaPhoneAlt />
                <span>85 9-1234-5678</span>
              </div>
              {/* email */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <IoMdMail />
                <span>info@youremail.com</span>
              </div>
            </motion.div>

            <div className="pb-4 xl:hidden">
              <Separator />
            </div>

            {/* socials */}
            <motion.div
              className=" "
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <Socials containerStyles="flex gap-6 text-primary-foreground" />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
