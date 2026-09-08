"use client";

import { motion } from "motion/react";
import { useEffect, useState, useCallback } from "react";
import { getGuestbookEntries, GuestbookEntry } from "../lib/api";
import { ChatCircle, Spinner } from "@phosphor-icons/react";

export default function Guestbook({ refreshTrigger }: { refreshTrigger: number }) {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchEntries = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getGuestbookEntries();
      setEntries(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries, refreshTrigger]);

  return (
    <div className="w-full mt-4">
      {isLoading ? (
        <div className="flex justify-center py-12 text-outline">
          <Spinner size={24} className="animate-spin" />
        </div>
      ) : entries.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-outline-variant rounded-xl bg-surface-container-low/50">
          <p className="text-sm text-outline">Belum ada ucapan. Jadilah yang pertama!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {entries.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/50 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium text-sm text-primary">{entry.nama}</span>
                <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm font-medium ${entry.kehadiran === "Hadir" ? "bg-secondary-container text-on-secondary-container" : "bg-surface-variant text-on-surface-variant"}`}>
                  {entry.kehadiran}
                </span>
              </div>
              <p className="text-sm text-on-surface leading-relaxed whitespace-pre-wrap">
                {entry.ucapan}
              </p>
              <p className="text-[10px] text-outline mt-3">
                {new Date(entry.timestamp).toLocaleDateString("id-ID", {
                  day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute:"2-digit"
                })}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

