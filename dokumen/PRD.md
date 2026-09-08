Pilihan arsitektur yang sangat praktis! Untuk proyek sekali pakai yang datanya perlu dibaca langsung oleh keluarga atau pasangan, menggunakan Google Sheets jauh lebih efisien daripada harus menyiapkan *environment* *database* khusus.

Berikut adalah PRD yang sudah diperbarui (mengganti Prisma/PostgreSQL dengan integrasi Google Sheets). Silakan salin dokumen ini untuk AI Agent Anda:

---

## Product Requirements Document (PRD): Web Undangan Pernikahan (Google Sheets Version)

### 1. Ringkasan Proyek

Proyek ini bertujuan untuk membangun sebuah *website* undangan pernikahan digital yang elegan, responsif, dan interaktif. *Website* ini akan dibagikan kepada tamu undangan melalui aplikasi pesan singkat (terutama WhatsApp). Sistem ini dilengkapi dengan fitur RSVP dan Buku Tamu yang datanya akan disimpan dan diambil langsung dari Google Sheets agar mudah dikelola secara kolaboratif.

### 2. Rekomendasi Tech Stack (Untuk AI Agent)

* **Frontend:** Next.js (App Router) dengan TypeScript.
* **Styling:** Tailwind CSS untuk *layouting mobile-first*, dipadukan dengan Framer Motion untuk animasi (*fade-in*, *scroll animations*).
* **Data Storage:** Google Sheets (sebagai *database*).
* **API/Data Fetching:** Google Apps Script (GAS) untuk membuat REST API sederhana (menerima POST request dari *form* dan GET request untuk menampilkan daftar ucapan), atau menggunakan layanan *wrapper* pihak ketiga seperti SheetDB / Stein.
* **Deployment:** Vercel atau Netlify.

### 3. Target Pengguna

1. **Tamu Undangan (End-User):** Membuka web melalui *smartphone*, melihat informasi acara, menulis ucapan, dan mengonfirmasi kehadiran.
2. **Pemilik Acara (Admin/Keluarga):** Memantau rekap tamu yang hadir langsung melalui *spreadsheet* Google Sheets tanpa perlu *login* ke *dashboard* khusus.

### 4. Fitur Utama & Kebutuhan UI/UX

#### A. Halaman Sampul (Hero Section)

* **Kebutuhan:** Tampilan layar penuh saat web pertama kali dibuka.
* **Elemen:** Nama panggilan kedua mempelai, tanggal acara, tombol "Buka Undangan" (berfungsi membuka kunci *scroll* dan memicu *background music*), serta animasi *background* / foto utama.

#### B. Profil Mempelai

* **Kebutuhan:** Memperkenalkan pasangan pengantin.
* **Elemen:** Foto, nama lengkap, nama orang tua, dan tautan Instagram.

#### C. Detail Acara (Event Schedule)

* **Kebutuhan:** Menginformasikan waktu dan tempat secara akurat.
* **Elemen:** Waktu & lokasi Akad/Pemberkatan dan Resepsi, tombol **"Simpan ke Kalender"**, dan tombol **"Buka di Google Maps"**.

#### D. Galeri Foto

* **Kebutuhan:** Menampilkan foto-foto *pre-wedding*.
* **Elemen:** *Masonry grid* atau *carousel*.

#### E. RSVP & Buku Tamu (Guestbook) - Terhubung ke Google Sheets

* **Kebutuhan:** Menangkap konfirmasi kehadiran tamu dan menampilkan ucapan doa.
* **Elemen Form RSVP:**
* Nama Tamu (Input Text).
* Konfirmasi Kehadiran (Dropdown/Radio: Hadir / Tidak Hadir).
* Jumlah Kehadiran (Dropdown: 1 atau 2 orang) -> *Hanya muncul jika memilih "Hadir"*.
* Pesan & Doa (Textarea).
* Tombol Submit (dengan *loading state* saat mengirim data ke API Google Sheets).


* **Daftar Ucapan:** Mengambil (GET) data dari Google Sheets dan menampilkannya dalam daftar yang bisa di-*scroll*.

#### F. Amplop Digital (Cashless Gifting)

* **Kebutuhan:** Opsi bagi tamu yang ingin mengirimkan hadiah.
* **Elemen:** Info rekening/e-wallet, tombol "Salin Nomor Rekening", dan QR Code (QRIS).

### 5. Kebutuhan Non-Fungsional

* **Mobile-First Design:** Dioptimalkan untuk ukuran layar *mobile* (*max-w-md* pada *desktop*).
* **SEO & Open Graph (OG) Tags:** Konfigurasi `og:title`, `og:description`, dan `og:image` agar *preview* link di WhatsApp terlihat menarik.
* **Audio Control:** Tombol *floating* untuk *play/pause* musik.

### 6. Struktur Kolom Data (Google Sheets)

AI Agent harus menyiapkan *payload* JSON dari *frontend* yang sesuai dengan struktur kolom Google Sheets berikut (Kolom A sampai F):

1. `Timestamp` (Waktu pengisian otomatis)
2. `Nama` (String)
3. `Kehadiran` (String: "Hadir" / "Tidak Hadir")
4. `Jumlah_Orang` (Number)
5. `Ucapan` (Text)
