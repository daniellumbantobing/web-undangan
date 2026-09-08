"use client";

import { motion } from "motion/react";
import { InstagramLogo } from "@phosphor-icons/react";

export default function CoupleProfile() {
  return (
    <section className="py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-6 block">We Invite You To Celebrate</span>
        <h2 className="font-serif text-3xl mb-12">Sang Mempelai</h2>
      </motion.div>

      <div className="flex flex-col gap-16">
        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="w-48 h-64 overflow-hidden rounded-full mb-6 relative">
            <img 
              src="https://picsum.photos/seed/groom/400/600" 
              alt="Groom" 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <h3 className="font-serif text-2xl mb-2">Romeo Montague</h3>
          <p className="text-sm text-stone-500 mb-4 leading-relaxed">
            Putra dari Bapak Montague &amp; Ibu Montague
          </p>
          <a 
            href="#" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
          >
            <InstagramLogo size={16} /> @romeomontague
          </a>
        </motion.div>

        <div className="font-serif text-4xl italic text-stone-300">&amp;</div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="w-48 h-64 overflow-hidden rounded-full mb-6 relative">
            <img 
              src="https://picsum.photos/seed/bride/400/600" 
              alt="Bride" 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <h3 className="font-serif text-2xl mb-2">Juliet Capulet</h3>
          <p className="text-sm text-stone-500 mb-4 leading-relaxed">
            Putri dari Bapak Capulet &amp; Ibu Capulet
          </p>
          <a 
            href="#" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
          >
            <InstagramLogo size={16} /> @julietcapulet
          </a>
        </motion.div>
      </div>
    </section>
  );
}

