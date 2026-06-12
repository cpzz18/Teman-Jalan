import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Users, MapPin, Shield, Zap, ClipboardList, Lightbulb, Target } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function AboutAppSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return
      gsap.set(card, { opacity: 0, y: 40 })
      gsap.to(card, {
        opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' }
      })
    })
  }, { scope: sectionRef })

  return (
    <section id="tentang" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-50 rounded-full opacity-50 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge mb-4 inline-flex">✦ Konsep Aplikasi</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Tentang{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00C853, #00e676)' }}>
              Teman Jalan
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Sebuah platform pencari teman perjalanan berbasis ojek online yang dirancang melalui proses Design Thinking.
          </p>
        </div>

        <div ref={(el) => (cardsRef.current[0] = el)} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardList size={24} className="text-green-600" />
            <h3 className="text-xl font-bold text-gray-800">Latar Belakang Riset</h3>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Berdasarkan wawancara dan observasi terhadap pengguna ojek online (mahasiswa, pelajar, Guru, dll), 
            ditemukan beberapa masalah utama:
          </p>
          <div className="flex flex-wrap gap-2">
            {['Sulit mendapat driver saat jam sibuk', 'Estimasi waktu tidak akurat', 'Lonjakan tarif', 'Pembatalan mendadak', 'Tampilan aplikasi rumit'].map((issue) => (
              <span key={issue} className="text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200 text-gray-600">{issue}</span>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">Fitur yang Dirancang</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, title: 'Temukan Teman Perjalanan', desc: 'Mencocokkan pengguna berdasarkan minat, rute, dan jadwal perjalanan.', color: '#00C853' },
            { icon: MapPin, title: 'Rencana Perjalanan Bersama', desc: 'Koordinasi jadwal, rute, dan titik kumpul dalam satu platform.', color: '#3b82f6' },
            { icon: Shield, title: 'Sistem Verifikasi Aman', desc: 'Profil terverifikasi, rating pengguna, dan fitur share ride.', color: '#8b5cf6' },
            { icon: Zap, title: 'Pencocokan Real-time', desc: 'Algoritma cerdas memberikan rekomendasi teman perjalanan secara langsung.', color: '#f59e0b' }
          ].map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                ref={(el) => (cardsRef.current[idx + 1] = el)}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${feature.color}15` }}>
                  <Icon size={22} style={{ color: feature.color }} />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}