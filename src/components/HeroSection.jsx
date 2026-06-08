import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight, ExternalLink } from 'lucide-react'

const FIGMA_PROTOTYPE_URL =
  'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fyour-file-id'

export default function HeroSection() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const mockupRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(textRef.current, { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 0.9 }, '-=0.3')
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
      .fromTo(mockupRef.current, { opacity: 0, y: 60, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1 }, '-=0.8')
  }, { scope: containerRef })

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-green-50 rounded-full opacity-60 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <div ref={badgeRef} className="flex justify-center md:justify-start mb-6">
              <span className="section-badge">
                <span>✦</span> UI/UX Case Study
              </span>
            </div>

            <div ref={textRef}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Teman{' '}
                <span className="gradient-text">Jalan</span>
                <br />
                <span className="text-gray-500 text-3xl md:text-4xl lg:text-5xl font-semibold">
                  Aplikasi Pencari
                </span>
                <br />
                <span className="text-gray-700 text-3xl md:text-4xl lg:text-5xl">
                  Teman Perjalanan
                </span>
              </h1>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
                Sebuah studi kasus desain UI/UX lengkap yang memperlihatkan proses{' '}
                <strong className="text-gray-700">Design Thinking</strong> dari empati hingga
                prototype interaktif untuk mengatasi masalah perjalanan solo.
              </p>
            </div>

            <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
              <a href="#prototype" className="btn-primary">
                <ExternalLink size={18} />
                Coba Prototype
              </a>
              <a href="#proses" className="btn-secondary">
                Lihat Proses Desain
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="flex gap-8 justify-center md:justify-start mt-10 pt-10 border-t border-gray-100">
              {[
                { value: '8', label: 'Tahap Desain' },
                { value: '5+', label: 'Iterasi' },
                { value: '100%', label: 'Design Thinking' },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={mockupRef} className="flex-shrink-0 flex justify-center relative">
            <div className="phone-mockup">
              <div className="phone-screen">
                {FIGMA_PROTOTYPE_URL.includes('your-file-id') ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gray-50">
                    <svg width="32" height="48" viewBox="0 0 38 57" fill="none">
                      <path d="M19 28.5C19 25.98 20 23.56 21.78 21.78C23.56 20 25.98 19 28.5 19C31.02 19 33.44 20 35.22 21.78C36.99 23.56 38 25.98 38 28.5C38 31.02 36.99 33.44 35.22 35.22C33.44 36.99 31.02 38 28.5 38C25.98 38 23.56 36.99 21.78 35.22C20 33.44 19 31.02 19 28.5Z" fill="#A259FF"/>
                      <path d="M0 47.5C0 44.98 1 42.56 2.78 40.78C4.56 39 6.98 38 9.5 38H19V47.5C19 50.02 17.99 52.44 16.22 54.22C14.44 55.99 12.02 57 9.5 57C6.98 57 4.56 55.99 2.78 54.22C1 52.44 0 50.02 0 47.5Z" fill="#0ACF83"/>
                      <path d="M19 0V19H28.5C31.02 19 33.44 17.99 35.22 16.22C36.99 14.44 38 12.02 38 9.5C38 6.98 36.99 4.56 35.22 2.78C33.44 1 31.02 0 28.5 0H19Z" fill="#FF7262"/>
                      <path d="M0 9.5C0 12.02 1 14.44 2.78 16.22C4.56 17.99 6.98 19 9.5 19H19V0H9.5C6.98 0 4.56 1 2.78 2.78C1 4.56 0 6.98 0 9.5Z" fill="#F24E1E"/>
                      <path d="M0 28.5C0 31.02 1 33.44 2.78 35.22C4.56 36.99 6.98 38 9.5 38H19V19H9.5C6.98 19 4.56 20 2.78 21.78C1 23.56 0 25.98 0 28.5Z" fill="#1ABCFE"/>
                    </svg>
                    <span className="text-xs text-gray-400 text-center px-4">Tempel URL Figma Prototype di HeroSection.jsx</span>
                  </div>
                ) : (
                  <iframe
                    src={FIGMA_PROTOTYPE_URL}
                    title="Figma Prototype - Teman Jalan"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3 hidden md:flex items-center gap-3">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500">Design Score</div>
                <div className="text-sm font-bold text-gray-900">4.9 / 5.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
