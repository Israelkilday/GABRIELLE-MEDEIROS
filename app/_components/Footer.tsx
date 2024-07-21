"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react";
import { CursorContext } from "../contexts/CursorContext";
// import { AiOutlineMenu } from "react-icons/ai";
// import MobileNav from "./MobileNav";
// import Nav from "./Nav";
import Socials from "./Socials";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  // const [mobileNav, setMobileNav] = useState(false);

  return (
    <footer className="z-40 w-full bg-popover">
      {/* top bar */}
      <div className="mb-6 py-4 xl:mb-[50px] xl:h-[50px] xl:py-0">
        <div className="container mx-auto h-full">
          <div className="h-full items-center justify-between text-left xl:flex">
            {/* socials */}
            <motion.div
              className="mb-4 xl:mb-0"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <Socials containerStyles="flex gap-6 text-primary-foreground" />
            </motion.div>
            {/* phone e email */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex h-full w-full flex-col items-start justify-between gap-2 lg:flex-row xl:w-auto xl:items-center xl:justify-normal xl:gap-6"
            >
              {/* phone */}
              <div className="flex items-center gap-2 text-accent">
                <FaPhoneAlt />
                <span>85 9-1234-5678</span>
              </div>
              {/* email */}
              <div className="flex items-center gap-2 text-accent">
                <IoMdMail />
                <span>info@youremail.com</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
