"use client"

import { aboutData } from '@/data/about';
import React from 'react';
import Button from '@/components/common/Button';
import IcoContactMe from '@/assets/icons/IcoContactMe';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="bg-darkLight">
      <div className="bg-gradient-to-r from-transparent via-neutral-300/40 dark:via-neutral-700 to-transparent h-px w-full" />

      <div className="section_container">

        <div className="section__heading">
          <h2 className="">About Me</h2>
        </div>

        <div className="section__content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: -50 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="glass text-light p-8">
            {
              aboutData.map((data: string, i: number) => {
                return (
                  <p key={i} className="py-3">
                    {data}
                  </p>
                )
              })
            }

            <div className="pt-5">
              <Button
                link="#contact"
                icon={
                  <span className="text-2xl"><IcoContactMe /></span>
                }
              >
                <span>Contact with me</span>
              </Button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;