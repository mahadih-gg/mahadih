"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import DownLoadResumeBtn from "@/components/common/DownLoadResumeBtn";
import BottomGradient from "@/components/ui/BottomGradient";
import Image from "next/image";
import { navItems } from "@/data/navbar";
import MobileMenu from "./MobileMenu";

const FloatingNavbar = ({
  className,
  isOpen,
  setIsOpen
}: {
  isOpen: boolean,
  setIsOpen: any
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.1) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "max-w-fit fixed top-10 inset-x-0 mx-auto border border-light/[0.2] rounded-full bg-dark shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]",
          className
        )}
      >
        <div className="container py-3 hidden md:block">
          <ul className="navbar__items">
            {
              navItems.map((item, i) => {
                return (
                  <li key={i}><a href={item.link} className="group/btn font-extralight">{item.name} <BottomGradient /></a></li>
                )
              })
            }
            <li>
              <DownLoadResumeBtn />
            </li>
          </ul>
        </div>

        <div className={`container w-screen py-3 flex md:hidden justify-between items-center`}>
          <a href="#">
            <Image src="/assets/images/mahadi-logo.png" width={46} height={20} alt="Mahadi's Logo" />
          </a>

          <span className="uppercase text-light text-xl leading-relaxed">Mahadi Hasan</span>
          {
            visible &&
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          }
        </div>

      </motion.div>
    </AnimatePresence>
  );
};


export default FloatingNavbar