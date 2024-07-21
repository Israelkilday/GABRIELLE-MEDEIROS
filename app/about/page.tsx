"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import StatsItem from "../_components/StatsItem";
import { useContext } from "react";
import { CursorContext } from "../contexts/CursorContext";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="flex min-h-screen items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pb-12 pt-48 xl:pb-0 xl:pt-32">
        <div className="flex h-full w-full flex-col items-center justify-between xl:flex-row">
          {/* image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="relative my-3 h-[350px] w-[250px] xl:mx-0 xl:h-[420px] xl:w-[320px]"
          >
            <Image
              src="/assets/about/img.jpg"
              fill
              quality={100}
              priority
              alt="image-page-about"
              className="object-contain"
            />
          </motion.div>
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="mx-auto flex flex-col items-start text-center xl:mx-0 xl:max-w-[650px] xl:text-left"
          >
            <h2 className="h2 mx-auto mb-6 max-w-[540px] xl:max-w-none">
              Commited to your Skins Health and Beauthy
            </h2>

            <p className="lead mx-auto mb-8 max-w-[600px] xl:mx-0">
              Toilaroded skincare solutions for a healthy complexion, offering
              customized care for radiant skin
            </p>
            {/* items */}
            <div className="mx-auto mb-14 grid grid-cols-3 gap-[30px] xl:mx-0">
              <div>
                <StatsItem countNum={13} countText="+" text="Years On Market" />
              </div>

              <div>
                <StatsItem countNum={35} countText="k+" text="Happy Clients" />
              </div>

              <div>
                <StatsItem
                  countNum={97}
                  countText="%"
                  text="Natural Igredients"
                />
              </div>
            </div>

            {/* button */}
            <button className="btn mx-auto xl:mx-0">Fale Conosco</button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
