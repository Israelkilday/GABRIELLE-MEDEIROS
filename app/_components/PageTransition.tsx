"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const paThName = usePathname();

  return (
    <AnimatePresence>
      <motion.div
        key={paThName}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 1, ease: "easeIn" },
        }}
        className="pointer-events-none fixed top-0 z-30 h-screen w-screen bg-white xl:z-40"
      />
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
