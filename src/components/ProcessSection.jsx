import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Lightbulb,
  PenLine,
  GitBranch,
  LayoutGrid,
  Palette,
  Smartphone,
  FlaskConical,
  AlertCircle,
  HelpCircle,
  Target,
  ClipboardList,
  Mic,
  Eye,
  FileCheck,
  Users,
  ChartNoAxesColumn,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BASE = 'https://www.figma.com/embed?embed_host=share&url=';

const EMPATHIZE_FIGMA_URL = BASE + encodeURIComponent('https://www.figma.com/design/Y3NHLR5LgUpNu5y3gUyGEd/UI-UX-DESIGN?node-id=0-1&t=cQz2x9kOTgNGlvvF-1');

const howMightWe = [
  {
    question: 'Bagaimana kita memberikan kepastian waktu perjalanan yang akurat agar pengguna dapat merencanakan aktivitasnya tanpa risiko keterlambatan?',
    solutions: [
      '"Driver Availability Indicator" tampilkan jumlah driver aktif di sekitar lokasi user secara real-time',
      'Estimasi waktu dalam bentuk rentang (mis. 5–8 menit) untuk meningkatkan akurasi persepsi pengguna',
      'Prioritaskan driver dengan riwayat performa tinggi pada area dan waktu permintaan tinggi',
      '"Auto Suggestion Berdasarkan Kebiasaan" — saran otomatis berdasarkan waktu dan pola aktivitas user',
      'Fitur "1-Tap Booking" pesan ojek hanya dengan satu klik menggunakan data lokasi dan tujuan yang sudah tersimpan',
    ],
  },
  {
    question: 'Bagaimana kita mengurangi dampak pembatalan pesanan yang merugikan pengguna?',
    solutions: [
      'Alihkan pesanan secara otomatis ke driver terdekat jika terjadi pembatalan tanpa mengganggu alur penggunaan',
      'Sistem distribusi driver di area rawan macet dengan potensi permintaan tinggi',
      'Sarankan titik penjemputan alternatif yang lebih cepat dijangkau driver',
      'Perbarui estimasi waktu secara dinamis selama perjalanan berlangsung',
    ],
  },
  {
    question: 'Bagaimana kita membuat tampilan aplikasi lebih mudah dipahami untuk semua kalangan termasuk non-tech savvy?',
    solutions: [
      'Gunakan alur pemesanan yang lebih ringkas dengan lebih sedikit langkah (klik)',
      'Tampilkan informasi kondisi lalu lintas dan potensi keterlambatan sebelum pemesanan',
      'Shortcut 3-button untuk layanan yang paling sering digunakan',
      'Label dan ikon yang universal, mudah dipahami oleh semua segmen usia',
    ],
  },
];

const priorityMatrix = [
  { label: 'Fitur otomatis seperti auto-assign saat driver batal dan sistem prediksi kebiasaan memerlukan algoritma rumit dan waktu pembuatan yang lama.', impact: 'HIGH', effort: 'MED', color: '#ef4444' },
  { label: 'Fitur estimasi waktu dinamis dan info lalu lintas sangat bergantung pada keakuratan GPS dan maps. Jika data telat atau tidak akurat, pengguna akan kecewa.', impact: 'HIGH', effort: 'MED', color: '#ef4444' },
  { label: 'Fitur seperti "saran titik jemput alternatif" memakan tenaga besar untuk dikembangkan (High Effort), padahal dampaknya ke pengguna kecil (Low Impact).', impact: 'HIGH', effort: 'MED', color: '#ef4444' },
];

