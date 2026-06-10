import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Lightbulb, PenLine, GitBranch, LayoutGrid,
  Palette, Smartphone, FlaskConical,
  User, AlertCircle, TrendingUp, HelpCircle, CheckCircle, Target,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const BASE = 'https://www.figma.com/embed?embed_host=share&url='

const EMPATHIZE_FIGMA_URL = BASE + encodeURIComponent('https://www.figma.com/file/YOUR_FILE_ID/page=Empathize')

const personas = [
  {
    name: 'Aulia Raya',
    age: '19 Tahun',
    status: 'Mahasiswa',
    color: '#00C853',
    attributes: ['Mahasiswa dengan mobilitas tinggi', 'Sering berpindah tempat', 'Bergantung pada ojek online', 'Mengutamakan efisiensi waktu', 'Terbiasa dengan teknologi digital'],
    needs: ['Transportasi cepat dan mudah diakses', 'Ketersediaan driver setiap saat', 'Ketepatan waktu perjalanan', 'Harga yang terjangkau', 'Keamanan perjalanan', 'Aplikasi yang sederhana'],
    challenges: ['Sulit mendapatkan driver saat jam sibuk', 'Pembatalan pesanan oleh driver', 'Waktu tunggu lama', 'GPS kurang akurat', 'Estimasi waktu tidak sesuai', 'Harga naik tiba-tiba'],
    bio: 'Aulia adalah mahasiswa aktif yang memiliki banyak aktivitas harian sehingga membutuhkan transportasi yang cepat dan praktis. Ia sering menggunakan ojek online saat tidak membawa kendaraan pribadi dan mengandalkan layanan tersebut untuk mendukung mobilitasnya.',
  },
  {
    name: 'Chinta Az-Zahra Saleha',
    age: '15 Tahun',
    status: 'Pelajar SMP',
    color: '#7c3aed',
    attributes: ['Pelajar dengan mobilitas rutin (sekolah dan les)', 'Mengutamakan kepraktisan dan kecepatan waktu', 'Bergantung pada layanan ojek online', 'Terbiasa menggunakan aplikasi digital'],
    needs: ['Ketersediaan driver setiap saat, terutama jam sibuk', 'Harga ongkos yang terjangkau', 'Keamanan dan kenyamanan perjalanan', 'Pelayanan driver yang profesional dan sopan', 'Transportasi andal untuk datang tepat waktu'],
    challenges: ['Sulit mendapatkan driver saat jam sibuk', 'Waktu tunggu lebih lama saat hujan', 'Harga ongkos melonjak saat jam sibuk', 'Pesanan sering dibatalkan sepihak oleh driver'],
    bio: 'Chinta adalah siswi SMP yang aktif dengan rutinitas sekolah dan tempat les. Ia sangat membutuhkan transportasi cepat dan praktis untuk menembus kemacetan. Ia rutin menggunakan Gojek dan menjadikannya solusi andalan untuk mobilitas harian, terutama saat tidak ada jemputan.',
  },
  {
    name: 'Handoko Wahyu Riadi',
    age: '55 Tahun',
    status: 'Guru Les Mewarnai',
    color: '#f97316',
    attributes: ['Guru les mewarnai dengan mobilitas tinggi', 'Sering berpindah tempat untuk mengajar', 'Biasa menggunakan ojek pangkalan', 'Mengutamakan kemudahan penggunaan', 'Mengutamakan tepat waktu'],
    needs: ['Aplikasi yang mudah dipahami', 'Kepastian tarif di awal', 'Ketersediaan driver setiap saat', 'Layanan cepat tanggap untuk kondisi darurat', 'Transportasi yang andal dan tepat waktu'],
    challenges: ['Kesulitan menggunakan aplikasi', 'Jarang menggunakan transportasi online', 'Waktu tunggu lama', 'Keterlambatan dalam mengajar'],
    bio: 'Bapak Handoko adalah seorang guru les mewarnai yang mempunyai mobilitas tinggi karena harus mengajar dari satu tempat ke tempat lain. Beliau tidak familiar dengan layanan transportasi online sehingga hanya menggunakan ojek pangkalan.',
  },
]

