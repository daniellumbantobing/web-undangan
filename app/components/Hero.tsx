"use client";

import { motion, AnimatePresence } from "motion/react";
import { EnvelopeSimpleOpen } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

interface HeroProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function Hero({ onOpen, isOpen }: HeroProps) {
  const [guestName, setGuestName] = useState<string | null>(null);

  // Prevent scroll when closed and get guest name
  useEffect(() => {
    // Get guest name from URL (e.g., ?to=Nama+Tamu)
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) {
      setGuestName(to);
    }

    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-900 text-stone-50"
        >
          {/* Background image overlay with subtle dark gradient */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
            style={{ backgroundImage: "url('https://picsum.photos/seed/wedding-hero-dark/600/900')" }}
          />
          
          <div className="relative z-10 flex flex-col items-center text-center px-6 w-full">
            <span className="text-xs uppercase tracking-[0.2em] mb-4 text-stone-300">The Wedding Of</span>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">
              Romeo &amp; Juliet
            </h1>
            <p className="text-sm tracking-widest uppercase mb-10 text-stone-400">
              24 . 11 . 2026
            </p>
            
            {guestName && (
              <div className="mb-8 border border-stone-600/50 rounded-2xl p-4 bg-stone-800/30 backdrop-blur-sm w-full max-w-[280px]">
                <p className="text-xs text-stone-400 mb-1">Kepada Yth Bapak/Ibu/Saudara/i</p>
                <p className="font-serif text-xl text-stone-100 capitalize">{guestName}</p>
              </div>
            )}

            <button
              onClick={onOpen}
              className="flex items-center gap-3 px-8 py-4 bg-kinpaku text-stone-900 rounded-full hover:bg-kinpaku-hover transition-colors duration-300 shadow-lg"
            >
              <EnvelopeSimpleOpen size={20} weight="light" />
              <span className="text-sm uppercase tracking-widest font-medium">Buka Undangan</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

