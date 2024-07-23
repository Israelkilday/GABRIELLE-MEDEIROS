"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { CursorContext } from "../contexts/CursorContext";

const Services = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="flex min-h-screen items-center overflow-hidden"
    >
      <div className="container mx-auto flex items-center pb-12 pt-24 xl:pb-0 xl:pt-32">
        <div className="flex h-full w-full items-center justify-between">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mx-auto flex flex-col items-start text-center xl:max-w-[650px] xl:text-left"
          >
            <h2 className="h2 mx-auto mb-6 max-w-[540px] xl:max-w-none">
              Conheça nossos principais serviços.
            </h2>

            <p className="lead mx-auto max-w-[600px] text-primary-foreground xl:mx-0">
              Transforme-se com Elegância: No nosso salão, cada serviço é uma
              experiência única de beleza e bem-estar.
            </p>
            {/* items */}
            <div className="mx-auto mb-14 grid grid-cols-1 gap-[20px] md:grid-cols-2 xl:mx-0">
              {/* item */}
              <div className="flex flex-1 flex-col items-center justify-center xl:items-start">
                <div className="mb-2 flex items-center gap-[12px]">
                  <div className="h-[14px] w-[14px] rounded-bl-[28px] rounded-br-[22px] rounded-tl-[28px] rounded-tr-[4px] bg-accent"></div>

                  <h3 className="text-2xl">Service1</h3>
                </div>

                <p className="text-primary-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla harum distinctio molestiae,
                </p>
              </div>
              {/* end item */}

              {/* item */}
              <div className="flex flex-1 flex-col items-center justify-center xl:items-start">
                <div className="mb-2 flex items-center gap-[12px]">
                  <div className="h-[14px] w-[14px] rounded-bl-[28px] rounded-br-[22px] rounded-tl-[28px] rounded-tr-[4px] bg-accent"></div>

                  <h3 className="text-2xl">Service2</h3>
                </div>

                <p className="text-primary-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla harum distinctio molestiae,
                </p>
              </div>
              {/* end item */}

              {/* item */}
              <div className="flex flex-1 flex-col items-center justify-center xl:items-start">
                <div className="mb-2 flex items-center gap-[12px]">
                  <div className="h-[14px] w-[14px] rounded-bl-[28px] rounded-br-[22px] rounded-tl-[28px] rounded-tr-[4px] bg-accent"></div>

                  <h3 className="text-2xl">Service3</h3>
                </div>

                <p className="text-primary-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla harum distinctio molestiae,
                </p>
              </div>
              {/* end item */}

              {/* item */}
              <div className="flex flex-1 flex-col items-center justify-center xl:items-start">
                <div className="mb-2 flex items-center gap-[12px]">
                  <div className="h-[14px] w-[14px] rounded-bl-[28px] rounded-br-[22px] rounded-tl-[28px] rounded-tr-[4px] bg-accent"></div>

                  <h3 className="text-2xl">Service4</h3>
                </div>

                <p className="text-primary-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla harum distinctio molestiae,
                </p>
              </div>
              {/* end item */}
            </div>
            {/* btn */}
            <button className="btn mx-auto xl:mx-0">Saiba Mais</button>
          </motion.div>
          {/* image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="relative hidden h-[400px] w-[384px] xl:flex"
          >
            <Image
              src="/assets/treatments/img.jpg"
              fill
              quality={100}
              className="object-contain"
              alt="image-services"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
