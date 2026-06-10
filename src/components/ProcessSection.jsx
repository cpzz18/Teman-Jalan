import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Heart, Target, Lightbulb, PenLine,
  GitBranch, LayoutGrid, Palette, Smartphone, FlaskConical,
  User, AlertCircle, TrendingUp, HelpCircle,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const BASE = 'https://www.figma.com/embed?embed_host=share&url='

const personas = [
  {
    name: 'Aulia Raya',
    age: '19 Tahun',
    status: 'Mahasiswa',
    color: '#00C853',
    attributes: [
      'Mahasiswa dengan mobilitas tinggi',
      'Sering berpindah tempat',
      'Bergantung pada ojek online',
      'Mengutamakan efisiensi waktu',
      'Terbiasa dengan teknologi digital',
    ],
    needs: [
      'Transportasi cepat dan mudah diakses',
      'Ketersediaan driver setiap saat',
      'Ketepatan waktu perjalanan',
      'Harga yang terjangkau',
      'Keamanan perjalanan',
    ],
    challenges: [
      'Sulit mendapatkan driver saat jam sibuk',
      'Pembatalan pesanan oleh driver',
      'Waktu tunggu lama',
      'GPS kurang akurat',
      'Estimasi waktu tidak sesuai',
    ],
    bio: 'Aulia adalah mahasiswa aktif yang memiliki banyak aktivitas harian sehingga membutuhkan transportasi yang cepat dan praktis. Ia sering menggunakan ojek online saat tidak membawa kendaraan pribadi dan mengandalkan layanan tersebut untuk mendukung mobilitasnya.',
  },
  {
    name: 'Chinta Az-Zahra Saleha',
    age: '15 Tahun',
    status: 'Pelajar SMP',
    color: '#7c3aed',
    attributes: [
      'Pelajar dengan mobilitas rutin (sekolah dan les)',
      'Mengutamakan kepraktisan dan kecepatan waktu',
      'Bergantung pada layanan ojek online',
      'Terbiasa menggunakan aplikasi digital',
    ],
    needs: [
      'Ketersediaan driver setiap saat, terutama di jam sibuk',
      'Harga ongkos yang terjangkau',
      'Keamanan dan kenyamanan perjalanan',
      'Pelayanan driver yang profesional dan sopan',
      'Transportasi yang bisa diandalkan untuk datang tepat waktu',
    ],
    challenges: [
      'Sulit mendapatkan driver saat jam sibuk',
      'Waktu tunggu lebih lama saat hujan',
      'Harga ongkos tiba-tiba melonjak saat jam sibuk',
      'Pesanan sering dibatalkan sepihak oleh driver',
    ],
    bio: 'Chinta adalah siswi SMP yang aktif dengan rutinitas sekolah dan tempat les. Ia sangat membutuhkan transportasi yang cepat dan praktis untuk menembus kemacetan. Ia rutin menggunakan Gojek dan menjadikannya solusi andalan untuk mobilitas harian, terutama saat tidak ada jemputan.',
  },
  {
    name: 'Handoko Wahyu Riadi',
    age: '55 Tahun',
    status: 'Guru Les Mewarnai',
    color: '#f97316',
    attributes: [
      'Guru les mewarnai dengan mobilitas tinggi',
      'Sering berpindah tempat untuk mengajar',
      'Menggunakan ojek pangkalan',
      'Mengutamakan kemudahan penggunaan',
      'Mengutamakan tepat waktu',
    ],
    needs: [
      'Aplikasi yang mudah dipahami',
      'Kepastian tarif di awal',
      'Ketersediaan driver setiap saat',
      'Layanan cepat tanggap untuk kondisi darurat',
      'Transportasi yang andal dan tepat waktu',
    ],
    challenges: [
      'Kesulitan menggunakan aplikasi',
      'Jarang menggunakan layanan transportasi online',
      'Waktu tunggu lama',
      'Keterlambatan dalam mengajar',
    ],
    bio: 'Bapak Handoko adalah seorang guru les mewarnai yang mempunyai mobilitas tinggi karena harus mengajar dari satu tempat ke tempat lain. Beliau tidak familiar dengan layanan transportasi online sehingga hanya menggunakan ojek pangkalan.',
  },
]

