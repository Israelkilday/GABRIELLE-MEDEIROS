"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { CursorContext } from "../contexts/CursorContext";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="flex min-h-screen items-center overflow-hidden"
    >
      <div className="container mx-auto pb-12 pt-48 xl:pb-0 xl:pt-32">
        <div className="flex h-full flex-col gap-12 xl:flex-row">
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex flex-1 flex-col justify-center"
          >
            <h3 className="h3 mb-8 text-center xl:text-left">
              Informações de contato
            </h3>
            {/* items */}
            <div className="item flex flex-col items-center gap-12 xl:items-start">
              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative h-[36px] w-[36px]">
                  <Image
                    src="/assets/contact/pin.svg"
                    fill
                    alt="icon-contact"
                  />
                </div>

                <div className="flex-1 pt-1">
                  <h4 className="h4 mb-2">Endereço</h4>

                  <p className="leading-relaxed">
                    123/45 Elm St, Suite 800
                    <br />
                    Caucai CE, 61601716
                  </p>
                </div>
              </div>
              {/* end item */}

              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative h-[36px] w-[36px]">
                  <Image
                    src="/assets/contact/phone.svg"
                    fill
                    alt="icon-contact"
                  />
                </div>

                <div className="flex-1 pt-1">
                  <h4 className="h4 mb-2">Telefone</h4>
                  <div className="flex-1 pt-1">
                    <p>Fixo: (85) 9-1234 5678</p>
                    <p>Zap: (85) 9-1234 5678</p>
                  </div>
                </div>
              </div>
              {/* end item */}

              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative h-[36px] w-[36px]">
                  <Image
                    src="/assets/contact/email.svg"
                    fill
                    alt="icon-contact"
                  />
                </div>

                <div className="flex-1 pt-1">
                  <h4 className="h4 mb-2">Email</h4>

                  <div className="flex flex-col gap-1">
                    <p>info@seuemail.com</p>
                    <p>suport@seuemail.com</p>
                  </div>
                </div>
              </div>
              {/* end item */}
              <button className="btn mx-auto xl:mx-0">
                Agende seu Serviço
              </button>
            </div>
          </motion.div>
          {/* map */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex-1"
          >
            <div className="mx-auto w-full max-w-[580px] bg-[#f0cfbc] p-10 xl:mx-0">
              <h3 className="h3 mb-8 text-center">Visitenos</h3>
              mapa
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
