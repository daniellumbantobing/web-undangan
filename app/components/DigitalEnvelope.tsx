"use client";

import { motion } from "motion/react";
import { Copy, Gift } from "@phosphor-icons/react";
import { useState } from "react";

export default function DigitalEnvelope() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, bank: string) => {
    navigator.clipboard.writeText(text);
    setCopied(bank);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="flex justify-center mb-6 text-stone-400">
          <Gift size={32} weight="light" />
        </div>
        <h2 className="font-serif text-3xl mb-4">Wedding Gift</h2>
        <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
        </p>
      </motion.div>

      <div className="flex flex-col gap-6 max-w-xs mx-auto">
        {/* Bank BCA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-stone-50 p-6 rounded-2xl border border-stone-200"
        >
          <h3 className="font-medium text-lg mb-1">BCA</h3>
          <p className="text-stone-500 text-sm mb-4">A.N. Romeo Montague</p>
          <p className="font-mono text-xl tracking-wider mb-6">1234 567 890</p>
          <button 
            onClick={() => handleCopy("1234567890", "bca")}
            className="flex items-center justify-center gap-2 w-full py-3 bg-stone-900 text-stone-50 rounded-full text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors"
          >
            <Copy size={16} /> 
            {copied === "bca" ? "Tersalin!" : "Salin Rekening"}
          </button>
        </motion.div>

        {/* Bank Mandiri */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-stone-50 p-6 rounded-2xl border border-stone-200"
        >
          <h3 className="font-medium text-lg mb-1">Mandiri</h3>
          <p className="text-stone-500 text-sm mb-4">A.N. Juliet Capulet</p>
          <p className="font-mono text-xl tracking-wider mb-6">0987 654 321</p>
          <button 
            onClick={() => handleCopy("0987654321", "mandiri")}
            className="flex items-center justify-center gap-2 w-full py-3 bg-stone-900 text-stone-50 rounded-full text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors"
          >
            <Copy size={16} /> 
            {copied === "mandiri" ? "Tersalin!" : "Salin Rekening"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

