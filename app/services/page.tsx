"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { CursorContext } from "../contexts/CursorContext";
import Link from "next/link";

const Services = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="flex min-h-screen items-center overflow-hidden"
    >
      <div className="container mx-auto flex items-center pb-12 pt-24 xl:pb-0 xl:pt-32">
        <div className="flex h-full w-full items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mx-auto flex flex-col items-start text-center xl:max-w-[720px] xl:text-left"
          >
            <h2 className="h2 mx-auto mb-6 max-w-[540px] xl:mx-0 xl:max-w-none">
              Conheça nossos principais serviços.
            </h2>

            <section className="mx-auto mb-8 mt-0 grid grid-cols-1 gap-[20px] md:grid-cols-2 xl:mx-0">
              <div className="flex flex-1 flex-col items-center justify-center xl:items-start">
                <div className="mb-2 flex items-center gap-[12px]">
                  <div className="h-[14px] w-[14px] rounded-bl-[28px] rounded-br-[22px] rounded-tl-[28px] rounded-tr-[4px] bg-accent"></div>

                  <h3 className="text-2xl">Corte de Cabelo</h3>
                </div>

                <p className="text-primary-foreground">
                  Serviços de corte de cabelo que variam desde cortes clássicos
                  até os mais modernos, sempre considerando o formato do rosto e
                  o estilo pessoal de cada cliente.
                </p>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center xl:items-start">
                <div className="mb-2 flex items-center gap-[12px]">
                  <div className="h-[14px] w-[14px] rounded-bl-[28px] rounded-br-[22px] rounded-tl-[28px] rounded-tr-[4px] bg-accent"></div>

                  <h3 className="text-2xl">Depilação</h3>
                </div>

                <p className="text-primary-foreground">
                  Desperte a sua beleza natural com a nossa depilação!
                  Utilizamos técnicas modernas e produtos de alta qualidade para
                  garantir um resultado impecável e duradouro.
                </p>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center xl:items-start">
                <div className="mb-2 flex items-center gap-[12px]">
                  <div className="h-[14px] w-[14px] rounded-bl-[28px] rounded-br-[22px] rounded-tl-[28px] rounded-tr-[4px] bg-accent"></div>

                  <h3 className="text-2xl">Tratamentos Capilares</h3>
                </div>

                <p className="text-primary-foreground">
                  Inclui hidratação profunda, tratamento personalizado, além de
                  terapias específicas para combater a queda de cabelo e
                  estimular o crescimento.
                </p>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center xl:items-start">
                <div className="mb-2 flex items-center gap-[12px]">
                  <div className="h-[14px] w-[14px] rounded-bl-[28px] rounded-br-[22px] rounded-tl-[28px] rounded-tr-[4px] bg-accent"></div>

                  <h3 className="text-2xl">Escova e Finalização</h3>
                </div>

                <p className="text-primary-foreground">
                  Serviços de escova (escova lisa, modelada, ondulada) e
                  finalização para eventos especiais. Técnicas de secagem e
                  modelagem que proporcionam um acabamento impecável.
                </p>
              </div>
            </section>

            <motion.section
              initial={{ opacity: 0, x: 60 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
              }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="relative mx-auto mb-9 flex h-[400px] w-[360px] xl:hidden"
            >
              <Image
                src="/assets/treatments/img.jpg"
                fill
                quality={100}
                className="object-contain"
                alt="image-services"
              />
            </motion.section>

            <button
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="btn mx-auto xl:mx-0 xl:mb-10"
            >
              <Link
                href="https://www.instagram.com/gabriellemedeiros.oficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba Mais
              </Link>
            </button>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="relative hidden h-[400px] w-[425px] xl:flex"
          >
            <Image
              src="/assets/treatments/img.jpg"
              fill
              quality={100}
              className="object-contain xl:translate-y-[-30px]"
              alt="image-services"
            />
          </motion.section>
        </div>
      </div>
    </motion.main>
  );
};

export default Services;
