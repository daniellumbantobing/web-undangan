"use client";
import { motion } from "motion/react";

export default function Decorations() {
  return (
    <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-md pointer-events-none z-40 overflow-hidden">
      {/* Top Left Flower */}
      <motion.img 
        src="/decorations/bunga-cover-kiri.png" 
        alt="" 
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-32 md:w-48 opacity-90 drop-shadow-lg origin-top-left"
      />
      
      {/* Top Right Flower */}
      <motion.img 
        src="/decorations/bunga-cover-kanan.png" 
        alt="" 
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute top-0 right-0 w-32 md:w-48 opacity-90 drop-shadow-lg origin-top-right"
      />

      {/* Bottom Left Branch/Ornament */}
      <motion.img 
        src="/decorations/orn-galeri-kanan.png" 
        alt="" 
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
        className="absolute bottom-0 left-0 w-40 md:w-56 opacity-80 drop-shadow-md origin-bottom-left -scale-x-100"
      />
      
      {/* Bottom Right Tree Branch */}
      <motion.img 
        src="/decorations/orn-galeri-kanan.png" 
        alt="" 
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
        className="absolute bottom-0 right-0 w-40 md:w-56 opacity-80 drop-shadow-md origin-bottom-right"
      />

      {/* Floating Clouds */}
      <motion.img 
        src="/decorations/awan-1-min.png" 
        alt="" 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.6, x: [0, 20, 0] }}
        transition={{ opacity: { duration: 2 }, x: { repeat: Infinity, duration: 8, ease: "easeInOut" } }}
        className="absolute bottom-10 left-[-5%] w-64 md:w-96 drop-shadow-sm mix-blend-overlay"
      />
      
      <motion.img 
        src="/decorations/awan-2.png" 
        alt="" 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.5, x: [0, -20, 0] }}
        transition={{ opacity: { duration: 2, delay: 1 }, x: { repeat: Infinity, duration: 10, ease: "easeInOut" } }}
        className="absolute bottom-24 right-[-10%] w-72 md:w-[400px] drop-shadow-sm mix-blend-overlay"
      />
    </div>
  );
}

