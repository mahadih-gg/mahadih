"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollDown from "../ui/ScrollDown";


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
          className="absolute w-full h-full flex flex-col gap-4 items-start justify-center z-10"
        >
          <h1 className="hero-name">
            Mahadi Hasan
          </h1>
          <div className="font-extralight text-base md:text-2xl text-light py-4">
            Experienced front-end  developer <br /> focused on building accessible digital experiences
          </div>
        </motion.div>
        {/* <motion.div className="absolute bottom-0 right-0">
          <div>
            <Image src="/assets/images/profile.png" width="600" height="600" alt="Mahadi Hasan portrait" />
          </div>
        </motion.div> */}
      </div>
      <div className="absolute bottom-10 left-[48%] z-10">
        <ScrollDown />
      </div>
      <BackgroundBeams />
      {/* <AuroraBackgroundDemo /> */}
    </header>
  );
}


export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-light text-center">
          Mahadi Hasan
        </div>
        <div className="text-center font-extralight text-base md:text-2xl text-neutral-200 py-4">
          Experienced front-end  developer <br /> focused on building accessible digital experiences
        </div>
        <button className="bg-white rounded-full w-fit text-black px-4 py-2">
          Debug now
        </button>
      </motion.div>
      <BackgroundBeams />
    </AuroraBackground>
  );
}