const observations = [
  {
    persona: 'Aulia Raya',
    color: '#00C853',
    items: ['User menggunakan ojek online untuk pergi ke kampus', 'User mengalami pembatalan pesanan tanpa alasan yang jelas', 'User merasa GPS kurang akurat', 'User mengalami lonjakan harga yang tiba-tiba', 'User menyukai layanan yang tepat waktu', 'User mempertimbangkan efisiensi biaya dalam memilih transportasi', 'User menggunakan Gojek karena praktis'],
    opportunities: ['Fitur mudah dijangkau dan dimengerti', 'Shortcut untuk mempercepat proses pemesanan', 'Tampilan yang sederhana dan intuitif', 'Pemberian promo khusus pengguna aktif'],
  },
  {
    persona: 'Chinta Az-Zahra Saleha',
    color: '#7c3aed',
    items: ['User menggunakan saat tidak membawa kendaraan pribadi', 'User harus menunggu lebih lama saat hujan atau jam pulang sekolah', 'User berharap harga tidak naik terlalu mahal saat jam sibuk', 'User membutuhkan keamanan selama perjalanan', 'User menggunakan fitur share ride untuk keamanan'],
    opportunities: ['Memperbanyak driver di area sekitar sekolah', 'Penyesuaian tarif agar tidak lonjak di jam sibuk', 'Penyederhanaan tampilan aplikasi', 'Meningkatkan standar pelayanan driver'],
  },
  {
    persona: 'Handoko Wahyu Riadi',
    color: '#f97316',
    items: ['User menggunakan ojek online saat ada kegiatan mendesak', 'User cenderung menghindari sistem yang rumit', 'User menginginkan voucher untuk pelanggan', 'User merasa aman dengan fitur pelacakan perjalanan', 'User mengutamakan kecepatan dalam berpindah tempat'],
    opportunities: ['Fitur aplikasi yang mudah digunakan semua kalangan', 'Perbaikan sistem GPS dan estimasi waktu', 'Sistem meminimalisir pembatalan pesanan', 'Distribusi driver otomatis ke area dengan permintaan tinggi'],
  },
]

const insightHighItems = [
  'User kesulitan mendapatkan driver pada jam sibuk',
  'User menginginkan peningkatan akurasi estimasi waktu',
  'User sangat sensitif terhadap lonjakan tarif di jam sibuk',
  'User mementingkan keamanan dan kenyamanan perjalanan',
]

const povStatements = [
  {
    persona: 'Aulia Raya',
    color: '#00C853',
    pov: 'Aulia, seorang mahasiswa aktif yang bergantung pada ojek online, membutuhkan layanan transportasi yang dapat diandalkan kapan saja, karena ia sering mengalami pembatalan mendadak dan keterlambatan yang mengganggu aktivitasnya.',
  },
  {
    persona: 'Chinta Az-Zahra Saleha',
    color: '#7c3aed',
    pov: 'Chinta, pelajar SMP yang rutin menggunakan ojek online untuk sekolah dan les, membutuhkan tarif yang stabil dan ketersediaan driver yang konsisten, karena lonjakan harga dan sulitnya mendapat driver membuatnya sering terlambat.',
  },
  {
    persona: 'Handoko Wahyu Riadi',
    color: '#f97316',
    pov: 'Pak Handoko, guru les dengan mobilitas tinggi yang tidak familiar dengan teknologi, membutuhkan aplikasi yang sangat sederhana dan intuitif, karena tampilan yang rumit membuatnya lebih memilih ojek pangkalan meski kurang praktis.',
  },
]

