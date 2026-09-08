"use client";

import { motion } from "motion/react";

const photos = [
  "https://picsum.photos/seed/wed1/400/600",
  "https://picsum.photos/seed/wed2/400/400",
  "https://picsum.photos/seed/wed3/400/500",
  "https://picsum.photos/seed/wed4/400/700",
  "https://picsum.photos/seed/wed5/400/400",
  "https://picsum.photos/seed/wed6/400/600",
];

export default function Gallery() {
  return (
    <section className="py-24 px-6 bg-stone-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-6 block">Our Memories</span>
        <h2 className="font-serif text-3xl">Galeri</h2>
      </motion.div>

      <div className="columns-2 gap-4 space-y-4">
        {photos.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="break-inside-avoid rounded-xl overflow-hidden"
          >
            <img 
              src={src} 
              alt={`Gallery ${i + 1}`} 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