const ideateSteps = [
  {
    id: 'ideate',
    icon: Lightbulb,
    color: '#eab308',
    label: '3.1',
    title: "Crazy 8's & Brainstorming",
    description: 'Dalam sesi ini, tim melaksanakan metode Crazy 8\'s untuk menghasilkan solusi kreatif. Setiap anggota menuangkan 8 ide berupa gambar kasar menggunakan buku gambar, kemudian dilanjutkan dengan brainstorming bersama untuk memilih solusi yang paling feasible dan impactful. Ide yang terpilih menjadi dasar pengembangan solusi untuk How Might We (HMW) yang telah dirumuskan.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/design/Y3NHLR5LgUpNu5y3gUyGEd/UI-UX-DESIGN?node-id=270-38&t=cQz2x9kOTgNGlvvF-1'),
    hasEmbed: true,
  },
  {
    id: 'lofi',
    icon: PenLine,
    color: '#8b5cf6',
    label: '3.2',
    title: 'Low-Fidelity Sketches',
    description: 'Ide-ide solusi yang telah terpilih kemudian dituangkan ke dalam sketsa kasar (low-fidelity). Sketsa ini bertujuan untuk memvisualisasikan tata letak antarmuka, alur navigasi dasar, dan interaksi utama aplikasi. Proses ini membantu tim untuk melakukan iterasi awal dengan cepat tanpa terjebak detail visual.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/board/tk6ZVI2sdPOY2IP51L4pbr/LOW-FIDELITY?node-id=0-1&t=5FLNWz2eDXbPD5kK-1'),
    hasEmbed: true,
  },
  {
    id: 'userflow',
    icon: GitBranch,
    color: '#06b6d4',
    label: '3.3',
    title: 'User Flow',
    description: 'Memetakan alur perjalanan pengguna secara lengkap, mulai dari membuka aplikasi, proses pemesanan ojek online, hingga transaksi selesai. User flow ini memastikan setiap langkah yang dilakukan pengguna dapat berjalan dengan intuitif, efisien, dan bebas dari hambatan yang mengganggu pengalaman.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/design/EIs8gJbRXMBkjnnH7ZYU4Y/User-Flow?node-id=0-1&t=xcuCcHSwELSnhHo5-1'),
    hasEmbed: true,
  },
  {
    id: 'ia',
    icon: LayoutGrid,
    color: '#10b981',
    label: '3.4',
    title: 'Information Architecture',
    description: 'Menyusun struktur informasi dan navigasi aplikasi menggunakan metode sitemap dan card sorting. Tujuannya adalah mengelompokkan fitur dan konten secara logis sehingga pengguna dapat dengan mudah menemukan fungsi yang mereka butuhkan.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/file/YOUR_FILE_ID/page=IA'),
    hasEmbed: true,
  },
  {
    id: 'uikit',
    icon: Palette,
    color: '#00C853',
    label: '3.5',
    title: 'UI Kit & Design System',
    description: 'Membangun design system yang konsisten untuk seluruh aplikasi, mencakup palet warna, skala tipografi, komponen UI (tombol, input, kartu). UI Kit ini memastikan bahwa setiap layar memiliki tampilan yang seragam dan profesional, sehingga memperkuat branding aplikasi.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/design/KnpNl55KrngI2kYiM5Nei5/ui-kit-design-system?node-id=0-1&t=LVLMdF9M1Emm9vsU-1'),
    hasEmbed: true,
  },
  {
    id: 'prototype',
    icon: Smartphone,
    color: '#00C853',
    label: '3.6',
    title: 'Prototype',
    description: 'Menggabungkan seluruh komponen desain menjadi prototype interaktif beresolusi tinggi (high-fidelity). Prototype ini memungkinkan pengguna untuk mengalami langsung alur aplikasi, mulai dari pemesanan, pelacakan driver, hingga pembayaran. Prototype dapat diklik dan dinavigasikan secara langsung untuk simulasi pengalaman nyata.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/proto/Gnz6Qf3CSmbYVizRJR2cCC/Desain-Prototype?node-id=13-6&p=f&t=7aiHxYyyYotV711o-1&scaling=scale-down&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=13%3A6'),
    hasEmbed: true,
    isPrototype: true,
  },
];

