"use client"

import React from 'react';
import { GlobeWorld } from '../ui/GlobeWorld';
import { motion } from 'framer-motion';
import { ContactForm } from '../ContactForm';


const ContactSection = () => {
  return (
    <section id="contact" className="bg-dark">

      <div className='section_container'>

        <div className="section__heading">
          <h2 className="">Contact Me</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: -50 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="section__content grid grid-cols-2">
          <div className="glass text-light p-8">
            <ContactForm />

          </div>

          <GlobeWorld />
        </motion.div>


      </div>

    </section>
  );
};

export default ContactSection;