const observations = [
  {
    persona: 'Aulia Raya',
    color: '#00C853',
    items: [
      'User menggunakan ojek online untuk pergi ke kampus/sekolah',
      'User mengalami pembatalan pesanan tanpa alasan yang jelas',
      'User merasa GPS kurang akurat',
      'User mengalami kendala harga ongkos yang tiba-tiba menjadi mahal',
      'User menyukai layanan yang tepat waktu',
      'User mempertimbangkan efisiensi biaya dalam memilih transportasi',
    ],
    opportunities: [
      'Fitur mudah dijangkau dan dimengerti',
      'Shortcut untuk mempercepat proses',
      'Tampilan yang sederhana',
      'Pemberian promo khusus pengguna aktif',
    ],
  },
  {
    persona: 'Chinta Az-Zahra Saleha',
    color: '#7c3aed',
    items: [
      'User menggunakan Gojek karena praktis',
      'User menggunakan saat tidak membawa kendaraan pribadi',
      'User harus menunggu driver lebih lama saat turun hujan atau jam pulang sekolah',
      'User berharap Gojek tidak menaikkan harga terlalu mahal saat jam sibuk',
      'User membutuhkan keamanan selama perjalanan',
    ],
    opportunities: [
      'Memperbanyak driver di area sekitar sekolah',
      'Penyesuaian sistem tarif agar tidak lonjak saat jam sibuk',
      'Penyederhanaan tampilan aplikasi',
      'Meningkatkan standar pelayanan driver',
    ],
  },
  {
    persona: 'Handoko Wahyu Riadi',
    color: '#f97316',
    items: [
      'User menggunakan ojek online saat ada kegiatan mendesak',
      'User cenderung menghindari sistem yang rumit',
      'User menginginkan voucher untuk pelanggan',
      'User merasa aman menggunakan Gojek karena ada fitur pelacakan perjalanan',
      'User mengutamakan kecepatan dalam berpindah tempat',
    ],
    opportunities: [
      'Fitur aplikasi yang mudah digunakan',
      'Perbaikan sistem GPS dan estimasi waktu',
      'Sistem untuk meminimalisir pembatalan pesanan',
      'Pemberian promo khusus pengguna aktif',
    ],
  },
]

const insights = [
  {
    category: 'HIGH Impact',
    color: '#ef4444',
    items: [
      'User kesulitan mendapatkan driver pada jam sibuk',
      'User menginginkan peningkatan akurasi waktu',
      'User menyukai tarif harga yang sesuai',
      'User mementingkan keamanan perjalanan',
    ],
  },
  {
    category: 'MED Impact',
    color: '#f97316',
    items: [
      'User menggunakan ojek online untuk pergi ke kampus/sekolah',
      'User menginginkan tampilan aplikasi yang sederhana',
      'User menginginkan adanya promo khusus bagi pengguna aktif',
    ],
  },
]

const howMightWe = [
  {
    question: 'Bagaimana kita memberikan kepastian waktu perjalanan yang akurat agar pengguna dapat merencanakan aktivitasnya tanpa risiko keterlambatan?',
    solutions: [
      'Menambahkan fitur "Driver Availability Indicator" yang menampilkan jumlah driver aktif di sekitar lokasi user',
      'Tampilkan estimasi waktu dalam bentuk rentang untuk meningkatkan akurasi persepsi pengguna',
      'Prioritaskan driver dengan riwayat performa tinggi pada area dan waktu dengan permintaan tinggi',
      'Menerapkan "Auto Suggestion Berdasarkan Kebiasaan" berdasarkan waktu dan pola aktivitas user',
    ],
  },
  {
    question: 'Bagaimana kita mengurangi pembatalan pesanan yang merugikan pengguna?',
    solutions: [
      'Alihkan pesanan secara otomatis ke driver terdekat jika terjadi pembatalan tanpa mengganggu alur penggunaan',
      'Sistem distribusi driver di area rawan macet dengan potensi permintaan tinggi',
      'Sarankan titik penjemputan alternatif yang lebih cepat dijangkau driver',
      'Perbarui estimasi waktu secara dinamis selama perjalanan berlangsung',
    ],
  },
  {
    question: 'Bagaimana kita membuat tampilan aplikasi lebih mudah dipahami untuk semua kalangan?',
    solutions: [
      'Gunakan alur pemesanan yang lebih ringkas',
      'Berikan informasi kondisi lalu lintas dan potensi keterlambatan sebelum pemesanan',
      'Tampilan sederhana dengan shortcut untuk mempercepat proses',
      'Label dan ikon yang mudah dipahami oleh semua segmen pengguna',
    ],
  },
]

