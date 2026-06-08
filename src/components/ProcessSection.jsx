import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Heart, Target, Lightbulb, PenLine,
  GitBranch, LayoutGrid, Palette, Smartphone, FlaskConical,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const BASE = 'https://www.figma.com/embed?embed_host=share&url='

const steps = [
  {
    id: 'empathize',
    icon: Heart,
    color: '#ef4444',
    label: '01',
    title: 'Empathize',
    description: 'Memahami kebutuhan dan pain points pengguna melalui riset mendalam: user interview, survei, dan observasi perilaku traveler solo di Indonesia.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/file/YOUR_FILE_ID/page=Empathize'),
    hasEmbed: true,
  },
  {
    id: 'define',
    icon: Target,
    color: '#f97316',
    label: '02',
    title: 'Define',
    description: 'Mendefinisikan problem statement berdasarkan temuan riset. Menggunakan Point of View (POV) dan How Might We (HMW) untuk merumuskan masalah secara tepat.',
    figmaUrl: BASE + encodeURIComponent('https://www.figma.com/file/YOUR_FILE_ID/page=Define'),
    hasEmbed: true,
  },
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
          <path d="M19 28.5C19 25.98 20 23.56 21.78 21.78C23.56 20 25.98 19 28.5 19C31.02 19 33.44 20 35.22 21.78C36.99 23.56 38 25.98 38 28.5C38 31.02 36.99 33.44 35.22 35.22C33.44 36.99 31.02 38 28.5 38C25.98 38 23.56 36.99 21.78 35.22C20 33.44 19 31.02 19 28.5Z" fill="#A259FF"/>
          <path d="M0 47.5C0 44.98 1 42.56 2.78 40.78C4.56 39 6.98 38 9.5 38H19V47.5C19 50.02 17.99 52.44 16.22 54.22C14.44 55.99 12.02 57 9.5 57C6.98 57 4.56 55.99 2.78 54.22C1 52.44 0 50.02 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C31.02 19 33.44 17.99 35.22 16.22C36.99 14.44 38 12.02 38 9.5C38 6.98 36.99 4.56 35.22 2.78C33.44 1 31.02 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 12.02 1 14.44 2.78 16.22C4.56 17.99 6.98 19 9.5 19H19V0H9.5C6.98 0 4.56 1 2.78 2.78C1 4.56 0 6.98 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 31.02 1 33.44 2.78 35.22C4.56 36.99 6.98 38 9.5 38H19V19H9.5C6.98 19 4.56 20 2.78 21.78C1 23.56 0 25.98 0 28.5Z" fill="#1ABCFE"/>
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

export default function ProcessSection() {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useGSAP(() => {
    itemsRef.current.forEach((item) => {
      if (!item) return
      gsap.set(item, { opacity: 0, y: 40 })
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    })
  }, { scope: sectionRef })

  return (
    <section
      id="proses"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: '#f9fafb' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge mb-4 inline-flex">✦ Design Thinking</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Proses{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #00C853, #00e676)' }}
            >
              Desain
            </span>{' '}
            Kami
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Mengikuti metodologi Design Thinking untuk memastikan solusi yang berpusat pada pengguna.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isPrototype = step.isPrototype
            const isLast = i === steps.length - 1

            return (
              <div
                key={step.id}
                id={isPrototype ? 'prototype' : step.id === 'test' ? 'test' : step.id}
                ref={(el) => (itemsRef.current[i] = el)}
                className="flex gap-5 md:gap-6"
              >
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: 48 }}>
                  <div
                    className="timeline-dot"
                    style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}aa)` }}
                  >
                    <Icon size={20} />
                  </div>
                  {!isLast && (
                    <div
                      className="flex-1 w-px mt-2"
                      style={{
                        minHeight: '2rem',
                        background: `linear-gradient(to bottom, ${step.color}55, transparent)`,
                      }}
                    />
                  )}
                </div>

                <div className="flex-1 min-w-0 pb-2">
                  <span
                    className="text-xs font-bold tracking-widest uppercase mb-2 block"
                    style={{ color: step.color }}
                  >
                    Step {step.label}
                  </span>

                  <div className="bg-white rounded-2xl p-5 md:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{step.description}</p>

                    {step.hasEmbed && step.figmaUrl ? (
                      <FigmaEmbed url={step.figmaUrl} title={`Figma – ${step.title}`} isPrototype={isPrototype} />
                    ) : !step.hasEmbed ? (
                      <div className="mt-5 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center py-12 gap-3 text-gray-400">
                        <FlaskConical size={36} className="opacity-40" />
                        <span className="text-sm font-medium">Laporan Usability Testing — Coming Soon</span>
                        <span className="text-xs text-center max-w-xs">
                          Hasil pengujian dengan pengguna akan ditampilkan di sini setelah sesi testing selesai.
                        </span>
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
  )
}
