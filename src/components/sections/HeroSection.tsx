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


export const HeroSection = () => {
  return (
    <header className="relative hero">
      <div className="relative container h-full">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute w-full h-full flex flex-col gap-4 items-start justify-center z-20"
        >
          <h1 className="hero-name">
            Mahadi Hasan
          </h1>
          <div className="font-extralight text-base md:text-2xl text-light py-4">
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
        <motion.div className="absolute bottom-0 right-0 bg-red-300/60 w-full z-10">
          <div className="relative w-full h-full flex justify-end items-end">
            <Image
              src="/assets/images/profile.png"
              // objectFit="content"
              fill
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Mahadi Hasan portrait" />
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-[48%] z-10">
        <ScrollDown />
      </div>
      <BackgroundBeams />
    </header>
  );
}