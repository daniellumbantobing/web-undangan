"use client";

import { motion } from "motion/react";

export default function BibleVerse() {
  return (
    <section className="py-24 px-8 text-center bg-surface-container-lowest border-b border-outline-variant/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-sm mx-auto"
      >
        <span className="text-stone-300 block mb-6 text-4xl font-serif">"</span>
        <p className="font-serif text-lg leading-relaxed text-stone-700 italic mb-8">
          Sebab itu laki-laki akan meninggalkan ayah dan ibunya dan bersatu dengan isterinya, sehingga keduanya itu menjadi satu daging. Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.
        </p>
        <span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium">
          Matius 19:5-6
        </span>
      </motion.div>
    </section>
  );
}

