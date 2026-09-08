"use client";

import { useState, useRef, useEffect } from "react";
import { SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react";
import { motion } from "motion/react";

export default function AudioPlayer({ isPlaying, togglePlay }: { isPlaying: boolean, togglePlay: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => console.warn("Autoplay prevented or audio source error:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={togglePlay}
        className="w-12 h-12 bg-kinpaku/80 backdrop-blur-md text-stone-900 rounded-full flex items-center justify-center shadow-lg hover:bg-kinpaku-hover transition-colors"
      >
        {isPlaying ? <SpeakerHigh size={20} weight="fill" /> : <SpeakerSlash size={20} weight="fill" />}
      </button>
      
      {/* Fallback to a working audio URL to prevent NotSupportedError from 404 HTML pages */}
      <audio 
        ref={audioRef} 
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
        onError={(e) => console.warn("Audio failed to load", e)}
      />
    </motion.div>
  );
}
