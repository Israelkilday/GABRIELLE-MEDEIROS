"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { CursorContext } from "../contexts/CursorContext";
import Link from "next/link";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="flex min-h-screen items-center overflow-hidden"
    >
      <div className="container mx-auto pb-12 pt-24 xl:pb-0 xl:pt-32">
        <div className="flex h-full flex-col gap-8 xl:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex flex-1 flex-col justify-center"
          >
            <motion.h3
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h3 mb-7 text-center xl:text-left"
            >
              Informações de contato
            </motion.h3>

            <div className="item mx-auto flex flex-col items-start gap-8 xl:mx-0 xl:items-start">
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="flex items-start gap-4"
              >
                <div className="relative h-[36px] w-[36px]">
                  <Image
                    src="/assets/contact/email.svg"
                    fill
                    alt="icon-contact"
                  />
                </div>

                <div className="flex-1 pt-1">
                  <h4 className="h4">Email</h4>

                  <div className="flex flex-col gap-1 text-primary-foreground">
                    <p>gabrielleme@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="flex items-start gap-4"
              >
                <div className="relative h-[36px] w-[36px]">
                  <Image
                    src="/assets/contact/phone.svg"
                    fill
                    alt="icon-contact"
                  />
                </div>

                <div className="flex-1 pt-1">
                  <h4 className="h4 mb-2">Telefone</h4>
                  <div className="flex-1 pt-1 text-primary-foreground">
                    <p>+55 (85) 9-8627 50742</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="flex items-start gap-4"
              >
                <div className="relative h-[36px] w-[36px]">
                  <Image
                    src="/assets/contact/pin.svg"
                    fill
                    alt="icon-contact"
                  />
                </div>

                <div className="flex-1 pt-1">
                  <h4 className="h4 mb-2">Endereço</h4>

                  <p className="leading-relaxed text-primary-foreground">
                    R. 3, 299 - Curicaca, <br />
                    Caucaia - CE, 61610-215
                  </p>
                </div>
              </motion.div>

              <button
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="btn mx-auto mb-2 xl:mx-0 xl:mb-10"
              >
                <Link
                  href="https://www.instagram.com/gabriellemedeiros.oficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agende seu Serviço
                </Link>
              </button>
            </div>
          </motion.div>

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
            <div className="mx-auto w-full max-w-[580px] xl:mx-0 xl:translate-x-[-25px] xl:translate-y-[60px]">
              <div
                className="relative overflow-hidden rounded-xl"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.4368293994994!2d-38.661273300000005!3d-3.7144778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0b53723897e59%3A0x9878f8f29075266f!2sR.%203%2C%20299%20-%20Curicaca%2C%20Caucaia%20-%20CE%2C%2061610-215!5e0!3m2!1spt-BR!2sbr!4v1721769336214!5m2!1spt-BR!2sbr"
                  width="600"
                  height="450"
                  loading="lazy"
                  className="absolute left-0 top-0 h-full w-full border-0"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
