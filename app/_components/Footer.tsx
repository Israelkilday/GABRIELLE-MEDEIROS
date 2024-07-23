"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../contexts/CursorContext";
import Socials from "./Socials";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Footer = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <footer className="z-40 w-full bg-popover xl:absolute">
      <div className="mb-6 py-4 xl:mb-0">
        <div className="container mx-auto h-full">
          <div className="h-full items-center justify-between text-left xl:flex">
            {/* phone e email */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex h-full w-full flex-col items-center justify-between gap-2 pb-3 lg:flex-row xl:w-auto xl:justify-normal xl:gap-10 xl:pb-0"
            >
              {/* phone */}
              {/* <div className="flex items-center gap-2 text-muted-foreground">
                <FaPhoneAlt />
                <span>85 9-1234-5678</span>
              </div> */}
              {/* email */}
              {/* <div className="flex items-center gap-2 text-muted-foreground">
                <IoMdMail />
                <span>info@youremail.com</span>
              </div> */}

              <div className="flex items-center gap-2 text-muted-foreground">
                <p>
                  &copy; {new Date().getFullYear()} GABRIELLE MEDIROS.{" "}
                  <br className="xl:hidden" />
                  Todos os direitos reservados.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  <Link
                    href="https://portfolioikdev-zeta-nine.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Desenvolvido por: &lt;/
                    <span className="font-logoGuys tracking-widest text-primary-foreground">
                      Israel Kilday
                    </span>
                    &gt;
                  </Link>
                </p>
              </div>
            </motion.div>

            <div className="pb-4 xl:hidden">
              <Separator />
            </div>

            {/* socials */}
            <motion.div
              className=""
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <Socials containerStyles="flex items-center justify-center gap-6 text-primary-foreground" />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
