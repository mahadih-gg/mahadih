"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { skillData } from '@/data/skills';


const SkillSection = () => {

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  return (
    <section id="skill" className="bg-dark h-screen">
      <div className='section_container relative'>

        <div className="section__heading">
          <h2 className="">Skills</h2>
        </div>

        <motion.div
          // initial={{ opacity: 0, y: 40 }}
          // whileInView={{ opacity: 1, y: -50 }}
          // transition={{
          //   delay: 0.3,
          //   duration: 0.8,
          //   ease: "easeInOut",
          // }}
          className="section__content">

          {
            skillData.main.map((skill, i: number) => {

              const top = i * 30
              return (
                <motion.h2
                  key={i}
                  style={{
                    top: getRandomInt(500),
                    left: getRandomInt(500)
                  }}
                  className={`absolute neon-primary text-6xl font-bold font-Josefin`}>
                  {skill}
                </motion.h2>

              )
            })
          }

          {
            skillData.extra.map((skill, i: number) => {

              const top = i * 30
              return (
                <motion.h2
                  key={i}
                  style={{
                    top: getRandomInt(500),
                    left: getRandomInt(1000)
                  }}
                  className={`absolute neon-primary-light text-4xl font-bold font-Josefin`}>
                  {skill}
                </motion.h2>
              )
            })
          }

          {
            skillData.tools.map((skill, i: number) => {

              const top = i * 30
              return (
                <motion.h2
                  key={i}
                  style={{
                    top: getRandomInt(500),
                    left: getRandomInt(1000)
                  }}
                  className={`absolute neon-secondary-light text-3xl font-bold font-Josefin`}>
                  {skill}
                </motion.h2>
              )
            })
          }


        </motion.div>


      </div>
    </section>
  );
};

export default SkillSection;