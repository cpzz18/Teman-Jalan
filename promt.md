
## 🧩 Deskripsi Proyek
Buatkan **website portofolio studi kasus UI/UX** untuk aplikasi **Teman Jalan** (aplikasi pencari teman perjalanan). Website ini bertujuan menampilkan prototype Figma interaktif sekaligus menceritakan proses desain menggunakan metode **Design Thinking**. Desain harus modern, bersih, dengan animasi halus, dan tema warna hijau segar `#00C853` & putih.

## 🧱 Struktur Halaman (Single Page)
1. **Header** (sticky, transparan saat di atas, berubah putih dengan blur saat di-scroll)
2. **Hero Section**: Judul, deskripsi singkat, tombol CTA, dan mockup ponsel yang menampilkan **iframe prototype Figma interaktif**
3. **Fitur & Keunggulan Aplikasi**: 4 kartu fitur dengan ikon (Lucide), judul, dan deskripsi
4. **Proses Desain (How It Works)**: Timeline vertikal yang menampilkan tahapan:
   - *Empathize* (embed Figma)
   - *Define* (embed Figma)
   - *Ideate: Crazy 8's & Brainstorming* (embed Figma)
   - *Low-Fidelity Sketches* (embed Figma)
   - *User Flow* (embed Figma)
   - *Information Architecture* (embed Figma)
   - *UI Kit & Design System* (embed Figma)
   - *Prototype* (embed Figma interaktif)
   - *Test* (opsional: teks atau gambar, tidak wajib embed)
5. **Footer**: hak cipta, ikon sosial media

## 🛠️ Teknologi & Library
- **React 19** + **Vite**
- **GSAP** (`gsap`, `@gsap/react`) & **ScrollTrigger** untuk animasi scroll
- **Lucide React** untuk ikon
- **@tsparticles/react** + `@tsparticles/slim` untuk partikel background (bentuk "bits" bergerak)
- **Tailwind CSS** (utility-first styling) – opsional bisa ganti CSS murni, tapi disarankan Tailwind
- Wajib **JavaScript/JSX** (bukan TypeScript)

## 🎨 Tema Warna & Gaya
- Warna utama: `#00C853` (hijau)
- Warna utama gelap (hover): `#00a844`
- Background umum: putih (`#ffffff`)
- Background section proses: abu-abu sangat muda (`#f9fafb`)
- Teks: abu-abu gelap (`#1f2937`), abu-abu medium (`#4b5563`)
- Partikel background: warna `#00C853`, bentuk lingkaran kecil, bergerak lambat

## 📌 Persyaratan Fungsional & Teknis
1. **Header**  
   - Sticky di atas, transparan saat posisi paling atas (`scrollY < 10`), berubah menjadi `bg-white/80 backdrop-blur shadow-sm` saat di-scroll.
   - Navigasi anchor ke: `#fitur`, `#proses`, `#prototype`, `#test` (jika ada).
   - Responsif: menu hamburger di mobile.

2. **Hero Section**  
   - Tata letak dua kolom di desktop: kiri teks, kanan mockup ponsel. Di mobile tumpuk (mockup dulu, teks di bawah).
   - Mockup ponsel: bingkai hitam dengan notch, di dalamnya ada iframe embed Figma (link prototype utama).
   - Animasi masuk: teks dari kiri, mockup dari bawah, tombol fade-in. Gunakan **GSAP timeline** saat komponen mount.

3. **Fitur & Keunggulan**  
   - Grid 4 kolom di desktop, 2 di tablet, 1 di mobile.
   - Setiap kartu memiliki ikon Lucide (lingkaran latar hijau muda), judul, deskripsi.
   - Animasi stagger: kartu muncul satu per satu menggunakan **GSAP + ScrollTrigger** (`toggleActions: "play none none reverse"`).

4. **Proses Desain (Timeline)**  
   - Setiap tahap memiliki:
     - Ikon lingkaran di kiri (dengan garis vertikal penghubung)
     - Judul dan deskripsi singkat
     - **Embed Figma** di bawahnya dalam bingkai putih dengan rasio aspek 4:3 (desktop 16:9), border, shadow ringan.
   - Embed Figma diambil dari link embed khusus (format: `https://www.figma.com/embed?embed_host=share&url=...`). Pastikan setiap tahap memiliki URL yang berbeda sesuai halaman/file Figma yang relevan.
   - Animasi stagger: setiap blok tahap muncul dengan `opacity 0, y 40` menggunakan GSAP + ScrollTrigger.
   - Tahap "Test" boleh tanpa embed, sebagai gantinya kotak dashed untuk placeholder.

5. **Partikel Background**  
   - Menggunakan `<Particles>` dari `@tsparticles/react`, diinisialisasi dengan `loadSlim`.
   - Posisi absolute menutupi seluruh halaman, `z-index -10`.
   - Partikel: 60-80 buah, warna `#00C853`, opacity 0.4, ukuran 2-3px, bergerak random lambat. Interaktivitas: repulse saat hover, push saat klik.

6. **GSAP & ScrollTrigger**  
   - Register plugin di `App.jsx` sekali.
   - Gunakan hook `useGSAP` dari `@gsap/react` untuk animasi dalam komponen (membersihkan otomatis).
   - ScrollTrigger dengan `start: "top 70%"` atau `"top 80%"` agar animasi mulai saat elemen hampir terlihat.
   - Hindari penggunaan `gsap.from` di luar `useGSAP`.

7. **Responsivitas**  
   - Breakpoint Tailwind default (`sm`, `md`, `lg`).
   - Ukuran mockup ponsel disesuaikan agar tidak terlalu besar di mobile.
   - Iframe embed Figma harus bisa di-scroll di dalamnya (terutama di mobile).

8. **Kustomisasi Konten**  
   - Semua teks (judul, deskripsi fitur, cerita proses) dan URL embed Figma dapat dengan mudah diganti. Gunakan variabel/objek data di masing-masing komponen.


## 🎯 Tujuan Akhir
Website siap dideploy (misal ke Vercel) sebagai portofolio UI/UX yang interaktif dan profesional, menunjukkan proses desain lengkap dengan embed Figma di setiap tahap.

---