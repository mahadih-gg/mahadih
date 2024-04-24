"use client"

import React from 'react';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import BottomGradient from '../ui/BottomGradient';
import { FloatingNav } from '../ui/floating-navbar';
import { navItems } from '@/data/navbar';
import DownLoadResumeBtn from '../common/DownLoadResumeBtn';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
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
        <div className="bg-gradient-to-r from-transparent via-neutral-300/40 dark:via-neutral-700 to-transparent h-px w-full" />
      </nav>
      <FloatingNav navItems={navItems} />
    </>
  );
};

export default Navbar;