function FigmaEmbed({ url, title, isPrototype }) {
  const isPlaceholder = !url || url.includes('YOUR_FILE_ID');
  if (isPlaceholder) {
    return (
      <div
        className="mt-5 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 text-gray-400"
        style={{ height: isPrototype ? '480px' : '260px' }}
      >
        <svg width="28" height="42" viewBox="0 0 38 57" fill="none" className="opacity-30">
          <path d="M19 28.5C19 25.98 20 23.56 21.78 21.78C23.56 20 25.98 19 28.5 19C31.02 19 33.44 20 35.22 21.78C36.99 23.56 38 25.98 38 28.5C38 31.02 36.99 33.44 35.22 35.22C33.44 36.99 31.02 38 28.5 38C25.98 38 23.56 36.99 21.78 35.22C20 33.44 19 31.02 19 28.5Z" fill="#A259FF" />
          <path d="M0 47.5C0 44.98 1 42.56 2.78 40.78C4.56 39 6.98 38 9.5 38H19V47.5C19 50.02 17.99 52.44 16.22 54.22C14.44 55.99 12.02 57 9.5 57C6.98 57 4.56 55.99 2.78 54.22C1 52.44 0 50.02 0 47.5Z" fill="#0ACF83" />
          <path d="M19 0V19H28.5C31.02 19 33.44 17.99 35.22 16.22C36.99 14.44 38 12.02 38 9.5C38 6.98 36.99 4.56 35.22 2.78C33.44 1 31.02 0 28.5 0H19Z" fill="#FF7262" />
          <path d="M0 9.5C0 12.02 1 14.44 2.78 16.22C4.56 17.99 6.98 19 9.5 19H19V0H9.5C6.98 0 4.56 1 2.78 2.78C1 4.56 0 6.98 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5C0 31.02 1 33.44 2.78 35.22C4.56 36.99 6.98 38 9.5 38H19V19H9.5C6.98 19 4.56 20 2.78 21.78C1 23.56 0 25.98 0 28.5Z" fill="#1ABCFE" />
        </svg>
        <span className="text-sm font-medium">coming soon</span>
      </div>
    );
  }
  return isPrototype ? (
    <div className="figma-embed-prototype">
      <iframe src={url} title={title} allowFullScreen loading="lazy" />
    </div>
  ) : (
    <div className="figma-embed-wrapper">
      <iframe src={url} title={title} allowFullScreen loading="lazy" />
    </div>
  );
}

