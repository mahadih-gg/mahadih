"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollDown from "../ui/ScrollDown";
import IcoLinkedIn from "@/assets/icons/IcoLinkedIn";
import IcoGithub from "@/assets/icons/IcoGithub";
import IcoWhatsApp from "@/assets/icons/IcoWhatsApp";
import IcoMail from "@/assets/icons/IcoMail";


const HeroSection = () => {
  return (
    <section className="relative hero">
      <div className="relative container h-full">

        <div className="absolute top-0 h-full z-20">
          <motion.div
            initial={{ opacity: 0.0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="h-full flex flex-col gap-4 items-start justify-center"
          >

            <h1 className="hero-name">Mahadi Hasan</h1>
            <div className="font-extralight text-base md:text-xl text-light py-4">
              Experienced front-end  developer <br /> focused on building accessible digital experiences
            </div>

            <div>
              <ul className="hero__links">
                <li>
                  <a href="#">
                    <IcoMail />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IcoLinkedIn />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IcoGithub />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IcoWhatsApp />
                  </a>
                </li>
              </ul>
            </div>

          </motion.div>
        </div>
        {/* bottom-56 sm:bottom-48 md:bottom-28 lg:bottom-0 right-2 md:right-8 lg:right-0 */}
        <motion.div className="absolute w-full h-full z-10">
          <div className="relative w-full h-full flex justify-center lg:justify-end items-center pt-10">
            <img src="/assets/images/profile.png" className="w-full sm:w-4/5 lg:w-3/5 xl:w-2/5 grayscale lg:grayscale-0 opacity-30 lg:opacity-100" alt="Mahadi Hasan portrait" />
          </div>
        </motion.div>

      </div>
      <div className="absolute bottom-10 left-[48%] z-10">
        <ScrollDown />
      </div>
      <BackgroundBeams />
    </section>
  );
}

export default HeroSection;