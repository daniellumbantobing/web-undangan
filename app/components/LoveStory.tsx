"use client";

import { motion } from "motion/react";

export default function LoveStory() {
  return (
    <section className="py-24 px-6 bg-surface-container-lowest">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center"
      >
        <div className="flex justify-center mb-6 text-secondary">
          <span className="material-symbols-outlined text-4xl" data-icon="favorite">favorite</span>
        </div>
        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2 block">Perjalanan Cinta</span>
        <h2 className="font-headline-lg text-headline-lg-mobile text-primary mb-12">Kisah Kami</h2>
        
        <div className="text-left space-y-6 bg-surface-container-low p-8 rounded-2xl gold-double-border paper-card-shadow relative">
          <span className="material-symbols-outlined absolute top-4 left-4 text-secondary/30 text-5xl" data-icon="format_quote">format_quote</span>
          
          <p className="font-body-md text-body-md text-on-surface leading-relaxed relative z-10 indent-8">
            Pertemuan pertama kami sungguh tak terduga, bermula dari ketidaksengajaan di sebuah kedai kopi di sudut ibu kota pada sore hari di awal tahun 2024. Sebuah sapaan sederhana di tengah rintik hujan menjadi pembuka cerita panjang kami. Sejak saat itu, obrolan kecil berubah menjadi tawa yang mengalir lepas, dan perkenalan berubah menjadi rasa nyaman yang belum pernah kami rasakan sebelumnya.
          </p>
          
          <p className="font-body-md text-body-md text-on-surface leading-relaxed relative z-10 indent-8">
            Seiring berjalannya waktu, kami semakin mengenal sifat dan impian masing-masing. Lewat banyak suka, duka, canda, dan air mata, kami belajar bahwa cinta bukan hanya tentang menemukan seseorang yang sempurna, melainkan tentang belajar melihat seseorang yang tidak sempurna dengan cara yang sempurna. Di pertengahan 2025, kami menyadari bahwa kami saling membutuhkan satu sama lain sebagai tempat berpulang.
          </p>

          <p className="font-body-md text-body-md text-on-surface leading-relaxed relative z-10 indent-8">
            Dengan restu dari kedua orang tua dan memanjatkan puji syukur ke hadirat Tuhan Yang Maha Esa, kami akhirnya memutuskan untuk mengikat janji suci. Tanggal 20 Desember 2026 akan menjadi lembaran baru bagi kami—langkah awal menuju perjalanan tanpa akhir untuk membangun keluarga yang penuh kasih dan damai sejahtera.
          </p>

          <div className="pt-6 border-t border-outline-variant/40 mt-8 text-center">
            <span className="font-subheading-editorial text-subheading-editorial text-primary italic">"Cerita ini hanyalah permulaan..."</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
