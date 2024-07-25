"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { CursorContext } from "../contexts/CursorContext";
import Link from "next/link";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.main
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

            <section className="item mx-auto flex flex-col items-start gap-8 xl:mx-0 xl:items-start">
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
                  <Link
                    href="https://maps.app.goo.gl/gYkpPPJHbuBBJ2A28"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className="h4 mb-2">Endereço</h4>

                    <p className="leading-relaxed text-primary-foreground">
                      R. 3, 307 - Curicaca, <br />
                      Caucaia - CE, 61610-215
                    </p>
                  </Link>
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
            </section>
          </motion.div>

          <motion.section
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
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15925.747339252215!2d-38.6613298!3d-3.7144766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0b561596310f1%3A0x2d1a53435b69ae99!2sSal%C3%A3o%20Gabrielle%20Medeiros%20especialista%20em%20alisamento!5e0!3m2!1spt-BR!2sbr!4v1721935084968!5m2!1spt-BR!2sbr"
                  width="600"
                  height="450"
                  loading="lazy"
                  className="absolute left-0 top-0 h-full w-full border-0"
                ></iframe>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