const howMightWe = [
  {
    question: 'Bagaimana kita memberikan kepastian waktu perjalanan yang akurat agar pengguna dapat merencanakan aktivitasnya tanpa risiko keterlambatan?',
    solutions: [
      '"Driver Availability Indicator" — tampilkan jumlah driver aktif di sekitar lokasi user secara real-time',
      'Estimasi waktu dalam bentuk rentang (mis. 5–8 menit) untuk meningkatkan akurasi persepsi pengguna',
      'Prioritaskan driver dengan riwayat performa tinggi pada area dan waktu permintaan tinggi',
      '"Auto Suggestion Berdasarkan Kebiasaan" — saran otomatis berdasarkan waktu dan pola aktivitas user',
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
]

const priorityMatrix = [
  { label: 'Driver Availability Indicator', impact: 'HIGH', effort: 'MED', color: '#ef4444' },
  { label: 'Auto-assign saat driver batal', impact: 'HIGH', effort: 'LOW', color: '#ef4444' },
  { label: 'Estimasi waktu dinamis & akurat', impact: 'HIGH', effort: 'MED', color: '#ef4444' },
  { label: 'Penyederhanaan UI & alur pesan', impact: 'HIGH', effort: 'LOW', color: '#00C853' },
  { label: 'Promo & voucher pengguna aktif', impact: 'MED', effort: 'LOW', color: '#f97316' },
  { label: 'Titik jemput alternatif otomatis', impact: 'MED', effort: 'MED', color: '#f97316' },
  { label: 'Transparansi tarif sebelum pesan', impact: 'HIGH', effort: 'LOW', color: '#ef4444' },
  { label: 'Notifikasi kondisi lalu lintas', impact: 'MED', effort: 'MED', color: '#f97316' },
]

const ideateSteps = [
  {
    id: 'ideate', icon: Lightbulb, color: '#eab308', label: '3.1',
    title: "Crazy 8's & Brainstorming",
    description: "Menghasilkan berbagai solusi kreatif melalui metode Crazy 8's dan sesi brainstorming tim. Dipilih solusi terbaik yang paling feasible dan impactful.",
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/file/YOUR_FILE_ID/page=Ideate'),
    hasEmbed: true,
  },
  {
    id: 'lofi', icon: PenLine, color: '#8b5cf6', label: '3.2',
    title: 'Low-Fidelity Sketches',
    description: 'Menuangkan ide ke dalam sketsa kasar (lo-fi) untuk memvisualisasikan layout dan alur navigasi sebelum masuk ke tahap desain digital.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/file/YOUR_FILE_ID/page=LoFi'),
    hasEmbed: true,
  },
  {
    id: 'userflow', icon: GitBranch, color: '#06b6d4', label: '3.3',
    title: 'User Flow',
    description: 'Memetakan alur lengkap perjalanan pengguna dari onboarding hingga pemesanan, memastikan pengalaman yang intuitif dan efisien.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/file/YOUR_FILE_ID/page=UserFlow'),
    hasEmbed: true,
  },
  {
    id: 'ia', icon: LayoutGrid, color: '#10b981', label: '3.4',
    title: 'Information Architecture',
    description: 'Menyusun struktur informasi dan navigasi aplikasi menggunakan sitemap dan card sorting untuk memastikan konten mudah ditemukan pengguna.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/file/YOUR_FILE_ID/page=IA'),
    hasEmbed: true,
  },
  {
    id: 'uikit', icon: Palette, color: '#00C853', label: '3.5',
    title: 'UI Kit & Design System',
    description: 'Membangun design system lengkap: color palette, typography scale, component library, dan design tokens untuk konsistensi visual di seluruh aplikasi.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/file/YOUR_FILE_ID/page=UIKit'),
    hasEmbed: true,
  },
  {
    id: 'prototype', icon: Smartphone, color: '#00C853', label: '3.6',
    title: 'Prototype',
    description: 'High-fidelity interactive prototype yang menampilkan pengalaman pengguna secara nyata. Klik dan navigasikan langsung di bawah ini!',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/proto/Gnz6Qf3CSmbYVizRJR2cCC/Desain-Prototype?node-id=13-6&p=f&t=7aiHxYyyYotV711o-1&scaling=scale-down&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=13%3A6'),
    hasEmbed: true,
    isPrototype: true,
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

function StepHeading({ badge, stepNum, title, highlight, subtitle }) {
  return (
    <div className="text-center mb-14">
      <span className="section-badge mb-4 inline-flex">{badge}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
        {stepNum}{' '}
        <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00C853, #00e676)' }}>
          {highlight}
        </span>
        {title && <span className="block text-2xl md:text-3xl text-gray-600 font-semibold mt-1">{title}</span>}
      </h2>
      {subtitle && <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  )
}

export default function ProcessSection() {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])
  const insightCardsRef = useRef([])
  let refIdx = 0

  useGSAP(() => {
    itemsRef.current.forEach((item) => {
      if (!item) return
      gsap.set(item, { opacity: 0, y: 40 })
      gsap.to(item, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
      })
    })

    insightCardsRef.current.forEach((card, i) => {
      if (!card) return
      gsap.set(card, { opacity: 0, y: 30 })
      gsap.to(card, {
        opacity: 1, y: 0, duration: 0.5, delay: i * 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' },
      })
    })
  }, { scope: sectionRef })

  const r = (el) => { itemsRef.current[refIdx++] = el }

  return (
    <div ref={sectionRef}>

      {/* ===== EMPATHIZE ===== */}
      <section id="empathize" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-50 rounded-full opacity-60 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-50 rounded-full opacity-40 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6">

          <div ref={r}>
            <StepHeading
              badge="✦ Step 01"
              stepNum="Empathize"
              highlight=""
              subtitle="Kami melakukan riset mendalam untuk memahami kebutuhan nyata pengguna ojek online — dari mahasiswa aktif, pelajar, hingga pengguna non-tech savvy — guna menemukan pain points yang sesungguhnya."
            />
          </div>

          <div ref={r}>
            <FigmaEmbed url={EMPATHIZE_FIGMA_URL} title="Empathize — User Persona, Observation & Insight" />
          </div>

          {/* Metodologi Riset + Key Insights */}
          <div ref={r} className="mt-12">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">

              {/* Kiri: Metodologi Riset */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-white p-8 border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-1 h-5 rounded-full" style={{ background: '#00C853' }} />
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Metodologi Riset</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { num: '01', label: 'Wawancara Kualitatif', desc: 'Wawancara mendalam terhadap 3 pengguna aktif — mahasiswa, pelajar SMP, dan guru.' },
                      { num: '02', label: 'Observasi Langsung', desc: 'Mengamati langsung interaksi pengguna dengan aplikasi ojek online.' },
                      { num: '03', label: 'Kuesioner', desc: 'Validasi temuan secara kuantitatif untuk konfirmasi masalah yang ditemukan.' },
                    ].map((m) => (
                      <li key={m.label} className="flex gap-3 items-start group">
                        <span className="text-xs font-black flex-shrink-0 mt-0.5 w-5" style={{ color: '#00C85355' }}>{m.num}</span>
                        <div>
                          <div className="font-semibold text-gray-800 text-sm group-hover:text-green-600 transition-colors duration-200">{m.label}</div>
                          <div className="text-xs text-gray-400 leading-relaxed mt-0.5">{m.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-1 h-5 rounded-full bg-red-400" />
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Key Insights</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      { label: 'Sulit Mendapat Driver', desc: 'Kesulitan di jam sibuk, pagi hari, dan saat hujan.', tagColor: '#ef4444', tagBg: '#fef2f2', tag: 'HIGH' },
                      { label: 'Akurasi Waktu Rendah', desc: 'Estimasi waktu sering tidak sesuai kenyataan.', tagColor: '#ef4444', tagBg: '#fef2f2', tag: 'HIGH' },
                      { label: 'Lonjakan Tarif', desc: 'Harga naik tiba-tiba di jam sibuk membuat pengguna ragu.', tagColor: '#ef4444', tagBg: '#fef2f2', tag: 'HIGH' },
                      { label: 'Keamanan Prioritas', desc: 'Fitur share ride jadi alasan utama tetap pakai Gojek.', tagColor: '#ef4444', tagBg: '#fef2f2', tag: 'HIGH' },
                      { label: 'UI yang Sederhana', desc: 'Pengguna non-tech savvy butuh tampilan lebih intuitif.', tagColor: '#f97316', tagBg: '#fff7ed', tag: 'MED' },
                      { label: 'Promo & Voucher', desc: 'Pengguna aktif mengharapkan reward dan promo khusus.', tagColor: '#f97316', tagBg: '#fff7ed', tag: 'MED' },
                    ].map((ins, i) => (
                      <li
                        key={ins.label}
                        ref={(el) => (insightCardsRef.current[i] = el)}
                        className="flex gap-2.5 items-center bg-white rounded-xl px-3 py-2.5 border border-gray-100 hover:shadow-sm transition-shadow duration-200"
                      >
                        <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full" style={{ color: ins.tagColor, background: ins.tagBg }}>
                          {ins.tag}
                        </span>
                        <div className="min-w-0">
                          <span className="font-semibold text-xs" style={{ color: ins.tagColor }}>{ins.label}</span>
                          <span className="text-xs text-gray-400"> — {ins.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ===== DEFINE ===== */}
      <section id="define" className="py-20 relative overflow-hidden" style={{ background: '#f9fafb' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6">
          <div ref={r}>
            <StepHeading
              badge="✦ Step 02"
              stepNum="Define"
              highlight=""
              subtitle="Mendefinisikan inti masalah berdasarkan temuan riset dan merumuskan peluang solusi melalui How Might We."
            />
          </div>

          {/* Problem Statement + Prioritas side by side */}
          <div ref={r} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-red-500 to-red-400" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                  <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">Problem Statement</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-medium mb-2">
                  "User bergantung pada ojek online, namun menghadapi hambatan: sulit dapat driver, pembatalan mendadak, GPS kurang akurat, dan lonjakan tarif."
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Ketiga persona mengalami masalah serupa — kepercayaan terhadap layanan menurun akibat pengalaman yang tidak konsisten.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-orange-400 to-yellow-400" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target size={16} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">Prioritas Masalah</span>
                </div>
                <ul className="space-y-2">
                  {priorityMatrix.map((item) => (
                    <li key={item.label} className="flex items-center gap-2.5">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white flex-shrink-0 w-12 text-center" style={{ background: item.color }}>
                        {item.impact}
                      </span>
                      <span className="text-xs text-gray-600">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* HMW */}
          <div ref={r}>
            <div className="flex items-center gap-2 mb-5">
              <HelpCircle size={16} className="text-green-600 flex-shrink-0" />
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">How Might We (HMW)</h3>
            </div>
            <div className="space-y-3">
              {howMightWe.map((hmw, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="px-5 py-4 border-b border-gray-50">
                    <div className="flex gap-3 items-start">
                      <span className="text-xs font-bold text-green-600 flex-shrink-0 mt-0.5">#{i + 1}</span>
                      <p className="font-medium text-gray-800 text-sm leading-relaxed">{hmw.question}</p>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {hmw.solutions.map((sol, j) => (
                        <div key={j} className="flex gap-2 items-start">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#00C853' }} />
                          <span className="text-xs text-gray-500 leading-relaxed">{sol}</span>
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

      {/* ===== IDEATE — TEST ===== */}
      <section id="proses" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div ref={r} className="text-center mb-16">
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

          <div className="space-y-8">
            {ideateSteps.map((step, i) => {
              const Icon = step.icon
              const isPrototype = step.isPrototype
              const isLast = i === ideateSteps.length - 1
              return (
                <div
                  key={step.id}
                  id={isPrototype ? 'prototype' : step.id === 'test' ? 'test' : step.id}
                  ref={r}
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

      {/* ===== TESTING ===== */}
      <section id="test" className="py-24 relative overflow-hidden" style={{ background: '#f9fafb' }}>
        <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6">

          <div ref={r}>
            <StepHeading
              badge="✦ Step 04"
              stepNum="Testing"
              highlight=""
              subtitle="Melakukan usability testing dengan pengguna representatif untuk mengidentifikasi pain points, mengumpulkan feedback, dan melakukan iterasi desain."
            />
          </div>

          {/* Metode Testing */}
          <div ref={r} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 rounded-full bg-indigo-400" />
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Metode Testing</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { num: '01', label: 'Qualitative Testing', desc: 'Pengujian berbasis tugas untuk mengamati perilaku pengguna secara langsung.' },
                { num: '02', label: 'Task-based Testing', desc: 'Pengguna diminta menyelesaikan skenario nyata menggunakan prototype.' },
                { num: '03', label: 'Wawancara Singkat', desc: 'Diskusi pasca-testing untuk menggali persepsi dan kesulitan pengguna.' },
              ].map((m) => (
                <div key={m.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow duration-300">
                  <div className="text-2xl font-black mb-2 leading-none" style={{ color: '#6366f118' }}>{m.num}</div>
                  <div className="font-semibold text-gray-800 text-sm mb-1">{m.label}</div>
                  <div className="text-xs text-gray-400 leading-relaxed">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Penguji — grid 2 kolom foto */}
          <div ref={r} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 rounded-full bg-indigo-400" />
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Penguji</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Penguji 1', role: 'Mahasiswa, 19 Tahun', note: '"Alurnya cukup jelas, tapi tombol konfirmasi agak susah ditemukan."' },
                { name: 'Penguji 2', role: 'Pelajar SMP, 15 Tahun', note: '"Tampilannya bagus, cuma harganya kurang keliatan sebelum pesan."' },
                { name: 'Penguji 3', role: 'Guru, 45 Tahun', note: '"Mudah dipakai, navigasinya sederhana dan tidak membingungkan."' },
                { name: 'Penguji 4', role: 'Karyawan, 28 Tahun', note: '"Estimasi waktu perlu lebih akurat, tapi secara umum sudah bagus."' },
                { name: 'Penguji 5', role: 'Ibu Rumah Tangga, 38 Tahun', note: '"Ikon-ikonnya mudah dipahami, proses pemesanan terasa cepat."' },
              ].map((p) => (
                <div key={p.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 text-gray-300">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" /></svg>
                      <span className="text-xs">Foto Penguji</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="font-bold text-gray-900 text-sm">{p.name}</div>
                    <div className="text-xs text-gray-400 mb-2">{p.role}</div>
                    <p className="text-xs text-gray-500 italic leading-relaxed">{p.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hasil Pengujian */}
          <div ref={r} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 rounded-full bg-indigo-400" />
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Hasil Pengujian</h3>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-green-600 mb-3">✓ Berhasil</div>
                  <ul className="space-y-2">
                    {[
                      'Navigasi beranda mudah dipahami semua penguji',
                      'Alur pemesanan terasa cepat dan ringkas',
                      'Estimasi harga tampil jelas sebelum konfirmasi',
                      'Status driver mudah dipantau selama menunggu',
                    ].map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-green-400" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">⚠ Perlu Perbaikan</div>
                  <ul className="space-y-2">
                    {[
                      'Tombol konfirmasi kurang menonjol di beberapa layar',
                      'Akurasi estimasi waktu perlu ditingkatkan',
                      'Informasi tarif perlu lebih awal ditampilkan',
                      'Notifikasi pembatalan kurang informatif',
                    ].map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-orange-400" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Hasil Perbaikan */}
          <div ref={r} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 rounded-full bg-indigo-400" />
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Hasil Perbaikan</h3>
            </div>
            <div className="space-y-3">
              {[
                { before: 'Tombol konfirmasi kecil dan tidak menonjol', after: 'Tombol diperbesar dan diberi warna primer yang lebih kontras' },
                { before: 'Estimasi waktu ditampilkan sebagai angka tunggal', after: 'Estimasi diubah ke bentuk rentang (mis. 5–8 menit) yang lebih realistis' },
                { before: 'Informasi tarif baru muncul di halaman konfirmasi', after: 'Estimasi tarif ditampilkan sejak halaman pemilihan layanan' },
                { before: 'Notifikasi pembatalan hanya teks singkat', after: 'Notifikasi dilengkapi alasan dan opsi cari driver alternatif otomatis' },
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

          {/* Kesimpulan */}
          <div ref={r}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 rounded-full bg-green-500" />
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Kesimpulan</h3>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="h-1" style={{ background: 'linear-gradient(90deg, #00C853, #6366f1)' }} />
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prototype aplikasi <strong>Teman Jalan</strong> berhasil diuji secara fungsional untuk kebutuhan dasar transportasi online. Secara keseluruhan, pengguna merasa alur pemesanan lebih ringkas dan tampilan lebih mudah dipahami dibanding aplikasi sejenis.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Iterasi yang dilakukan berhasil menyelesaikan 4 dari 4 temuan utama testing — mulai dari visibilitas tombol, transparansi tarif, akurasi estimasi waktu, hingga notifikasi pembatalan yang lebih informatif. Pengembangan selanjutnya akan berfokus pada peningkatan akurasi GPS real-time dan sistem reward untuk pengguna aktif.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Alur Pemesanan Mudah', 'UI Intuitif', 'Tarif Transparan', 'Notifikasi Informatif', 'Estimasi Akurat'].map((tag) => (
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
  )
}