const mainProblem = 'User bergantung pada ojek online sebagai solusi mobilitas cepat, namun menghadapi hambatan serius berupa sulitnya mendapatkan driver saat jam sibuk, pembatalan mendadak, akurasi GPS yang rendah, dan lonjakan tarif yang tidak terduga — sehingga kepercayaan dan kenyamanan pengguna terhadap layanan menurun.'

const priorityMatrix = [
  { label: 'Driver Availability Indicator', impact: 'HIGH', effort: 'MED', color: '#ef4444' },
  { label: 'Auto-assign saat pembatalan', impact: 'HIGH', effort: 'LOW', color: '#ef4444' },
  { label: 'Estimasi waktu dinamis', impact: 'HIGH', effort: 'MED', color: '#ef4444' },
  { label: 'Penyederhanaan UI/alur pesan', impact: 'HIGH', effort: 'LOW', color: '#00C853' },
  { label: 'Promo & voucher pengguna aktif', impact: 'MED', effort: 'LOW', color: '#f97316' },
  { label: 'Titik jemput alternatif', impact: 'MED', effort: 'MED', color: '#f97316' },
]

const ideateSteps = [
  {
    id: 'ideate',
    icon: Lightbulb,
    color: '#eab308',
    label: '03',
    title: "Ideate: Crazy 8's & Brainstorming",
    description: "Menghasilkan berbagai solusi kreatif melalui metode Crazy 8's dan sesi brainstorming tim. Dipilih solusi terbaik yang paling feasible dan impactful.",
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/file/YOUR_FILE_ID/page=Ideate'),
    hasEmbed: true,
  },
  {
    id: 'lofi',
    icon: PenLine,
    color: '#8b5cf6',
    label: '04',
    title: 'Low-Fidelity Sketches',
    description: 'Menuangkan ide ke dalam sketsa kasar (lo-fi) untuk memvisualisasikan layout dan alur navigasi sebelum masuk ke tahap desain digital.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/file/YOUR_FILE_ID/page=LoFi'),
    hasEmbed: true,
  },
  {
    id: 'userflow',
    icon: GitBranch,
    color: '#06b6d4',
    label: '05',
    title: 'User Flow',
    description: 'Memetakan alur lengkap perjalanan pengguna dari onboarding hingga menemukan teman perjalanan, memastikan pengalaman yang intuitif dan efisien.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/file/YOUR_FILE_ID/page=UserFlow'),
    hasEmbed: true,
  },
  {
    id: 'ia',
    icon: LayoutGrid,
    color: '#10b981',
    label: '06',
    title: 'Information Architecture',
    description: 'Menyusun struktur informasi dan navigasi aplikasi menggunakan sitemap dan card sorting untuk memastikan konten mudah ditemukan oleh pengguna.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/file/YOUR_FILE_ID/page=IA'),
    hasEmbed: true,
  },
  {
    id: 'uikit',
    icon: Palette,
    color: '#00C853',
    label: '07',
    title: 'UI Kit & Design System',
    description: 'Membangun design system lengkap: color palette, typography scale, component library, dan design tokens untuk konsistensi visual di seluruh aplikasi.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/file/YOUR_FILE_ID/page=UIKit'),
    hasEmbed: true,
  },
  {
    id: 'prototype',
    icon: Smartphone,
    color: '#00C853',
    label: '08',
    title: 'Prototype',
    description: 'High-fidelity interactive prototype yang menampilkan pengalaman pengguna secara nyata. Klik dan navigasikan langsung di bawah ini!',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/proto/YOUR_FILE_ID'),
    hasEmbed: true,
    isPrototype: true,
  },
  {
    id: 'test',
    icon: FlaskConical,
    color: '#6366f1',
    label: '09',
    title: 'Test & Iteration',
    description: 'Melakukan usability testing dengan 5 pengguna representatif. Mengidentifikasi pain points, mengumpulkan feedback, dan melakukan iterasi desain berdasarkan temuan.',
    figmaUrl: null,
    hasEmbed: false,
  },
]

