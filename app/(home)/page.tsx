"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "../contexts/CursorContext";
import Image from "next/image";
import ModalVideo from "../_components/ModalVideo";
// import Footer from "../_components/Footer";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2 } }}
        className="min-h-svh items-center xl:flex"
      >
        <div className="container mx-auto">
          <div className="flex h-full flex-col items-center xl:flex-row">
            {/* text */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 2, duration: 1, ease: "easeInOut" },
              }}
              className="w-full pt-[100px] text-center xl:w-[500px] xl:pt-[120px] xl:text-left"
            >
              <motion.h1
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="h1 mb-3 xl:mb-6"
              >
                Especialista em Alisamento
                <br /> Personalizado
              </motion.h1>

              <motion.p
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="lead mx-auto max-w-xl text-primary-foreground"
              >
                Descubra o alisamento perfeito para você com nossa técnica
                exclusiva, garantindo resultados incríveis e saudáveis para
                todos os tipos de cabelo.
              </motion.p>

              <div className="mx-auto flex max-w-max flex-col items-center gap-6 xl:mx-0 xl:flex-row">
                <motion.button
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaveHandler}
                  className="btn btn-lg"
                >
                  Reserva e Marcação
                </motion.button>

                <motion.div
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaveHandler}
                >
                  <ModalVideo />
                </motion.div>
              </div>
            </motion.div>
            {/* image */}
            <div className="flex-1 overflow-hidden">
              <motion.div
                // initial={{ opacity: 0, bottom: "-100%" }}
                initial={{ opacity: 0, translateY: "100%" }}
                animate={{
                  opacity: 1,
                  // bottom: 0,
                  translateY: "0%",
                  transition: { delay: 2.4, duration: 1.2, ease: "easeInOut" },
                }}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                // className="absolute bottom-0 right-[100px] hidden xl:flex"
                className=""
              >
                <Image
                  src={"/assets/home/img.png"}
                  width={564}
                  height={350}
                  quality={100}
                  alt="Imagem Home"
                  className=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* <Footer /> */}
    </>
  );
};

export default Home;