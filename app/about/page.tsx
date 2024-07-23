"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import StatsItem from "../_components/StatsItem";
import { useContext } from "react";
import { CursorContext } from "../contexts/CursorContext";
import Link from "next/link";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="flex min-h-screen items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pb-12 pt-28 xl:pb-0 xl:pt-24">
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
            className="relative my-3 h-[350px] w-[250px] xl:mx-0 xl:h-[430px] xl:w-[330px]"
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
              Transformando Cabelos, Realçando Confiança desde 2011
            </h2>

            <p className="lead mx-auto mb-8 max-w-[600px] text-primary-foreground xl:mx-0">
              Com mais de uma década de experiência no ramo, nosso salão de
              beleza se destaca pelo alisamento capilar, tendo conquistado
              milhares de clientes satisfeitos. Orgulhamo-nos de utilizar
              majoritariamente produtos naturais, garantindo resultados
              excepcionais e saudáveis para os cabelos.
            </p>
            {/* items */}
            <div className="mx-auto mb-8 grid grid-cols-3 gap-[30px] xl:mx-0">
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
            <button
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="btn btn-lg"
            >
              <Link
                href="https://www.instagram.com/gabriellemedeiros.oficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale Conosco
              </Link>
            </button>
            {/* <button className="btn mx-auto xl:mx-0">Fale Conosco</button> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
