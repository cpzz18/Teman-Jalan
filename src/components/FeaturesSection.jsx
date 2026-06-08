import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Users, MapPin, Shield, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Users,
    title: 'Temukan Teman Perjalanan',
    description: 'Hubungkan dirimu dengan traveler lain yang memiliki rencana perjalanan serupa. Buat perjalanan lebih menyenangkan dan hemat.',
    color: '#00C853',
  },
  {
    icon: MapPin,
    title: 'Rencana Perjalanan Bersama',
    description: 'Koordinasikan jadwal, rute, dan destinasi dengan mudah. Semua dalam satu platform yang intuitif dan efisien.',
    color: '#00b4d8',
  },
  {
    icon: Shield,
    title: 'Sistem Verifikasi Aman',
    description: 'Profil terverifikasi dan sistem rating pengguna memastikan kamu menemukan teman perjalanan yang terpercaya.',
    color: '#7c3aed',
  },
  {
    icon: Zap,
    title: 'Real-time Matching',
    description: 'Algoritma cerdas mencocokkan kamu dengan teman perjalanan berdasarkan minat, jadwal, dan preferensi perjalanan.',
    color: '#f59e0b',
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return
      gsap.set(card, { opacity: 0, y: 50 })
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    })
  }, { scope: sectionRef })

  return (
    <section id="fitur" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge mb-4 inline-flex">✦ Fitur Unggulan</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Kenapa Memilih{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00C853, #00e676)' }}>
              Teman Jalan?
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Dirancang khusus untuk traveler Indonesia yang ingin menjelajah lebih seru bersama teman baru.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                ref={(el) => (cardsRef.current[i] = el)}
                className="feature-card group"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                  style={{ backgroundColor: `${feature.color}1a` }}
                >
                  <Icon size={22} style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
