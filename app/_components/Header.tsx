"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CursorContext } from "../contexts/CursorContext";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="fixed z-40 w-full bg-popover">
      <main className="container mx-auto flex items-center justify-between px-6 py-4">
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link href="/">
            <h1 className="font-logo text-3xl text-primary xl:text-4xl">
              Gabrielle Medeiros
            </h1>
          </Link>
        </motion.div>

        <div
          className="cursor-pointer xl:hidden"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className="text-3xl text-primary-foreground" />
        </div>

        <motion.section
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="botton-0 fixed bottom-0 right-0 top-0 z-50 w-[330px] bg-popover xl:hidden"
        >
          <MobileNav setMobileNav={setMobileNav} />
        </motion.section>

        <motion.section
          className="hidden xl:block"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Nav />
        </motion.section>
      </main>
    </header>
  );
};

export default Header;