function FigmaEmbed({ url, title, isPrototype }) {
  const isPlaceholder = !url || url.includes('YOUR_FILE_ID')
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
        <span className="text-sm font-medium">Figma Embed — Belum Diset</span>
        <span className="text-xs text-center max-w-xs px-4">
          Ganti URL di <code className="bg-gray-100 px-1 rounded">ProcessSection.jsx</code>
        </span>
      </div>
    )
  }
  return isPrototype ? (
    <div className="figma-embed-prototype">
      <iframe src={url} title={title} allowFullScreen loading="lazy" />
    </div>
  ) : (
    <div className="figma-embed-wrapper">
      <iframe src={url} title={title} allowFullScreen loading="lazy" />
    </div>
  )
}

function SectionHeading({ badge, title, highlight, subtitle }) {
  return (
    <div className="text-center mb-12">
      <span className="section-badge mb-4 inline-flex">{badge}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
        {title}{' '}
        <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00C853, #00e676)' }}>
          {highlight}
        </span>
      </h2>
      {subtitle && <p className="text-gray-500 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

export default function ProcessSection() {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useGSAP(() => {
    itemsRef.current.forEach((item) => {
      if (!item) return
      gsap.set(item, { opacity: 0, y: 40 })
      gsap.to(item, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
      })
    })
  }, { scope: sectionRef })

  let refIdx = 0
  const getRef = (el) => { itemsRef.current[refIdx++] = el }

  return (
    <div ref={sectionRef}>

      {/* ===================== EMPATHIZE ===================== */}
      <section id="empathize" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-green-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <div ref={getRef}>
            <SectionHeading
              badge="✦ Step 01"
              title="1."
              highlight="Empathize"
              subtitle="Memahami kebutuhan, frustrasi, dan perilaku pengguna ojek online melalui user persona, observasi, dan insight mendalam."
            />
          </div>

          <div ref={getRef} className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Metodologi Riset</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: '🎤', label: 'Wawancara', desc: 'Wawancara kualitatif terhadap 3 pengguna aktif transportasi online' },
                { icon: '👁️', label: 'Observasi', desc: 'Mengamati langsung penggunaan aplikasi ojek online di lapangan' },
                { icon: '📋', label: 'Kuesioner', desc: 'Validasi masalah secara kuantitatif untuk konfirmasi temuan' },
              ].map((m) => (
                <div key={m.label} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex gap-4 items-start">
                  <span className="text-2xl">{m.icon}</span>
                  <div>
                    <div className="font-bold text-gray-800 mb-1">{m.label}</div>
                    <div className="text-sm text-gray-500">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={getRef} className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-6">User Persona</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {personas.map((p) => (
                <div key={p.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="h-2" style={{ background: p.color }} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ background: p.color }}>
                        <User size={22} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{p.name}</div>
                        <div className="text-sm text-gray-500">{p.age} · {p.status}</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.bio}</p>
                    <div className="mb-3">
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Key Attributes</div>
                      <ul className="space-y-1">
                        {p.attributes.map((a) => (
                          <li key={a} className="text-sm text-gray-600 flex gap-2 items-start">
                            <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="bg-green-50 rounded-xl p-3">
                        <div className="text-xs font-bold text-green-700 mb-2 flex items-center gap-1">
                          <TrendingUp size={12} /> Needs
                        </div>
                        <ul className="space-y-1">
                          {p.needs.map((n) => (
                            <li key={n} className="text-xs text-gray-600">• {n}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-xl p-3">
                        <div className="text-xs font-bold text-red-600 mb-2 flex items-center gap-1">
                          <AlertCircle size={12} /> Challenges
                        </div>
                        <ul className="space-y-1">
                          {p.challenges.map((c) => (
                            <li key={c} className="text-xs text-gray-600">• {c}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={getRef} className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Observation & Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {observations.map((obs) => (
                <div key={obs.persona} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="px-5 pt-5 pb-3 border-b border-gray-50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: obs.color }} />
                      <span className="font-bold text-gray-800 text-sm">{obs.persona}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-4">
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Observations</div>
                      <ul className="space-y-1.5">
                        {obs.items.map((item) => (
                          <li key={item} className="text-sm text-gray-600 flex gap-2 items-start">
                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: obs.color }}>Opportunities</div>
                      <ul className="space-y-1.5">
                        {obs.opportunities.map((opp) => (
                          <li key={opp} className="text-sm text-gray-600 flex gap-2 items-start">
                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: obs.color }} />
                            {opp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={getRef} className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Key Insights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {insights.map((ins) => (
                <div key={ins.category} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-xs font-bold mb-4" style={{ background: ins.color }}>
                    {ins.category}
                  </div>
                  <ul className="space-y-2">
                    {ins.items.map((item) => (
                      <li key={item} className="text-sm text-gray-700 flex gap-2 items-start">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: ins.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DEFINE ===================== */}
      <section id="define" className="py-24 relative overflow-hidden" style={{ background: '#f9fafb' }}>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <div ref={getRef}>
            <SectionHeading
              badge="✦ Step 02"
              title="2."
              highlight="Define"
              subtitle="Mendefinisikan problem statement berdasarkan temuan riset menggunakan Point of View (POV) dan How Might We (HMW)."
            />
          </div>

          <div ref={getRef} className="mb-10">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <AlertCircle size={20} className="text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Main Problem Statement</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg border-l-4 border-red-400 pl-5">
                {mainProblem}
              </p>
            </div>
          </div>

          <div ref={getRef} className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Priority Matrix</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {priorityMatrix.map((item) => (
                <div key={item.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
                  <div className="flex flex-col gap-1 flex-shrink-0">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: item.color }}>
                      {item.impact}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-center">
                      {item.effort} effort
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={getRef}>
            <h3 className="text-xl font-bold text-gray-800 mb-6">How Might We (HMW)</h3>
            <div className="space-y-6">
              {howMightWe.map((hmw, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-50 flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <HelpCircle size={16} className="text-green-600" />
                    </div>
                    <p className="font-semibold text-gray-800">{hmw.question}</p>
                  </div>
                  <div className="px-6 py-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {hmw.solutions.map((sol, j) => (
                        <div key={j} className="flex gap-2 items-start">
                          <span className="mt-1 text-green-500 font-bold flex-shrink-0">→</span>
                          <span className="text-sm text-gray-600">{sol}</span>
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

      {/* ===================== IDEATE — UI KIT ===================== */}
      <section id="proses" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div ref={getRef} className="text-center mb-16">
            <span className="section-badge mb-4 inline-flex">✦ Design Thinking</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Proses{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00C853, #00e676)' }}>
                Desain
              </span>{' '}
              Kami
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Dari ideasi hingga prototype, setiap tahap dirancang untuk menghasilkan solusi yang berpusat pada pengguna.
            </p>
          </div>

          <div className="space-y-8">
            {ideateSteps.map((step, i) => {
              const Icon = step.icon
              const isPrototype = step.isPrototype
              const isLast = i === ideateSteps.length - 1
              return (
                <div
                  key={step.id}
                  id={isPrototype ? 'prototype' : step.id === 'test' ? 'test' : step.id}
                  ref={getRef}
                  className="flex gap-5 md:gap-6"
                >
                  <div className="flex flex-col items-center flex-shrink-0" style={{ width: 48 }}>
                    <div className="timeline-dot" style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}aa)` }}>
                      <Icon size={20} />
                    </div>
                    {!isLast && (
                      <div className="flex-1 w-px mt-2" style={{ minHeight: '2rem', background: `linear-gradient(to bottom, ${step.color}55, transparent)` }} />
                    )}
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
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
