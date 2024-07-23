"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const animation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "-100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const Transition = () => {
  const pathName = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName}>
          <div className="top:0 left:0 pointer-events-none fixed right-0 z-50 flex h-screen w-screen">
            <motion.div
              variants={animation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.2,
              }}
              // className="relative h-full w-full bg-[#e2cfbd]"
              className="relative h-full w-full bg-popover"
            />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Transition;
