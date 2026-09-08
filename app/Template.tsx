export default function Template() {
  return (
    <>

{/*  Shared TopNavBar Component  */}
<header className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-4 md:px-8 max-w-5xl mx-auto bg-surface/90 dark:bg-inverse-surface/90 backdrop-blur-md border-b border-outline-variant/30 dark:border-outline/20 shadow-sm transition-all duration-300">
<div className="flex items-center gap-3 py-3">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed text-headline-md" data-icon="favorite">favorite</span>
<span className="font-headline-md text-headline-md tracking-wider text-primary dark:text-primary-fixed">The Wedding of Raden &amp; Dian</span>
</div>
<nav className="hidden md:flex items-center space-x-6">
<a className="text-primary dark:text-inverse-primary border-b-2 border-primary font-semibold pb-1 hover:text-secondary hover:border-secondary transition-all duration-300" href="#mempelai">Mempelai</a>
<a className="text-on-surface-variant dark:text-surface-dim hover:text-primary transition-colors pb-1 hover:text-secondary hover:border-secondary transition-all duration-300" href="#acara">Acara</a>
<a className="text-on-surface-variant dark:text-surface-dim hover:text-primary transition-colors pb-1 hover:text-secondary hover:border-secondary transition-all duration-300" href="#galeri">Galeri</a>
<a className="text-on-surface-variant dark:text-surface-dim hover:text-primary transition-colors pb-1 hover:text-secondary hover:border-secondary transition-all duration-300" href="#rsvp">RSVP</a>
<a className="text-on-surface-variant dark:text-surface-dim hover:text-primary transition-colors pb-1 hover:text-secondary hover:border-secondary transition-all duration-300" href="#kado">Kado</a>
</nav>
<div className="flex items-center space-x-2">
<button aria-label="Toggle Musik Latar" className="p-2 text-primary hover:text-secondary transition-colors duration-200" >
<span className="material-symbols-outlined" data-icon="music_note">music_note</span>
</button>
<button aria-label="Bagikan Undangan" className="p-2 text-primary hover:text-secondary transition-colors duration-200" >
<span className="material-symbols-outlined" data-icon="share">share</span>
</button>
<a className="hidden sm:inline-flex items-center bg-primary-container text-surface hover:bg-primary px-4 py-1.5 rounded-lg text-label-button font-label-button tracking-wider transition-all duration-300 ease-out active:scale-95 shadow-sm" href="#rsvp">
        RSVP
      </a>
</div>
</header>
{/*  Ambient Backdrop Glow on Desktop  */}
<div className="fixed inset-0 pointer-events-none -z-10 flex justify-center opacity-40">
<div className="w-full max-w-6xl h-full bg-gradient-to-b from-secondary-fixed/20 via-transparent to-primary-fixed/10 blur-3xl"></div>
</div>
{/*  Central Invitation Wrapper  */}
<main className="max-w-container-desktop-max mx-auto px-4 sm:px-6 pt-20 pb-16 relative">
{/*  1. COVER / HERO SECTION PEMBUKA  */}
<section className="min-h-[85vh] flex flex-col justify-center items-center text-center relative py-12 md:py-20 my-6 bg-surface-container-lowest gold-double-border paper-card-shadow rounded-xl p-6 sm:p-12 overflow-hidden" id="cover">
<div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-fixed/30 rounded-full blur-2xl"></div>
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-fixed/20 rounded-full blur-2xl"></div>
{/*  Monogram  */}
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-secondary/40 bg-surface-container-low text-secondary font-headline-md text-headline-md mb-6 shadow-sm">
        R &amp; D
      </div>
<p className="text-label-caps font-label-caps text-secondary tracking-widest uppercase mb-3">WALIMATUL 'URS</p>
<h1 className="font-display-hero text-display-hero-mobile md:font-display-hero md:text-display-hero text-primary tracking-tight mb-4">
        The Wedding of Raden &amp; Dian
      </h1>
<p className="font-subheading-editorial text-subheading-editorial text-on-surface-variant italic mb-6">
        Sabtu, 18 Oktober 2025 • Jakarta Selatan
      </p>
{/*  Dynamic Guest Welcome Card  */}
<div className="bg-surface-container-low/90 border border-outline-variant/50 px-6 py-4 rounded-xl max-w-md w-full my-6 text-center shadow-sm">
<p className="text-label-caps font-label-caps text-on-surface-variant mb-1">KEPADA YTH. BAPAK/IBU/SAUDARA/I:</p>
<p className="font-headline-sm text-headline-sm text-primary font-semibold" id="guest-name-badge">
          Tamu Undangan Terhormat
        </p>
<p className="text-body-sm font-body-sm text-outline mt-1 italic">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir dan memberikan doa restu.
        </p>
</div>
{/*  Hero Call to Action  */}
<button className="mt-4 inline-flex items-center gap-2 px-8 py-3.5 bg-primary-container hover:bg-primary text-surface font-label-button text-label-button rounded-xl uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 group" id="open-invitation-btn" >
<span className="material-symbols-outlined text-secondary-fixed transition-transform group-hover:scale-110" data-icon="mail">mail</span>
<span>Buka Undangan</span>
</button>
</section>
{/*  CONTENT BODY (Unlocked with Open Invitation button)  */}
<div className="space-y-16" id="invitation-body">
{/*  Ayat & Kutipan Romantis  */}
<section className="text-center max-w-2xl mx-auto py-8 px-6 bg-surface-container-low/50 rounded-xl border border-secondary/20 shadow-sm">
<span className="material-symbols-outlined text-secondary text-3xl mb-2" data-icon="format_quote">format_quote</span>
<p className="font-headline-sm text-headline-sm text-primary italic leading-relaxed mb-4">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
        </p>
<p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">
          — QS. Ar-Rum: 21 —
        </p>
</section>
{/*  2. PROFIL MEMPELAI (Couple Profile)  */}
<section className="pt-8 scroll-mt-24" id="mempelai">
<div className="text-center mb-10">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Groom &amp; Bride</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mt-1">
            Mempelai yang Berbahagia
          </h2>
<div className="w-16 h-0.5 bg-secondary/40 mx-auto mt-3"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
{/*  Mempelai Pria  */}
<div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl gold-double-border paper-card-shadow flex flex-col items-center text-center">
<div className="relative w-48 h-56 rounded-t-full overflow-hidden border-2 border-secondary/40 mb-6 p-1 bg-surface-container-low">
<img className="w-full h-full object-cover rounded-t-full" data-alt="Intimate portrait of an elegant groom in bespoke midnight green and gold modern bespoke suit against architectural warm ivory garden background, high-end editorial wedding photography, soft ambient lighting, clean luxury aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB7noqld6ssRzxUpCtfFwlOT00YCOSF4AKFtIdkXhVrw4dK5rh1rwcxcUJvWxpfHAyv5lWpe94A2Be36COyIBI0ymRrz96ykUXkEqV9iLrw2Wo6HI-nhyeSVsRgxxj7k3ZBG-oS5HYr2QgwZ9iMfy1Wn0sT9UJgl5a-ATjiIlN8POB-Hr-YkEj2piwDC2AGFOgRRpM734IcEU8Gyh-xIZckcMdhn0Kye5Wmbvp2LTn2aJWMAIvBBwLgA"/>
</div>
<h3 className="font-headline-md text-headline-md text-primary">
              Raden Arya Wijaya, S.T.
            </h3>
<p className="font-label-caps text-label-caps text-secondary mt-1 uppercase tracking-wider">Mempelai Pria</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-4">
              Putra pertama dari pasangan<br/>
<strong className="text-primary font-medium">Bpk. Bambang Wijaya</strong> &amp; <strong className="text-primary font-medium">Ibu Siti Rahayu</strong>
</p>
<div className="mt-6 pt-4 border-t border-outline-variant/30 w-full flex justify-center">
<a className="inline-flex items-center gap-1.5 text-secondary hover:text-primary transition-colors text-body-sm font-body-sm" href="https://instagram.com" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-base" data-icon="photo_camera">photo_camera</span>
<span>@raden.wijaya</span>
</a>
</div>
</div>
{/*  Mempelai Wanita  */}
<div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl gold-double-border paper-card-shadow flex flex-col items-center text-center">
<div className="relative w-48 h-56 rounded-t-full overflow-hidden border-2 border-secondary/40 mb-6 p-1 bg-surface-container-low">
<img className="w-full h-full object-cover rounded-t-full" data-alt="Refined portrait of a graceful Indonesian bride dressed in artisanal bridal ivory kebaya with golden embroidery and subtle pearl jewelry, warm natural sunlight, luxury editorial aesthetic with lush botanical shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtTsTsluVELmgMSUgbKljoZzkh76BUd4PdwbD9o_QagwLVUrqOawygF64JafUNV2VnnWZ3Z4dOGXfTGwmxqP-Pcvbo_fqs4Psok1IC0Ys0TNPgMI0DchrQMwa7tEQMJlXDTkK0eNc4Iaz2A141HtufHRi0-noGIYYGCzeCn7N6Sucm5Ycb5Xg5M9T5A3YwU2wbEzmidB-qkBDC9nI-f-EVpB3WHJeeygJrNvfrF1rF4Sc909ZeackegA"/>
</div>
<h3 className="font-headline-md text-headline-md text-primary">
              Dian Paramitha, M.Ds.
            </h3>
<p className="font-label-caps text-label-caps text-secondary mt-1 uppercase tracking-wider">Mempelai Wanita</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-4">
              Putri kedua dari pasangan<br/>
<strong className="text-primary font-medium">Bpk. Hendra Kusuma</strong> &amp; <strong className="text-primary font-medium">Ibu Dewi Lestari</strong>
</p>
<div className="mt-6 pt-4 border-t border-outline-variant/30 w-full flex justify-center">
<a className="inline-flex items-center gap-1.5 text-secondary hover:text-primary transition-colors text-body-sm font-body-sm" href="https://instagram.com" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-base" data-icon="photo_camera">photo_camera</span>
<span>@dianparamitha</span>
</a>
</div>
</div>
</div>
</section>
{/*  3. DETAIL ACARA & LIVE COUNTDOWN  */}
<section className="pt-8 scroll-mt-24" id="acara">
<div className="text-center mb-10">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Agenda &amp; Lokasi</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mt-1">
            Rangkaian Acara Pernikahan
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-lg mx-auto">
            Dengan penuh rasa syukur, kami mengundang Anda untuk turut hadir dalam momen suci ikrar janji dan resepsi kami.
          </p>
</div>
{/*  Live Countdown Component  */}
<div className="bg-primary-container text-surface p-6 sm:p-8 rounded-xl shadow-md mb-10 text-center border border-secondary/30">
<p className="font-label-caps text-label-caps text-secondary-fixed tracking-widest uppercase mb-4">
            MENGHITUNG HARI MENUJU HARI BAHAGIA
          </p>
<div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
<div className="bg-surface/10 backdrop-blur-sm p-3 rounded-lg border border-surface/15">
<span className="font-headline-md text-headline-md md:font-headline-lg md:text-headline-lg text-surface-bright font-bold block" id="days">00</span>
<span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase text-[10px] sm:text-xs">Hari</span>
</div>
<div className="bg-surface/10 backdrop-blur-sm p-3 rounded-lg border border-surface/15">
<span className="font-headline-md text-headline-md md:font-headline-lg md:text-headline-lg text-surface-bright font-bold block" id="hours">00</span>
<span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase text-[10px] sm:text-xs">Jam</span>
</div>
<div className="bg-surface/10 backdrop-blur-sm p-3 rounded-lg border border-surface/15">
<span className="font-headline-md text-headline-md md:font-headline-lg md:text-headline-lg text-surface-bright font-bold block" id="minutes">00</span>
<span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase text-[10px] sm:text-xs">Menit</span>
</div>
<div className="bg-surface/10 backdrop-blur-sm p-3 rounded-lg border border-surface/15">
<span className="font-headline-md text-headline-md md:font-headline-lg md:text-headline-lg text-surface-bright font-bold block" id="seconds">00</span>
<span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase text-[10px] sm:text-xs">Detik</span>
</div>
</div>
<div className="mt-6 flex flex-wrap justify-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2 border border-secondary-fixed text-surface-bright hover:bg-surface/10 rounded-lg text-label-button font-label-button transition-colors" >
<span className="material-symbols-outlined text-sm" data-icon="event">event</span>
<span>Simpan ke Kalender (Google)</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 border border-surface/30 text-surface-bright hover:bg-surface/10 rounded-lg text-label-button font-label-button transition-colors" >
<span className="material-symbols-outlined text-sm" data-icon="calendar_month">calendar_month</span>
<span>Unduh Kalender (.iCal)</span>
</button>
</div>
</div>
{/*  Schedule Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/*  Akad Nikah  */}
<div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl gold-double-border paper-card-shadow flex flex-col justify-between">
<div>
<div className="flex items-center justify-between border-b border-outline-variant/40 pb-4 mb-5">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">PROSESI AKAD</span>
<span className="material-symbols-outlined text-primary" data-icon="church">church</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Akad Nikah</h3>
<p className="font-body-sm text-body-sm text-secondary font-medium mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-base" data-icon="schedule">schedule</span>
<span>Sabtu, 18 Oktober 2025 • 08:00 - 10:00 WIB</span>
</p>
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/30 text-body-sm font-body-sm text-on-surface-variant mb-6">
<p className="font-semibold text-primary mb-1">Masjid Agung Al-Ikhlas</p>
<p>Jl. Masjid Ikhlas No. 12, Kebayoran Baru, Jakarta Selatan, DKI Jakarta</p>
<p className="text-outline text-xs mt-2 italic">*Khusus keluarga besar dan kerabat terdekat</p>
</div>
</div>
<a className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-secondary text-primary hover:bg-secondary/10 rounded-lg font-label-button text-label-button transition-all" href="https://maps.google.com" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-base text-secondary" data-icon="location_on">location_on</span>
<span>Buka Petunjuk Arah (Maps)</span>
</a>
</div>
{/*  Resepsi Pernikahan  */}
<div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl gold-double-border paper-card-shadow flex flex-col justify-between">
<div>
<div className="flex items-center justify-between border-b border-outline-variant/40 pb-4 mb-5">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">PERAYAAN SYUKURAN</span>
<span className="material-symbols-outlined text-primary" data-icon="celebration">celebration</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Resepsi Pernikahan</h3>
<p className="font-body-sm text-body-sm text-secondary font-medium mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-base" data-icon="schedule">schedule</span>
<span>Sabtu, 18 Oktober 2025 • 11:00 - 14:00 WIB</span>
</p>
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/30 text-body-sm font-body-sm text-on-surface-variant mb-6">
<p className="font-semibold text-primary mb-1">Grand Ballroom Plataran Dharmawangsa</p>
<p>Jl. Dharmawangsa Raya No. 6, Kebayoran Baru, Jakarta Selatan, DKI Jakarta</p>
<p className="text-outline text-xs mt-2 italic">*Dress code: Formal Earth Tones &amp; Batik Halus</p>
</div>
</div>
<a className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-secondary text-primary hover:bg-secondary/10 rounded-lg font-label-button text-label-button transition-all" href="https://maps.google.com" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-base text-secondary" data-icon="location_on">location_on</span>
<span>Buka Petunjuk Arah (Maps)</span>
</a>
</div>
</div>
</section>
{/*  4. GALERI PRE-WEDDING (Masonry + Lightbox Modal)  */}
<section className="pt-8 scroll-mt-24" id="galeri">
<div className="text-center mb-10">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Dokumentasi</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mt-1">
            Galeri Kisah &amp; Potret Kasih
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Momen-momen bermakna perjalanan cinta kami sebelum melangkah ke jenjang yang sakral.
          </p>
</div>
{/*  Masonry Grid Layout  */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="cursor-pointer group relative overflow-hidden rounded-lg gold-double-border shadow-sm" >
<img className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Romantic pre-wedding couple sitting together on antique wooden veranda surrounded by lush tropical ferns, soft evening sun rays, warm ivory and forest green hues, fine art photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEK8dLPzWx02A9Oj9dhmLMxuq5syd_165FqrTj9JOtpFwRHG0UAKcegc45fCy_jDhWkUho-8_cDpHoGfsenMyci3vOK2lWisObunw1G9YEG4ALSWU-VjnmoqZP94Ld2Dr2ErbFkw25O4vrHfpNWx_NMTLSlhwfLIMkcf-HwhDC0jK0JExNlajHzv1vGqvX7p81PXyWlgjJZAeBn0oDtblSKp08d_ZHS8V48VqYMCrGVIlC7LrTiA6GpQ"/>
<div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-surface">
<span className="material-symbols-outlined text-3xl" data-icon="zoom_in">zoom_in</span>
</div>
</div>
<div className="cursor-pointer group relative overflow-hidden rounded-lg gold-double-border shadow-sm" >
<img className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Close-up emotional portrait of wedding couple laughing tenderly, groom in olive suit and bride in delicate warm lace dress, cinematic shallow depth of field, warm golden hour palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUSRXU1ThuoMTngIvsTNwgsuOe_qJSOkjAssKr6J-FntRx62tFrtIHbWCQxtCb0VEU__GgzOeDJIOpv_ZfDQ4fVi7YGTq41HMsnTF3qLqWi9aThc7ddwY8WXhdqNTLK7XxAd3IRRYNRQlctNLGhL25mSK3FMULnj6lK7QGady69wfoNUUWnJhFhfWwr-ZQZJY_Am3bByZypgKiJ78wcFcd1z9HBI7KRHnfyXAdTViOrzLf7iNfBweI1Q"/>
<div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-surface">
<span className="material-symbols-outlined text-3xl" data-icon="zoom_in">zoom_in</span>
</div>
</div>
<div className="cursor-pointer group relative overflow-hidden rounded-lg gold-double-border shadow-sm" >
<img className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Architectural silhouette of Indonesian couple standing inside a high ceiling stone colonial pavilion with warm ambient chandelier lighting, dramatic editorial composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgEyKKsi-FLXHVy36XAi_0zRLNrsQU_XofUbwOR2l6x7aFwyR9ROrZNIIN9E8pehaG0oSLYEMLbKsaVew2lZ30WKwRTeDqf5zOPdx19qY-sIdCuovOXqaJahpt3w3be7Qn4fc1z2kdA1_mgOjut7vkNjFc_kNBo1FaXEomMaznSGd3VvbMPaYvc0IXe69znasmpsKipwmC3HJSYRqIVgTv1ljcXpFDN9JXIEdSsYq6NCijyQHY_jXT9A"/>
<div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-surface">
<span className="material-symbols-outlined text-3xl" data-icon="zoom_in">zoom_in</span>
</div>
</div>
<div className="cursor-pointer group relative overflow-hidden rounded-lg gold-double-border shadow-sm" >
<img className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Bride holding a curated rustic floral bouquet featuring white roses, eucalyptus leaves, and champagne ribbons, soft natural morning window lighting, organic textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9UIPf3jcW8fB8_1Ceg0xw0kWvmDPTKfZ1LhbHK1xO0qdAgbTd1epj8RwraYR8IByf_kttCqj7QKETJQ6Ft7S3N_lXmjHYL7gkT60znCyZ26A4p9dP0oL4A2rRfyLxVT4f1UA4kQAl-4TZb2ksR02QGL1rfrCTUalc8kYLs-ai5YdbtsXZT2Ip4Te6twd14-W1RY1i4Ffto3mPUuZHWAZfdCoePpU3ofmVF2T9HM9NNSqE2UiLtH3mrQ"/>
<div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-surface">
<span className="material-symbols-outlined text-3xl" data-icon="zoom_in">zoom_in</span>
</div>
</div>
<div className="cursor-pointer group relative overflow-hidden rounded-lg gold-double-border shadow-sm" >
<img className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Couple walking side by side through a manicured botanical pine path, long shadows, calm earthy color grade with warm champagne warmth and deep forest green backdrop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo4lWro4x0T9g_1giOUaWdVMUd5bXukH6TCtyFttUsyABsjJk1HoLasprECymelWRGehzKzwowu8lMfHofyh6isvTjXfcwtxMehNtOAcWEhJt_Nwp2b0N3Q4gtxPDx1v7GiAFddO0WT43Pds_iADgt6AqVfHfIaJ7B-iFqpT6dDT15MO4LsrlsjKB9CRWRxi0djhEqrnetWs2Wl_t8Q3z-0xcUX-uZDeERZJAPYIgOeiomzqMrSGFS8Q"/>
<div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-surface">
<span className="material-symbols-outlined text-3xl" data-icon="zoom_in">zoom_in</span>
</div>
</div>
<div className="cursor-pointer group relative overflow-hidden rounded-lg gold-double-border shadow-sm" >
<img className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Tender moment of groom whispering to joyful bride during sunset at an outdoor garden venue, romantic warm flare, editorial wedding magazine aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuColZvZy_6nXlBAw4ewhImRKRZzFxwnPSGL1mbxq_BNswo-dFBLSGeMO21m0qt1M1_2cSKWgsDGGD-i2ulsWQsvkmdbisIWsx3m_eT1I7euD7C17_ODnb4FFDv-UbbTaPVE6uONzVZijjNqPA9_wR0XhlX9AZ_ljxfZkfCsL9kAJcSq0lLwJmBuRIpMbb8xN8ulJi2mchQfLCdSFku0xlbBAauoLReB-ZxrnIr5vKLQenfabXdAXMTuQQ"/>
<div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-surface">
<span className="material-symbols-outlined text-3xl" data-icon="zoom_in">zoom_in</span>
</div>
</div>
</div>
</section>
{/*  5. RSVP & BUKU TAMU (Live Google Sheets Connected)  */}
<section className="pt-8 scroll-mt-24" id="rsvp">
<div className="bg-surface-container-lowest p-6 sm:p-10 rounded-xl gold-double-border paper-card-shadow">
<div className="text-center mb-8">
{/*  Google Sheets Integration Badge  */}
<div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low border border-outline-variant/60 rounded-full text-label-caps font-label-caps text-primary mb-3">
<span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
<span>⚡ Live Sync connected to Google Sheets (API Spreadsheet v4)</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary">
              Konfirmasi Kehadiran &amp; Buku Tamu
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto mt-2">
              Mohon konfirmasikan kehadiran Anda sebelum tanggal <strong>1 Oktober 2025</strong> agar kami dapat mempersiapkan jamuan terbaik.
            </p>
</div>
{/*  RSVP Interactive Form  */}
<form className="max-w-xl mx-auto space-y-5" id="rsvp-form" >
{/*  Nama Lengkap  */}
<div>
<label className="block font-label-button text-label-button text-primary mb-1" htmlFor="rsvp-name">Nama Lengkap Anda</label>
<input className="w-full bg-surface-container-low border border-outline-variant/60 rounded-lg px-4 py-3 text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" id="rsvp-name" placeholder="Contoh: Bpk. Kurniawan &amp; Keluarga" required="" type="text"/>
</div>
{/*  Konfirmasi Kehadiran (Custom Luxury Pills)  */}
<div>
<label className="block font-label-button text-label-button text-primary mb-2">Konfirmasi Kehadiran</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="relative flex items-center p-3.5 rounded-lg border border-outline-variant/60 bg-surface-container-low cursor-pointer hover:border-secondary transition-all has-[:checked]:border-primary has-[:checked]:bg-secondary-fixed/20">
<input checked="" className="text-primary focus:ring-secondary mr-3" name="attendance"  type="radio" value="Hadir"/>
<span className="font-body-md text-body-md text-primary font-medium">Hadir dengan Senang Hati</span>
</label>
<label className="relative flex items-center p-3.5 rounded-lg border border-outline-variant/60 bg-surface-container-low cursor-pointer hover:border-secondary transition-all has-[:checked]:border-primary has-[:checked]:bg-secondary-fixed/20">
<input className="text-primary focus:ring-secondary mr-3" name="attendance"  type="radio" value="Tidak Hadir"/>
<span className="font-body-md text-body-md text-on-surface-variant">Maaf, Belum Bisa Hadir</span>
</label>
</div>
</div>
{/*  Jumlah Tamu (Conditional Field)  */}
<div className="transition-all duration-300" id="guest-count-container">
<label className="block font-label-button text-label-button text-primary mb-1" htmlFor="rsvp-guests">Jumlah Tamu yang Hadir</label>
<select className="w-full bg-surface-container-low border border-outline-variant/60 rounded-lg px-4 py-3 text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" id="rsvp-guests">
<option value="1">1 Orang</option>
<option value="2">2 Orang (Maksimal)</option>
</select>
</div>
{/*  Ucapan & Doa Restu  */}
<div>
<label className="block font-label-button text-label-button text-primary mb-1" htmlFor="rsvp-wishes">Ucapan &amp; Doa Restu</label>
<textarea className="w-full bg-surface-container-low border border-outline-variant/60 rounded-lg px-4 py-3 text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" id="rsvp-wishes" placeholder="Tuliskan harapan dan doa tulus untuk kedua mempelai..." required="" rows="3"></textarea>
</div>
{/*  Submit Button with Loading State  */}
<button className="w-full py-3.5 bg-primary-container hover:bg-primary text-surface font-label-button text-label-button tracking-wider rounded-lg uppercase transition-all duration-300 shadow-sm flex items-center justify-center gap-2" id="rsvp-submit-btn" type="submit">
<span className="material-symbols-outlined text-secondary-fixed text-base" data-icon="send">send</span>
<span id="submit-btn-text">Kirim Konfirmasi &amp; Ucapan</span>
</button>
</form>
{/*  Live Guestbook Feed (Optimistic UI updates)  */}
<div className="mt-12 pt-8 border-t border-outline-variant/40">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" data-icon="forum">forum</span>
<span>Buku Tamu &amp; Doa Restu (<span id="wishes-count">3</span>)</span>
</h3>
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Tersinkronisasi Otomatis</span>
</div>
<div className="space-y-4 max-h-96 overflow-y-auto pr-1" id="wishes-feed">
{/*  Feed Item 1  */}
<div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/40">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="font-semibold text-primary">Keluarga Besar Bpk. Handoko</span>
<span className="bg-primary-fixed text-on-primary-fixed text-xs px-2 py-0.5 rounded-full font-label-caps">Hadir (2 Orang)</span>
</div>
<span className="text-xs text-outline font-body-sm">Baru saja</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Selamat menempuh hidup baru untuk Raden dan Dian. Semoga menjadi keluarga sakinah, mawaddah, warahmah serta senantiasa dilimpahi keberkahan dan kebahagiaan seumur hidup. Aamiin!
                </p>
</div>
{/*  Feed Item 2  */}
<div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/40">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="font-semibold text-primary">Anissa Maharani &amp; Suami</span>
<span className="bg-primary-fixed text-on-primary-fixed text-xs px-2 py-0.5 rounded-full font-label-caps">Hadir (2 Orang)</span>
</div>
<span className="text-xs text-outline font-body-sm">2 jam lalu</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Happy wedding Dian sahabatku tersayang &amp; Mas Raden! Lancar terus sampai hari H ya. Looking forward to celebrating your grand day with you both!
                </p>
</div>
{/*  Feed Item 3  */}
<div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/40">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="font-semibold text-primary">Dimas Prasetyo</span>
<span className="bg-surface-variant text-on-surface-variant text-xs px-2 py-0.5 rounded-full font-label-caps">Berhalangan Hadir</span>
</div>
<span className="text-xs text-outline font-body-sm">5 jam lalu</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Barakallahu lakum wa baraka alaikum. Maaf belum bisa hadir langsung karena dinas tugas di luar kota, doa terbaik kami panjatkan untuk kebahagiaan kalian berdua.
                </p>
</div>
</div>
</div>
</div>
</section>
{/*  6. AMPLOP DIGITAL (Cashless Gifting)  */}
<section className="pt-8 scroll-mt-24" id="kado">
<div className="text-center mb-10">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Tanda Kasih</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mt-1">
            Amplop Digital &amp; Kado Kasih
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto mt-2">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun apabila Anda bermaksud memberikan tanda kasih, kami menyediakan sarana cashless gifting berikut.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Bank Card 1: BCA  */}
<div className="bg-surface-container-lowest p-6 rounded-xl gold-double-border paper-card-shadow flex flex-col justify-between">
<div>
<div className="flex justify-between items-center mb-4">
<span className="font-bold text-headline-sm text-primary tracking-wider">BCA</span>
<span className="material-symbols-outlined text-secondary" data-icon="credit_card">credit_card</span>
</div>
<p className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Nomor Rekening</p>
<div className="flex items-center justify-between bg-surface-container-low p-3 rounded-lg border border-outline-variant/40 mt-1 mb-3">
<span className="font-headline-sm text-headline-sm text-primary tracking-wider font-mono" id="rek-bca">8820 1928 38</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                a.n <strong className="text-primary font-medium">Raden Arya Wijaya</strong>
</p>
</div>
<button className="mt-5 w-full py-2.5 px-4 bg-primary-container hover:bg-primary text-surface rounded-lg font-label-button text-label-button tracking-wider flex items-center justify-center gap-2 transition-all" >
<span className="material-symbols-outlined text-sm text-secondary-fixed" data-icon="content_copy">content_copy</span>
<span>Salin Nomor Rekening</span>
</button>
</div>
{/*  Bank Card 2: Mandiri  */}
<div className="bg-surface-container-lowest p-6 rounded-xl gold-double-border paper-card-shadow flex flex-col justify-between">
<div>
<div className="flex justify-between items-center mb-4">
<span className="font-bold text-headline-sm text-primary tracking-wider">MANDIRI</span>
<span className="material-symbols-outlined text-secondary" data-icon="account_balance">account_balance</span>
</div>
<p className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Nomor Rekening</p>
<div className="flex items-center justify-between bg-surface-container-low p-3 rounded-lg border border-outline-variant/40 mt-1 mb-3">
<span className="font-headline-sm text-headline-sm text-primary tracking-wider font-mono" id="rek-mandiri">137 00 9823 112</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                a.n <strong className="text-primary font-medium">Dian Paramitha</strong>
</p>
</div>
<button className="mt-5 w-full py-2.5 px-4 bg-primary-container hover:bg-primary text-surface rounded-lg font-label-button text-label-button tracking-wider flex items-center justify-center gap-2 transition-all" >
<span className="material-symbols-outlined text-sm text-secondary-fixed" data-icon="content_copy">content_copy</span>
<span>Salin Nomor Rekening</span>
</button>
</div>
</div>
{/*  QRIS Section CTA  */}
<div className="mt-6 bg-surface-container-lowest p-6 rounded-xl gold-double-border text-center">
<div className="max-w-md mx-auto">
<span className="material-symbols-outlined text-3xl text-secondary mb-2" data-icon="qr_code_scanner">qr_code_scanner</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">QRIS Digital Payment</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
              Mendukung transfer instan via GoPay, OVO, ShopeePay, DANA, BCA Mobile, dan seluruh aplikasi perbankan berbasis QRIS.
            </p>
<button className="px-6 py-2.5 border border-secondary text-primary hover:bg-secondary/10 rounded-lg font-label-button text-label-button tracking-wider inline-flex items-center gap-2 transition-all" >
<span className="material-symbols-outlined text-sm text-secondary" data-icon="visibility">visibility</span>
<span>Lihat QRIS Kado</span>
</button>
</div>
</div>
</section>
{/*  7. WHATSAPP SHARE PREVIEW CARD  */}
<section className="pt-8">
<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/40">
<div className="flex items-center justify-between mb-4">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">Tampilan Kartu Berbagi WhatsApp</span>
<span className="material-symbols-outlined text-emerald-700" data-icon="chat">chat</span>
</div>
<div className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg overflow-hidden max-w-md mx-auto shadow-sm">
<div className="h-32 bg-secondary-fixed/30 relative flex items-center justify-center">
<span className="font-headline-md text-headline-md text-primary tracking-widest">R &amp; D</span>
</div>
<div className="p-4 bg-surface-container-lowest">
<p className="font-headline-sm text-headline-sm text-primary font-bold">The Wedding of Raden &amp; Dian</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Sabtu, 18 Oktober 2025. Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir memberikan doa restu.
              </p>
<p className="text-xs text-outline mt-2 font-mono">raden-dian-wedding.id</p>
</div>
</div>
<div className="mt-4 text-center">
<button className="inline-flex items-center gap-2 text-label-button font-label-button text-secondary hover:text-primary transition-colors" >
<span className="material-symbols-outlined text-base" data-icon="ios_share">ios_share</span>
<span>Kirim &amp; Bagikan Undangan Ini</span>
</button>
</div>
</div>
</section>
</div>
</main>
{/*  Shared Footer Component  */}
<footer className="w-full py-12 px-6 text-center max-w-container-desktop-max mx-auto bg-surface-container-low dark:bg-surface-container border-t border-outline-variant/40 dark:border-outline/30">
<div className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed mb-4">
      Raden Arya Wijaya &amp; Dian Paramitha
    </div>
<div className="flex flex-wrap justify-center gap-6 mb-6">
<a className="text-primary dark:text-inverse-primary font-medium hover:text-secondary transition-colors duration-200 text-label-caps font-label-caps" href="#rsvp">Konfirmasi Kehadiran</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-secondary transition-colors duration-200 text-label-caps font-label-caps" href="#acara">Panduan Lokasi</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-secondary transition-colors duration-200 text-label-caps font-label-caps" href="#acara">Protokol Acara</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-secondary transition-colors duration-200 text-label-caps font-label-caps" href="https://wa.me" rel="noopener noreferrer" target="_blank">Hubungi Panitia</a>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-dim max-w-md mx-auto mb-2">
      © 2025 Raden &amp; Dian Wedding Celebration. Synchronized in real-time with Google Sheets Concierge.
    </p>
<p className="text-[11px] text-outline italic">
      Dibuat dengan cinta &amp; doa restu seluruh keluarga.
    </p>
</footer>
{/*  FLOATING AUDIO CONTROLLER (Bottom Left)  */}
<div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
<div className="cursor-pointer group flex items-center gap-3 bg-surface-container-lowest/90 backdrop-blur-md border border-secondary/40 shadow-lg p-2 pr-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95" >
{/*  Vinyl Disc Icon  */}
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-secondary-fixed animate-spin-slow paused border border-secondary/40 shadow-inner" id="vinyl-disc">
<span className="material-symbols-outlined text-lg" data-icon="music_note">music_note</span>
</div>
<div className="text-left leading-tight">
<p className="font-label-caps text-label-caps text-secondary font-semibold uppercase">Background Music</p>
<p className="text-xs text-on-surface-variant font-medium" id="music-status-text">Klik untuk Putar</p>
</div>
</div>
</div>
{/*  FLOATING QUICK NAVIGATION PILLS (Bottom Center Mobile / Tablet)  */}
<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-surface/90 backdrop-blur-md border border-outline-variant/40 shadow-xl px-4 py-2 rounded-full flex items-center gap-2 md:gap-4">
<a className="p-2 text-primary hover:text-secondary transition-colors" href="#mempelai" title="Mempelai">
<span className="material-symbols-outlined text-lg" data-icon="favorite">favorite</span>
</a>
<a className="p-2 text-primary hover:text-secondary transition-colors" href="#acara" title="Acara">
<span className="material-symbols-outlined text-lg" data-icon="calendar_today">calendar_today</span>
</a>
<a className="p-2 text-primary hover:text-secondary transition-colors" href="#galeri" title="Galeri">
<span className="material-symbols-outlined text-lg" data-icon="photo_library">photo_library</span>
</a>
<a className="p-2 text-primary hover:text-secondary transition-colors" href="#rsvp" title="RSVP">
<span className="material-symbols-outlined text-lg" data-icon="mail">mail</span>
</a>
<a className="p-2 text-primary hover:text-secondary transition-colors" href="#kado" title="Kado">
<span className="material-symbols-outlined text-lg" data-icon="featured_seasonal_and_gifts">featured_seasonal_and_gifts</span>
</a>
</div>
{/*  LIGHTBOX MODAL  */}
<div className="fixed inset-0 z-50 hidden bg-primary/90 backdrop-blur-md flex items-center justify-center p-4" id="lightbox-modal">
<button className="absolute top-6 right-6 text-surface hover:text-secondary-fixed text-3xl transition-colors" >
<span className="material-symbols-outlined text-3xl" data-icon="close">close</span>
</button>
<div className="max-w-3xl w-full text-center">
<img className="max-h-[80vh] mx-auto rounded-lg shadow-2xl object-contain border border-secondary/40" data-alt="Expanded high-resolution luxury wedding invitation gallery photograph displaying gentle botanical and editorial atmosphere with golden accents." id="lightbox-image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuM_KiGPDQ2saY8GJiVy7VP8vMLS4bqmYmsVOodmXjKjO6j5tQKdCtsq2yT-arY1_5aB2DyNOr7g2QKwGQxeOBNB5oo1KHm3nOYl6hWe5B9kdcnLdlm1w6M2jjr8E9zHgDU9wV3jyEJIDuIY0l6yVJj-ZzBtOstUjz4s5HzWeANHZVNQwHplorfhFCJlPBRxTp3bATUp_3TovnZYzGjXiPZSvK0hxGdoGcMQ1PROHkDtExsct7A3vm3w"/>
<p className="text-surface font-body-sm text-body-sm mt-4 italic" id="lightbox-caption"></p>
</div>
</div>
{/*  QRIS MODAL  */}
<div className="fixed inset-0 z-50 hidden bg-primary/80 backdrop-blur-md flex items-center justify-center p-4" id="qris-modal">
<div className="bg-surface-container-lowest max-w-sm w-full rounded-xl gold-double-border p-6 text-center shadow-2xl relative">
<button className="absolute top-4 right-4 text-on-surface hover:text-secondary transition-colors" >
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Digital Angpao</span>
<h3 className="font-headline-sm text-headline-sm text-primary mt-1 mb-4">QRIS Pernikahan</h3>
{/*  Simulated QR Box  */}
<div className="w-56 h-56 mx-auto bg-surface-container-low border-2 border-secondary/40 rounded-lg p-3 flex flex-col items-center justify-center relative shadow-inner">
<span className="material-symbols-outlined text-6xl text-primary" data-icon="qr_code_2">qr_code_2</span>
<span className="font-label-caps text-label-caps text-outline mt-2 tracking-widest">NMID: ID1029384756</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-4">
        Scan melalui aplikasi m-Banking atau dompet digital apa saja (BCA, Mandiri, GoPay, OVO, ShopeePay).
      </p>
<button className="mt-5 w-full py-2 bg-primary-container text-surface rounded-lg font-label-button text-label-button tracking-wider uppercase" >
        Tutup
      </button>
</div>
</div>
{/*  TOAST NOTIFICATION CONTAINER  */}
<div className="fixed top-20 right-6 z-50 flex flex-col gap-2 pointer-events-none" id="toast-container"></div>
{/*  JAVASCRIPT LOGIC  */}


    </>
  );
}
