"use client";

import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { submitRSVP } from "../lib/api";
import { Spinner, CheckCircle } from "@phosphor-icons/react";

type FormData = {
  nama: string;
  kehadiran: "Hadir" | "Tidak Hadir";
  jumlah_orang: string;
  ucapan: string;
};

export default function RSVP({ onRSVPSuccess }: { onRSVPSuccess?: () => void }) {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      kehadiran: "Hadir",
      jumlah_orang: "1"
    }
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const kehadiran = watch("kehadiran");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      await submitRSVP({
        nama: data.nama,
        kehadiran: data.kehadiran,
        jumlah_orang: data.kehadiran === "Hadir" ? parseInt(data.jumlah_orang) : 0,
        ucapan: data.ucapan
      });
      setSubmitStatus("success");
      reset();
      if (onRSVPSuccess) onRSVPSuccess();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {submitStatus === "success" ? (
        <div className="bg-primary-container text-on-primary-container p-6 rounded-2xl text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle size={48} weight="fill" className="text-primary" />
          </div>
          <h3 className="font-medium mb-2">Terima Kasih!</h3>
          <p className="text-sm">Konfirmasi kehadiran dan pesan Anda telah terkirim.</p>
          <button 
            onClick={() => setSubmitStatus("idle")}
            className="mt-6 text-xs uppercase tracking-widest font-medium underline"
          >
            Kirim pesan lain
          </button>
        </div>
      ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="text-sm font-medium text-primary">Nama Lengkap</label>
              <input 
                id="nama"
                {...register("nama", { required: "Nama wajib diisi" })}
                className="px-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-shadow text-on-surface"
                placeholder="Tulis nama Anda"
              />
              {errors.nama && <span className="text-xs text-error">{errors.nama.message}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-primary">Konfirmasi Kehadiran</label>
              <select 
                {...register("kehadiran")}
                className="px-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-shadow text-on-surface"
              >
                <option value="Hadir">Ya, Saya akan hadir</option>
                <option value="Tidak Hadir">Maaf, saya tidak bisa hadir</option>
              </select>
            </div>

            {kehadiran === "Hadir" && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-primary">Jumlah Orang</label>
                <input 
                  type="number"
                  min="1"
                  max="10"
                  {...register("jumlah_orang", { required: "Jumlah orang wajib diisi" })}
                  className="px-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-shadow text-on-surface"
                  placeholder="Berapa orang yang hadir?"
                />
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="ucapan" className="text-sm font-medium text-primary">Ucapan & Doa</label>
              <textarea 
                id="ucapan"
                {...register("ucapan", { required: "Ucapan wajib diisi" })}
                className="px-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-shadow min-h-[120px] resize-y text-on-surface placeholder:text-outline"
                placeholder="Tulis ucapan dan doa untuk kedua mempelai"
              />
              {errors.ucapan && <span className="text-xs text-error">{errors.ucapan.message}</span>}
            </div>

            {submitStatus === "error" && (
              <p className="text-xs text-red-500 text-center">Terjadi kesalahan. Silakan coba lagi.</p>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-primary text-surface rounded-lg text-label-button tracking-wider uppercase hover:bg-primary-fixed transition-colors disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Spinner size={16} className="animate-spin" /> Mengirim...
                </>
              ) : "Kirim Konfirmasi"}
            </button>
          </form>
        )}
    </div>
  );
}

