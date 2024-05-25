"use client"

import React, { useState } from 'react';
import { HoverBorderGradient } from '../../ui/hover-border-gradient';
import BottomGradient from '../../ui/BottomGradient';
import FloatingNavbar from '@/components/globals/navbar/FloatingNavbar';
import { navItems } from '@/data/navbar';
import DownLoadResumeBtn from '../../common/DownLoadResumeBtn';
import Image from 'next/image';
import MobileMenu from '@/components/globals/navbar/MobileMenu';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="navbar hidden md:block">

        <div className="container py-3 flex justify-between items-center">
          <a href="#">
            <Image src="/assets/images/mahadi-logo.png" width={46} height={20} alt="Mahadi's Logo" />
          </a>

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
        <div className="bg-gradient-to-r from-transparent via-neutral-300/40 dark:via-neutral-700 to-transparent h-px w-full" />
      </nav>

      <nav className="navbar-mobile block md:hidden">
        <div className="container py-3 flex justify-between items-center">
          <a href="#">
            <Image src="/assets/images/mahadi-logo.png" width={46} height={20} alt="Mahadi's Logo" />
          </a>

          {/* <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} /> */}
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-300/40 dark:via-neutral-700 to-transparent h-px w-full" />
      </nav>

      <FloatingNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

    </>
  );
};

export default Navbar;