function StepHeading({ badge, stepNum, title, highlight, subtitle }) {
  return (
    <div className="text-center mb-14">
      <span className="section-badge mb-4 inline-flex">{badge}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
        {stepNum}{' '}
        <span
          className="text-transparent bg-clip-text"
          style={{ backgroundImage: 'linear-gradient(135deg, #00C853, #00e676)' }}
        >
          {highlight}
        </span>
        {title && <span className="block text-2xl md:text-3xl text-gray-600 font-semibold mt-1">{title}</span>}
      </h2>
      {subtitle && <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const insightCardsRef = useRef([]);
  const refCounter = useRef(0);

  const registerRef = (el) => {
    if (el) {
      itemsRef.current[refCounter.current] = el;
      refCounter.current++;
    }
  };

  useGSAP(
    () => {
      itemsRef.current.forEach((item) => {
        if (!item) return;
        gsap.set(item, { opacity: 0, y: 40 });
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
        });
      });

      insightCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.set(card, { opacity: 0, y: 30 });
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef}>
      <section id="empathize" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-50 rounded-full opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-50 rounded-full opacity-40 blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          <div ref={registerRef}>
            <StepHeading
              badge="✦ Step 01"
              stepNum="Empathize"
              highlight=""
              subtitle="Kami melakukan riset mendalam terhadap 3 segmen pengguna (mahasiswa, pelajar SMP, guru les) untuk memahami kebutuhan, perilaku, dan pain points dalam penggunaan ojek online maupun pangkalan."
            />
          </div>

          <div ref={registerRef} className="mt-8">
            <FigmaEmbed url={EMPATHIZE_FIGMA_URL} title="Empathize — User Persona, Observation & Insight" />
          </div>

          <div ref={registerRef} className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-green-500 to-green-600" />
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center gap-1">
                      <ClipboardList className="w-4 h-4 text-green-600" />
                      Metodologi Riset
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { num: '01', label: 'Wawancara Kualitatif', desc: '3 pengguna: Aulia (mahasiswa), Chinta (pelajar SMP), Handoko (guru les)', icon: Mic },
                      { num: '02', label: 'Observasi Langsung', desc: 'Perilaku pemesanan di jam sibuk, hujan, dan pembatalan pesanan', icon: Eye },
                      { num: '03', label: 'Kuesioner', desc: '50+ responden untuk memvalidasi temuan kualitatif', icon: FileCheck },
                    ].map((m) => (
                      <div key={m.label} className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 mt-0.5">
                          <m.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 text-sm">{m.label}</div>
                          <div className="text-xs text-gray-500 leading-relaxed">{m.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-green-50/40 px-5 py-2 border-t border-green-100 text-xs text-green-700 flex items-center gap-2 mt-auto">
                  <Users className="w-3.5 h-3.5" />
                  <span>Total responden: 50+ pengguna aktif ojek online dan pangkalan</span>
                </div>
              </div>

              <div className="bg-gray-50/50 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-red-400 to-orange-400" />
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center gap-1">
                      <Lightbulb className="w-4 h-4 text-orange-500" />
                      Key Insights
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: 'Sulit Mendapat Driver', desc: 'Kesulitan di jam sibuk & saat hujan', tag: 'HIGH', color: 'red' },
                      { label: 'Akurasi Waktu Rendah', desc: 'Estimasi sering tidak sesuai', tag: 'HIGH', color: 'red' },
                      { label: 'Lonjakan Tarif', desc: 'Harga naik tiba-tiba di jam sibuk', tag: 'HIGH', color: 'red' },
                      { label: 'Keamanan Prioritas', desc: 'Share ride & pelacakan jadi prioritas', tag: 'HIGH', color: 'red' },
                      { label: 'UI yang Sederhana', desc: 'Non-tech savvy kesulitan navigasi', tag: 'MED', color: 'orange' },
                      { label: 'Promo & Voucher', desc: 'Pengguna aktif harap reward', tag: 'MED', color: 'orange' },
                    ].map((ins, idx) => {
                      const tagColor = ins.color === 'red' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700';
                      return (
                        <div
                          key={ins.label}
                          ref={(el) => (insightCardsRef.current[idx] = el)}
                          className="bg-white rounded-xl p-3 border border-gray-100 hover:shadow-sm transition-all duration-200 hover:border-green-200"
                        >
                          <div className="flex items-start gap-2">
                            <span className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${tagColor}`}>{ins.tag}</span>
                            <div className="min-w-0 flex-1">
                              <div className="font-semibold text-sm text-gray-800">{ins.label}</div>
                              <div className="text-xs text-gray-500 leading-tight mt-0.5">{ins.desc}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="bg-gray-100/50 px-5 py-2 border-t border-gray-200 text-xs text-gray-500 flex items-center gap-2 mt-auto">
                  <ChartNoAxesColumn className="w-3.5 h-3.5" />
                  <span>Berdasarkan 3 wawancara mendalam & 50+ kuesioner</span>
                </div>
              </div>
            </div>
          </div>

          <div ref={registerRef} className="mt-12">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-blue-500" />
              <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider">User Persona</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Aulia Raya', age: 19, role: 'Mahasiswa', color: '#00C853', bio: 'Mobilitas tinggi, butuh driver cepat & tepat waktu.' },
                { name: 'Chinta Az-Zahra', age: 15, role: 'Pelajar SMP', color: '#7c3aed', bio: 'Rutinitas sekolah & les, kesulitan driver jam pulang.' },
                { name: 'Handoko Wahyu', age: 55, role: 'Guru Les', color: '#f97316', bio: 'Tidak familiar aplikasi, butuh UI sederhana.' },
              ].map((p, idx) => (
                <div key={p.name} className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-gray-800">{p.name}</h4>
                      <p className="text-xs text-gray-400">{p.role}, {p.age} th</p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center" style={{ backgroundColor: `${p.color}15` }}>
                      <Users size={14} style={{ color: p.color }} />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{p.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="define" className="py-20 relative overflow-hidden" style={{ background: '#f9fafb' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50 rounded-full -translate-x-1/2 translate-y-1/2 opacity-30 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6">
          <div ref={registerRef}>
            <StepHeading
              badge="✦ Step 02"
              stepNum="Define"
              highlight=""
              subtitle="Mendefinisikan inti masalah berdasarkan temuan riset dan merumuskan peluang solusi melalui How Might We."
            />
          </div>

          <div ref={registerRef} className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gray-500 text-sm">
              Dari riset tahap Empathize, kami menemukan <span className="font-semibold text-gray-700">5 masalah utama</span> yang dihadapi pengguna. 
              Kemudian kami menyusun <span className="font-semibold text-gray-700">prioritas solusi</span> berdasarkan dampak (impact) dan usaha (effort), 
              serta merumuskan <span className="font-semibold text-gray-700">3 pertanyaan How Might We</span> untuk memandu ide solusi.
            </p>
          </div>

          <div ref={registerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col">
              <div className="h-1.5 bg-gradient-to-r from-red-500 to-red-400" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
                    <AlertCircle size={14} className="text-red-500" />
                  </div>
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Problem Statement</span>
                </div>
                <p className="text-gray-600 text-xs mb-2">Pengguna ojek online dan ojek pangkalan menghadapi hambatan:</p>
                <ul className="space-y-1.5 mb-3">
                  {[
                    'Sulit mendapatkan driver, terutama di jam sibuk dan saat hujan',
                    'Estimasi waktu kedatangan tidak akurat, menyebabkan keterlambatan',
                    'Lonjakan tarif tiba-tiba yang merugikan pengguna',
                    'Pembatalan pesanan oleh driver tanpa notifikasi yang jelas',
                    'Tampilan aplikasi rumit bagi pengguna non-tech savvy'
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-xs text-gray-600">
                      <span className="text-red-400 font-bold">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 rounded-lg p-2 text-xs text-gray-500">
                  <span className="font-medium text-gray-700">Affected personas:</span> Mahasiswa, Pelajar SMP, Guru les (non-tech savvy)
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col">
              <div className="h-1.5 bg-gradient-to-r from-orange-400 to-yellow-400" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center">
                    <Target size={14} className="text-orange-500" />
                  </div>
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Prioritas Masalah</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3 text-[11px]">
                  <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span><span className="text-gray-500">HIGH Impact</span></div>
                  <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400"></span><span className="text-gray-500">MED Impact</span></div>
                  <div className="flex items-center gap-1 ml-1"><span className="text-gray-400">●</span><span className="text-gray-500"> LOW Effort</span></div>
                  <div className="flex items-center gap-1"><span className="text-gray-400">◔</span><span className="text-gray-500"> MED Effort</span></div>
                </div>

                <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1">
                  {[
                    { label: 'Driver Availability Indicator', impact: 'HIGH', effort: 'MED', color: '#ef4444', effortIcon: '◔' },
                    { label: 'Auto-assign saat driver batal', impact: 'HIGH', effort: 'LOW', color: '#ef4444', effortIcon: '●' },
                    { label: 'Estimasi waktu dinamis & akurat', impact: 'HIGH', effort: 'MED', color: '#ef4444', effortIcon: '◔' },
                    { label: 'Penyederhanaan UI & alur pesan', impact: 'HIGH', effort: 'LOW', color: '#00C853', effortIcon: '●' },
                    { label: 'Transparansi tarif sebelum pesan', impact: 'HIGH', effort: 'LOW', color: '#ef4444', effortIcon: '●' },
                    { label: 'Promo & voucher pengguna aktif', impact: 'MED', effort: 'LOW', color: '#f97316', effortIcon: '●' },
                    { label: 'Titik jemput alternatif otomatis', impact: 'MED', effort: 'MED', color: '#f97316', effortIcon: '◔' },
                    { label: 'Notifikasi kondisi lalu lintas', impact: 'MED', effort: 'MED', color: '#f97316', effortIcon: '◔' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 py-1.5 border-b border-gray-50 last:border-0">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white flex-shrink-0 w-12 text-center" style={{ background: item.color }}>
                        {item.impact}
                      </span>
                      <span className="text-[11px] text-gray-700 leading-tight flex-1">{item.label}</span>
                      <span className="text-[11px] text-gray-400 flex-shrink-0" title={`Effort: ${item.effort}`}>
                        {item.effortIcon} {item.effort}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-2 border-t border-gray-100 text-[11px] text-green-700 bg-green-50/30 p-2 rounded-lg">
                  <span className="font-medium">Rekomendasi prioritas:</span> Mulai dari fitur dengan <strong>Impact HIGH & Effort LOW</strong> (auto-assign, penyederhanaan UI, transparansi tarif)
                </div>
              </div>
            </div>
          </div>

          <div ref={registerRef}>
            <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <HelpCircle size={18} className="text-green-600" />
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">How Might We (HMW)</h3>
              </div>
              <span className="text-xs text-gray-400 bg-white px-3 py-1.5 rounded-full shadow-sm">3 pertanyaan kunci → 12 ide solusi</span>
            </div>
            <div className="space-y-5">
              {howMightWe.map((hmw, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition">
                  <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                    <div className="flex gap-3 items-start">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700 text-sm font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      <p className="font-medium text-gray-800 text-base leading-relaxed">{hmw.question}</p>
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {hmw.solutions.map((sol, j) => (
                        <div key={j} className="flex gap-2 items-start group hover:bg-green-50/40 p-2 rounded-lg transition">
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 group-hover:scale-125 transition flex-shrink-0" />
                          <span className="text-sm text-gray-600 leading-relaxed">{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proses" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div ref={registerRef} className="text-center mb-16">
            <span className="section-badge mb-4 inline-flex">✦ Design Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Dari Ide ke{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00C853, #00e676)' }}>
                Prototype
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Setiap tahap dirancang secara iteratif untuk menghasilkan solusi yang benar-benar menjawab kebutuhan pengguna.
            </p>
          </div>

          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-1 bg-gray-100/80 rounded-full px-3 py-1.5 text-xs text-gray-600">
              <span className="font-medium text-green-600">6 Tahap</span>
              <span className="mx-1">→</span>
              <span>Dari Ide hingga Prototype Interaktif</span>
            </div>
          </div>

          <div className="space-y-6">
            {ideateSteps.map((step, i) => {
              const Icon = step.icon;
              const isPrototype = step.isPrototype;
              const isLast = i === ideateSteps.length - 1;
              return (
                <div
                  key={step.id}
                  id={isPrototype ? 'prototype' : step.id}
                  ref={registerRef}
                  className="flex gap-5 md:gap-6"
                >
                  <div className="flex flex-col items-center flex-shrink-0" style={{ width: 48 }}>
                    <div className="timeline-dot" style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}aa)` }}>
                      <Icon size={20} />
                    </div>
                    {!isLast && <div className="flex-1 w-px mt-2" style={{ minHeight: '2rem', background: `linear-gradient(to bottom, ${step.color}55, transparent)` }} />}
                  </div>
                  <div className="flex-1 min-w-0 pb-2">
                    <span className="text-xs font-bold tracking-widest uppercase mb-2 block" style={{ color: step.color }}>
                      Step {step.label}
                    </span>
                    <div className="bg-white rounded-2xl p-5 md:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{step.description}</p>
                      {step.hasEmbed && step.figmaUrl ? (
                        <FigmaEmbed url={step.figmaUrl} title={`Figma – ${step.title}`} isPrototype={isPrototype} />
                      ) : !step.hasEmbed ? (
                        <div className="mt-5 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center py-12 gap-3 text-gray-400">
                          <FlaskConical size={36} className="opacity-40" />
                          <span className="text-sm font-medium">Laporan Usability Testing — Coming Soon</span>
                          <span className="text-xs text-center max-w-xs">Hasil pengujian dengan pengguna akan ditampilkan di sini setelah sesi testing selesai.</span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="test" className="py-24 relative overflow-hidden" style={{ background: '#f9fafb' }}>
        <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-30 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6">
          <div ref={registerRef}>
            <StepHeading
              badge="✦ Step 04"
              stepNum="Testing"
              highlight=""
              subtitle="Melakukan usability testing dengan 1 pengguna representatif (mahasiswa) untuk mengidentifikasi pain points, mengumpulkan feedback, dan melakukan iterasi desain."
            />
          </div>

          <div ref={registerRef} className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-gray-500 text-sm">
              Pengujian dilakukan secara <span className="font-medium text-gray-700">tatap muka langsung</span> dengan menggunakan prototype interaktif. 
              Pengguna diminta menyelesaikan 3 skenario utama: pemesanan ojek, melihat estimasi, dan pembatalan otomatis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div ref={registerRef} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 p-5 pb-0">
                <div className="w-1 h-5 rounded-full bg-indigo-400" />
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Penguji & Dokumentasi</h3>
              </div>
              <div className="p-5 pt-3">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-40 h-48 bg-gray-100 rounded-xl flex flex-col items-center justify-center gap-1 border border-gray-200 overflow-hidden">
                    <img 
                      src="/FotoPenguji.jpeg" 
                      alt="Foto Penguji" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/400x500/e2e8f0/64748b?text=Foto+Penguji';
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-800 text-base">Nadin</div>
                    <div className="text-xs text-gray-500 mb-2">Mahasiswa PNM</div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Pengguna aktif ojek online (Grab). Sering mengalami kesulitan dapat driver dan estimasi waktu tidak akurat. 
                      Menggunakan aplikasi 5x kali setiap minggu.
                    </p>
                    <p className="text-[11px] text-gray-400 mt-3 italic">Dokumentasi saat pengujian prototype</p>
                  </div>
                </div>
              </div>
            </div>

            <div ref={registerRef} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-5 rounded-full bg-indigo-400" />
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Metode Testing</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Task-based Testing', desc: 'Pengguna menyelesaikan 3 skenario: order ojek, cek estimasi, simulasi pembatalan.' },
                  { label: 'Wawancara Singkat', desc: 'Diskusi pasca-testing untuk menggali kesulitan dan saran perbaikan.' },
                  { label: 'Rekaman Layar & Catatan', desc: 'Merekam interaksi dan mencatat waktu penyelesaian tiap tugas.' },
                ].map((m) => (
                  <div key={m.label} className="flex gap-3">
                    <span className="text-xs font-bold text-indigo-500 flex-shrink-0">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">{m.label}</div>
                      <div className="text-xs text-gray-500">{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={registerRef} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 rounded-full bg-indigo-400" />
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Hasil Pengujian</h3>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                <div className="p-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-green-600 mb-3">✓ Berhasil</div>
                  <ul className="space-y-2">
                    {[
                      'Navigasi beranda mudah dipahami',
                      'Alur pemesanan terasa cepat dan ringkas',
                      'Estimasi tarif tampil jelas sebelum konfirmasi',
                      'Status driver mudah dipantau selama menunggu'
                    ].map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">⚠ Perlu Perbaikan</div>
                  <ul className="space-y-2">
                    {[
                      'Tombol konfirmasi kurang menonjol',
                      'Estimasi waktu masih terlalu umum (perlu rentang)',
                      'Informasi tarif sebaiknya muncul lebih awal',
                      'Notifikasi pembatalan kurang informatif'
                    ].map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div ref={registerRef} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 rounded-full bg-indigo-400" />
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Iterasi Perbaikan</h3>
            </div>
            <div className="space-y-3">
              {[
                { before: 'Tombol konfirmasi kecil & tidak kontras', after: 'Tombol diperbesar + warna hijau gelap yang kontras' },
                { before: 'Estimasi waktu angka tunggal (misal "7 menit")', after: 'Estimasi rentang (5-8 menit) untuk akurasi lebih baik' },
                { before: 'Tarif hanya tampil di halaman akhir', after: 'Estimasi tarif muncul sejak halaman pemilihan layanan' },
                { before: 'Notifikasi pembatalan hanya teks "Driver membatalkan"', after: 'Notifikasi + alasan & opsi cari driver alternatif' }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex gap-2 items-start">
                    <span className="text-xs font-bold text-red-400 flex-shrink-0 mt-0.5">Before</span>
                    <span className="text-xs text-gray-500">{item.before}</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-xs font-bold text-green-500 flex-shrink-0 mt-0.5">After</span>
                    <span className="text-xs text-gray-700 font-medium">{item.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={registerRef}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 rounded-full bg-green-500" />
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Kesimpulan</h3>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-green-600 to-indigo-500" />
              <div className="p-6 md:p-7">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prototype <strong>Teman Jalan</strong> berhasil memenuhi kebutuhan dasar pengguna dalam hal kecepatan pemesanan dan kemudahan navigasi. 
                  Seluruh skenario terselesaikan tanpa bantuan, dengan waktu rata-rata 2 menit per tugas.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Berdasarkan feedback penguji, dilakukan 4 iterasi perbaikan yang berfokus pada <strong>visibilitas tombol, akurasi estimasi waktu, 
                  transparansi tarif, dan kejelasan notifikasi</strong>. Hasilnya, prototype layak untuk dilanjutkan ke tahap pengembangan lebih lanjut.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Alur Jelas', 'UI Intuitif', 'Tarif Transparan', 'Iterasi Cepat', 'Siap Uji Lanjut'].map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700">
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}