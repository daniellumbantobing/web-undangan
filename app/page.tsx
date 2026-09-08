"use client";

import { useState, useEffect, useRef } from "react";
import LoveStory from "./components/LoveStory";
import RSVP from "./components/RSVP";
import Guestbook from "./components/Guestbook";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [guestName, setGuestName] = useState<string>("Tamu Undangan Terhormat");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    // Guest name from URL
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) {
      setGuestName(to);
    }

    // Countdown logic
    const targetDate = new Date("2026-12-20T08:00:00+07:00").getTime();

    // ... inside interval ...
    // Note: I will replace the full blocks below.
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(console.warn);
        setIsPlaying(true);
      }
    }
  };

  const openInvitation = () => {
    setIsUnlocked(true);
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().catch(console.warn);
      setIsPlaying(true);
    }
    setTimeout(() => {
      const target = document.getElementById("invitation-body");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Modals state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState("");
  const [qrisOpen, setQrisOpen] = useState(false);

  const openLightbox = (src: string) => {
    setLightboxImg(src);
    setLightboxOpen(true);
  };

  const [guestbookRefresh, setGuestbookRefresh] = useState(0);
  const handleRSVPSuccess = () => {
    setGuestbookRefresh(prev => prev + 1);
  };

  const [copiedBank, setCopiedBank] = useState<string | null>(null);
  const handleCopy = (text: string, bank: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(err => console.warn(err));
    }
    setCopiedBank(bank);
    setTimeout(() => {
      setCopiedBank(null);
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-surface min-h-screen relative shadow-2xl overflow-x-hidden">
      {/* Audio Element - Canon in D Wedding Theme */}
      <audio 
        ref={audioRef} 
        loop 
        src="https://ia600504.us.archive.org/33/items/CanonInD_261/CanoninD.mp3" 
        onError={(e) => console.warn("Audio failed to load", e)}
      />

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center opacity-40">
        <div className="w-full h-full bg-gradient-to-b from-secondary-fixed/20 via-transparent to-primary-fixed/10 blur-2xl"></div>
      </div>

      <main className={`relative ${!isUnlocked ? 'h-screen overflow-hidden' : ''}`}>
        {/* COVER SECTION */}
        <section className={`min-h-[100vh] flex flex-col justify-center items-center text-center relative py-12 px-6 ${isUnlocked ? 'mb-10' : ''}`} id="cover">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-fixed/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-fixed/20 rounded-full blur-2xl"></div>
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-secondary/40 bg-surface-container-low text-secondary font-headline-md text-headline-md mb-6 shadow-sm z-10">
            R &amp; D
          </div>
          <p className="text-label-caps font-label-caps text-secondary tracking-widest uppercase mb-3 z-10">WALIMATUL 'URS</p>
          <h1 className="font-display-hero text-display-hero-mobile text-primary tracking-tight mb-4 z-10">
            The Wedding of Raden &amp; Dian
          </h1>
          <p className="font-subheading-editorial text-subheading-editorial text-on-surface-variant italic mb-6 z-10">
            Minggu, 20 Desember 2026 • Jakarta Selatan
          </p>
          
          <div className="bg-surface-container-low/90 border border-outline-variant/50 px-6 py-4 rounded-xl w-full my-6 text-center shadow-sm z-10">
            <p className="text-label-caps font-label-caps text-on-surface-variant mb-1">KEPADA YTH. BAPAK/IBU/SAUDARA/I:</p>
            <p className="font-headline-sm text-headline-sm text-primary font-semibold capitalize">
              {guestName}
            </p>
            <p className="text-body-sm font-body-sm text-outline mt-1 italic">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir dan memberikan doa restu.
            </p>
          </div>
          
          {!isUnlocked && (
            <button onClick={openInvitation} className="mt-4 inline-flex items-center gap-2 px-8 py-3.5 bg-primary-container hover:bg-primary text-surface font-label-button text-label-button rounded-xl uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 group z-10">
              <span className="material-symbols-outlined text-secondary-fixed transition-transform group-hover:scale-110" data-icon="mail">mail</span>
              <span>Buka Undangan</span>
            </button>
          )}
        </section>

        {isUnlocked && (
          <div className="space-y-12 pb-24 px-4 sm:px-6" id="invitation-body">
            {/* AYAT */}
            <section className="text-center py-8 px-6 bg-surface-container-low/50 rounded-xl border border-secondary/20 shadow-sm">
              <span className="material-symbols-outlined text-secondary text-3xl mb-2" data-icon="format_quote">format_quote</span>
              <p className="font-headline-sm text-headline-sm text-primary italic leading-relaxed mb-4">
                "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
              </p>
              <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">
                — Matius 19:6 —
              </p>
            </section>

            {/* MEMPELAI */}
            <section className="pt-4 scroll-mt-6" id="mempelai">
              <div className="text-center mb-8">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Groom &amp; Bride</span>
                <h2 className="font-headline-lg text-headline-lg-mobile text-primary mt-1">
                  Mempelai yang Berbahagia
                </h2>
                <div className="w-16 h-0.5 bg-secondary/40 mx-auto mt-3"></div>
              </div>
              <div className="space-y-6">
                <div className="bg-surface-container-lowest p-6 rounded-xl gold-double-border paper-card-shadow flex flex-col items-center text-center">
                  <div className="relative w-40 h-48 rounded-t-full overflow-hidden border-2 border-secondary/40 mb-4 p-1 bg-surface-container-low">
                    <img className="w-full h-full object-cover rounded-t-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB7noqld6ssRzxUpCtfFwlOT00YCOSF4AKFtIdkXhVrw4dK5rh1rwcxcUJvWxpfHAyv5lWpe94A2Be36COyIBI0ymRrz96ykUXkEqV9iLrw2Wo6HI-nhyeSVsRgxxj7k3ZBG-oS5HYr2QgwZ9iMfy1Wn0sT9UJgl5a-ATjiIlN8POB-Hr-YkEj2piwDC2AGFOgRRpM734IcEU8Gyh-xIZckcMdhn0Kye5Wmbvp2LTn2aJWMAIvBBwLgA" alt="Groom" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary">Raden Arya Wijaya, S.T.</h3>
                  <p className="font-label-caps text-label-caps text-secondary mt-1 uppercase tracking-wider">Mempelai Pria</p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl gold-double-border paper-card-shadow flex flex-col items-center text-center">
                  <div className="relative w-40 h-48 rounded-t-full overflow-hidden border-2 border-secondary/40 mb-4 p-1 bg-surface-container-low">
                    <img className="w-full h-full object-cover rounded-t-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtTsTsluVELmgMSUgbKljoZzkh76BUd4PdwbD9o_QagwLVUrqOawygF64JafUNV2VnnWZ3Z4dOGXfTGwmxqP-Pcvbo_fqs4Psok1IC0Ys0TNPgMI0DchrQMwa7tEQMJlXDTkK0eNc4Iaz2A141HtufHRi0-noGIYYGCzeCn7N6Sucm5Ycb5Xg5M9T5A3YwU2wbEzmidB-qkBDC9nI-f-EVpB3WHJeeygJrNvfrF1rF4Sc909ZeackegA" alt="Bride" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary">Dian Paramitha, M.Ds.</h3>
                  <p className="font-label-caps text-label-caps text-secondary mt-1 uppercase tracking-wider">Mempelai Wanita</p>
                </div>
              </div>
            </section>

            {/* Kisah Perjumpaan */}
            <div className="-mx-4 sm:-mx-6">
              <LoveStory />
            </div>

            {/* ACARA & LOKASI */}
            <section className="pt-4 scroll-mt-6" id="acara">
              <div className="text-center mb-8">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Agenda &amp; Lokasi</span>
                <h2 className="font-headline-lg text-headline-lg-mobile text-primary mt-1">
                  Rangkaian Acara
                </h2>
              </div>
              
              <div className="bg-primary-container text-surface p-5 rounded-xl shadow-md mb-8 text-center border border-secondary/30">
                <p className="font-label-caps text-label-caps text-secondary-fixed tracking-widest uppercase mb-4">
                  MENGHITUNG HARI
                </p>
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <div className="bg-surface/10 backdrop-blur-sm p-2 rounded-lg border border-surface/15">
                    <span className="font-headline-md text-headline-md text-surface-bright font-bold block">{mounted ? String(timeLeft.days).padStart(2, '0') : '00'}</span>
                    <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase text-[10px]">Hari</span>
                  </div>
                  <div className="bg-surface/10 backdrop-blur-sm p-2 rounded-lg border border-surface/15">
                    <span className="font-headline-md text-headline-md text-surface-bright font-bold block">{mounted ? String(timeLeft.hours).padStart(2, '0') : '00'}</span>
                    <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase text-[10px]">Jam</span>
                  </div>
                  <div className="bg-surface/10 backdrop-blur-sm p-2 rounded-lg border border-surface/15">
                    <span className="font-headline-md text-headline-md text-surface-bright font-bold block">{mounted ? String(timeLeft.minutes).padStart(2, '0') : '00'}</span>
                    <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase text-[10px]">Menit</span>
                  </div>
                  <div className="bg-surface/10 backdrop-blur-sm p-2 rounded-lg border border-surface/15">
                    <span className="font-headline-md text-headline-md text-surface-bright font-bold block">{mounted ? String(timeLeft.seconds).padStart(2, '0') : '00'}</span>
                    <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase text-[10px]">Detik</span>
                  </div>
                </div>
                
                <a 
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Raden+%26+Dian&dates=20261220T010000Z/20261220T070000Z&details=Pemberkatan+dan+Resepsi+Pernikahan&location=Gereja+Katedral+Jakarta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 border border-secondary-fixed text-surface-bright hover:bg-surface/10 rounded-lg text-label-button font-label-button transition-colors w-full justify-center"
                >
                  <span className="material-symbols-outlined text-sm" data-icon="event">event</span>
                  <span>Simpan ke Google Kalender</span>
                </a>
              </div>

              <div className="space-y-6">
                {/* Pemberkatan */}
                <div className="bg-surface-container-lowest p-5 rounded-xl gold-double-border paper-card-shadow">
                  <div className="flex items-center justify-between border-b border-outline-variant/40 pb-3 mb-4">
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">PEMBERKATAN NIKAH</span>
                    <span className="material-symbols-outlined text-primary text-xl" data-icon="church">church</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Pemberkatan</h3>
                  <p className="font-body-sm text-body-sm text-secondary font-medium mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base" data-icon="schedule">schedule</span>
                    <span>Minggu, 20 Des 2026 • 08:00 WIB</span>
                  </p>
                  <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/30 text-body-sm font-body-sm text-on-surface-variant mb-4">
                    <p className="font-semibold text-primary mb-1">Gereja Katedral Jakarta</p>
                    <p className="text-sm">Jl. Katedral No. 7B, Pasar Baru, Jakarta Pusat</p>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Gereja+Katedral+Jakarta" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-secondary text-primary hover:bg-secondary/10 rounded-lg font-label-button text-label-button transition-all"
                  >
                    <span className="material-symbols-outlined text-base text-secondary" data-icon="location_on">location_on</span>
                    <span>Buka Google Maps</span>
                  </a>
                </div>
                {/* Resepsi */}
                <div className="bg-surface-container-lowest p-5 rounded-xl gold-double-border paper-card-shadow">
                  <div className="flex items-center justify-between border-b border-outline-variant/40 pb-3 mb-4">
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">RESEPSI</span>
                    <span className="material-symbols-outlined text-primary text-xl" data-icon="celebration">celebration</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Resepsi Pernikahan</h3>
                  <p className="font-body-sm text-body-sm text-secondary font-medium mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base" data-icon="schedule">schedule</span>
                    <span>Minggu, 20 Des 2026 • 11:00 WIB</span>
                  </p>
                  <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/30 text-body-sm font-body-sm text-on-surface-variant mb-4">
                    <p className="font-semibold text-primary mb-1">Grand Ballroom Plataran</p>
                    <p className="text-sm">Jl. Dharmawangsa Raya No. 6, Jakarta Selatan</p>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Plataran+Dharmawangsa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-secondary text-primary hover:bg-secondary/10 rounded-lg font-label-button text-label-button transition-all"
                  >
                    <span className="material-symbols-outlined text-base text-secondary" data-icon="location_on">location_on</span>
                    <span>Buka Google Maps</span>
                  </a>
                </div>
              </div>
            </section>

            {/* GALERI */}
            <section className="pt-4 scroll-mt-6" id="galeri">
              <div className="text-center mb-8">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Dokumentasi</span>
                <h2 className="font-headline-lg text-headline-lg-mobile text-primary mt-1">
                  Galeri Kisah
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBEK8dLPzWx02A9Oj9dhmLMxuq5syd_165FqrTj9JOtpFwRHG0UAKcegc45fCy_jDhWkUho-8_cDpHoGfsenMyci3vOK2lWisObunw1G9YEG4ALSWU-VjnmoqZP94Ld2Dr2ErbFkw25O4vrHfpNWx_NMTLSlhwfLIMkcf-HwhDC0jK0JExNlajHzv1vGqvX7p81PXyWlgjJZAeBn0oDtblSKp08d_ZHS8V48VqYMCrGVIlC7LrTiA6GpQ",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDUSRXU1ThuoMTngIvsTNwgsuOe_qJSOkjAssKr6J-FntRx62tFrtIHbWCQxtCb0VEU__GgzOeDJIOpv_ZfDQ4fVi7YGTq41HMsnTF3qLqWi9aThc7ddwY8WXhdqNTLK7XxAd3IRRYNRQlctNLGhL25mSK3FMULnj6lK7QGady69wfoNUUWnJhFhfWwr-ZQZJY_Am3bByZypgKiJ78wcFcd1z9HBI7KRHnfyXAdTViOrzLf7iNfBweI1Q",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCgEyKKsi-FLXHVy36XAi_0zRLNrsQU_XofUbwOR2l6x7aFwyR9ROrZNIIN9E8pehaG0oSLYEMLbKsaVew2lZ30WKwRTeDqf5zOPdx19qY-sIdCuovOXqaJahpt3w3be7Qn4fc1z2kdA1_mgOjut7vkNjFc_kNBo1FaXEomMaznSGd3VvbMPaYvc0IXe69znasmpsKipwmC3HJSYRqIVgTv1ljcXpFDN9JXIEdSsYq6NCijyQHY_jXT9A",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuC9UIPf3jcW8fB8_1Ceg0xw0kWvmDPTKfZ1LhbHK1xO0qdAgbTd1epj8RwraYR8IByf_kttCqj7QKETJQ6Ft7S3N_lXmjHYL7gkT60znCyZ26A4p9dP0oL4A2rRfyLxVT4f1UA4kQAl-4TZb2ksR02QGL1rfrCTUalc8kYLs-ai5YdbtsXZT2Ip4Te6twd14-W1RY1i4Ffto3mPUuZHWAZfdCoePpU3ofmVF2T9HM9NNSqE2UiLtH3mrQ"
                ].map((src, i) => (
                  <div key={i} className="cursor-pointer group relative overflow-hidden rounded-lg gold-double-border shadow-sm" onClick={() => openLightbox(src)}>
                    <img className="w-full h-40 object-cover" src={src} alt="Gallery item" />
                    <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-surface transition-opacity">
                      <span className="material-symbols-outlined text-2xl" data-icon="zoom_in">zoom_in</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* RSVP */}
            <section className="pt-4 scroll-mt-6" id="rsvp">
              <div className="bg-surface-container-lowest p-5 rounded-xl gold-double-border paper-card-shadow">
                <div className="text-center mb-6">
                  <h2 className="font-headline-lg text-headline-lg-mobile text-primary">
                    Konfirmasi Kehadiran
                  </h2>
                </div>
                <RSVP onRSVPSuccess={handleRSVPSuccess} />
                
                <div className="mt-8 pt-6 border-t border-outline-variant/40">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary" data-icon="forum">forum</span>
                      <span>Buku Tamu</span>
                    </h3>
                  </div>
                  <Guestbook refreshTrigger={guestbookRefresh} />
                </div>
              </div>
            </section>

            {/* KADO */}
            <section className="pt-4 scroll-mt-6" id="kado">
              <div className="text-center mb-8">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Tanda Kasih</span>
                <h2 className="font-headline-lg text-headline-lg-mobile text-primary mt-1">
                  Amplop Digital
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-surface-container-lowest p-5 rounded-xl gold-double-border paper-card-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-headline-sm text-primary tracking-wider">BCA</span>
                    <span className="material-symbols-outlined text-secondary" data-icon="credit_card">credit_card</span>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/40 mt-1 mb-3 text-center">
                    <span className="font-headline-sm text-headline-sm text-primary tracking-wider font-mono">8820 1928 38</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-center">a.n <strong className="text-primary font-medium">Raden Arya Wijaya</strong></p>
                  <button 
                    className="mt-4 w-full py-2 bg-primary-container text-surface rounded-lg font-label-button text-label-button transition-all" 
                    onClick={() => handleCopy("8820192838", "bca")}
                  >
                    {copiedBank === "bca" ? "Berhasil Disalin ✓" : "Salin Rekening"}
                  </button>
                </div>

                <div className="bg-surface-container-lowest p-5 rounded-xl gold-double-border paper-card-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-headline-sm text-primary tracking-wider">MANDIRI</span>
                    <span className="material-symbols-outlined text-secondary" data-icon="account_balance">account_balance</span>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/40 mt-1 mb-3 text-center">
                    <span className="font-headline-sm text-headline-sm text-primary tracking-wider font-mono">137 00 9823 112</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-center">a.n <strong className="text-primary font-medium">Dian Paramitha</strong></p>
                  <button 
                    className="mt-4 w-full py-2 bg-primary-container text-surface rounded-lg font-label-button text-label-button transition-all" 
                    onClick={() => handleCopy("137009823112", "mandiri")}
                  >
                    {copiedBank === "mandiri" ? "Berhasil Disalin ✓" : "Salin Rekening"}
                  </button>
                </div>
                
                <div className="bg-surface-container-lowest p-5 rounded-xl gold-double-border paper-card-shadow text-center">
                  <span className="material-symbols-outlined text-3xl text-secondary mb-2" data-icon="qr_code_scanner">qr_code_scanner</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">QRIS Digital Payment</h3>
                  <button className="px-6 py-2 border border-secondary text-primary hover:bg-secondary/10 rounded-lg font-label-button text-label-button inline-flex items-center gap-2" onClick={() => setQrisOpen(true)}>
                    <span className="material-symbols-outlined text-sm text-secondary" data-icon="visibility">visibility</span>
                    <span>Lihat QRIS</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {isUnlocked && (
        <footer className="w-full py-10 px-6 text-center bg-surface-container-low border-t border-outline-variant/40 pb-28">
          <div className="font-headline-sm text-headline-sm text-primary mb-2">
            Raden &amp; Dian
          </div>
          <p className="font-body-sm text-xs text-on-surface-variant">
            © 2025 Wedding Celebration.
          </p>
        </footer>
      )}

      {/* Floating Audio Status */}
      {isUnlocked && (
        <div className="fixed top-6 right-6 z-50">
          <div onClick={toggleMusic} className="cursor-pointer w-10 h-10 rounded-full bg-surface-container-lowest/90 backdrop-blur-md border border-secondary/40 shadow-lg flex items-center justify-center text-primary transition-all active:scale-95">
            <div className={`${isPlaying ? 'animate-spin-slow text-secondary' : 'text-outline'} flex items-center justify-center`}>
              <span className="material-symbols-outlined text-xl" data-icon="music_note">music_note</span>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Pills */}
      {isUnlocked && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-surface/90 backdrop-blur-md border border-outline-variant/40 shadow-xl px-4 py-2 rounded-full flex items-center justify-center gap-6 w-[90%] max-w-sm">
          <a className="text-primary hover:text-secondary flex flex-col items-center" href="#mempelai">
            <span className="material-symbols-outlined text-xl" data-icon="favorite">favorite</span>
          </a>
          <a className="text-primary hover:text-secondary flex flex-col items-center" href="#acara">
            <span className="material-symbols-outlined text-xl" data-icon="calendar_today">calendar_today</span>
          </a>
          <a className="text-primary hover:text-secondary flex flex-col items-center" href="#galeri">
            <span className="material-symbols-outlined text-xl" data-icon="photo_library">photo_library</span>
          </a>
          <a className="text-primary hover:text-secondary flex flex-col items-center" href="#rsvp">
            <span className="material-symbols-outlined text-xl" data-icon="mail">mail</span>
          </a>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-md flex items-center justify-center p-4">
          <button className="absolute top-6 right-6 text-surface text-3xl" onClick={() => setLightboxOpen(false)}>
            <span className="material-symbols-outlined text-3xl" data-icon="close">close</span>
          </button>
          <img className="max-h-[80vh] w-full object-contain rounded-lg shadow-2xl border border-secondary/40" src={lightboxImg} alt="Enlarged gallery" />
        </div>
      )}

      {/* QRIS Modal */}
      {qrisOpen && (
        <div className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest max-w-[300px] w-full rounded-xl gold-double-border p-6 text-center shadow-2xl relative">
            <button className="absolute top-4 right-4 text-on-surface" onClick={() => setQrisOpen(false)}>
              <span className="material-symbols-outlined" data-icon="close">close</span>
            </button>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest text-[10px]">Digital Angpao</span>
            <h3 className="font-headline-sm text-lg text-primary mt-1 mb-4">QRIS Pernikahan</h3>
            <div className="w-48 h-48 mx-auto bg-surface-container-low border-2 border-secondary/40 rounded-lg p-2 flex flex-col items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-6xl text-primary" data-icon="qr_code_2">qr_code_2</span>
            </div>
            <button className="mt-5 w-full py-2 bg-primary-container text-surface rounded-lg font-label-button text-sm uppercase" onClick={() => setQrisOpen(false)}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
