"use client";

import { motion } from "motion/react";
import { CalendarBlank, MapPin } from "@phosphor-icons/react";

export default function EventSchedule() {
  return (
    <section className="py-24 px-6 bg-stone-900 text-stone-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-3xl mb-4">Rangkaian Acara</h2>
        <p className="text-stone-400 text-sm leading-relaxed max-w-xs mx-auto">
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami.
        </p>
      </motion.div>

      <div className="flex flex-col gap-12">
        {/* Akad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-stone-800 p-8 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <CalendarBlank size={80} weight="fill" />
          </div>
          <h3 className="font-serif text-2xl mb-4">Akad Nikah</h3>
          <div className="space-y-2 text-sm text-stone-300 mb-8">
            <p className="font-medium text-stone-100">Minggu, 24 November 2026</p>
            <p>08:00 WIB - Selesai</p>
            <p className="pt-2">Masjid Raya Kota<br/>Jl. Nama Jalan No. 123, Kota</p>
          </div>
          
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center justify-center gap-2 w-full py-3 border border-stone-700 rounded-full text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors">
              <CalendarBlank size={16} /> Simpan Kalender
            </a>
            <a href="#" className="flex items-center justify-center gap-2 w-full py-3 bg-stone-50 text-stone-900 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-stone-200 transition-colors">
              <MapPin size={16} /> Buka di Maps
            </a>
          </div>
        </motion.div>

        {/* Resepsi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border border-stone-800 p-8 rounded-2xl relative overflow-hidden bg-stone-800/50"
        >
           <div className="absolute top-0 right-0 p-4 opacity-10">
            <CalendarBlank size={80} weight="fill" />
          </div>
          <h3 className="font-serif text-2xl mb-4">Resepsi</h3>
          <div className="space-y-2 text-sm text-stone-300 mb-8">
            <p className="font-medium text-stone-100">Minggu, 24 November 2026</p>
            <p>11:00 WIB - 14:00 WIB</p>
            <p className="pt-2">Gedung Pertemuan Serbaguna<br/>Jl. Nama Jalan No. 124, Kota</p>
          </div>
          
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center justify-center gap-2 w-full py-3 border border-stone-600 rounded-full text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors">
              <CalendarBlank size={16} /> Simpan Kalender
            </a>
            <a href="#" className="flex items-center justify-center gap-2 w-full py-3 bg-stone-50 text-stone-900 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-stone-200 transition-colors">
              <MapPin size={16} /> Buka di Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

