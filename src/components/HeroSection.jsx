import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, ArrowRight, Shield, Clock } from "lucide-react";
import DotFieldBackground from "./DotFieldBackground";

gsap.registerPlugin(ScrollTrigger);

const PROTOTYPE_SCREENSHOT = "/image.png";

export default function HeroSection() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const mockupRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      )
        .fromTo(
          textRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .fromTo(
          ctaRef.current.children,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          mockupRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.7, ease: "back.out(0.8)" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-white"
    >
      <DotFieldBackground />

      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/40 via-white/50 to-gray-50/40 pointer-events-none z-[1]" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-green-100/20 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-green-100/20 rounded-full blur-3xl pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div
              ref={badgeRef}
              className="flex justify-center lg:justify-start mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
                <span className="text-green-600">✦</span> UI/UX Case Study
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="text-gray-500">Design Thinking</span>
              </span>
            </div>

            <div ref={textRef}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                <span className="text-gray-900">Teman</span>{" "}
                <span className="text-green-600">Jalan</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-gray-600 mb-3">
                Solusi Transportasi Modern untuk Mobilitas Harian
              </p>
              <p className="text-gray-500 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Teman Jalan adalah aplikasi transportasi digital yang memudahkan
                pengguna untuk memesan perjalanan dengan cepat, aman, dan nyaman
                dalam aktivitas sehari-hari.
              </p>
            </div>

            <div
              ref={ctaRef}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8"
            >
              <a
                href="#prototype"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <ExternalLink size={18} />
                <span>Coba Prototype</span>
              </a>
              <a
                href="#proses"
                className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-6 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span>Lihat Proses Desain</span>
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="flex gap-8 justify-center lg:justify-start mt-10 pt-8 border-t border-gray-100">
              {[
                { value: "8", label: "Tahap Desain" },
                { value: "5+", label: "Iterasi" },
                { value: "100%", label: "Design Thinking" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={mockupRef}
            className="flex-shrink-0 flex justify-center relative"
          >
            <div className="relative">
              <div className="phone-mockup relative w-[280px] md:w-[300px] bg-gray-900 rounded-[2.5rem] shadow-xl border border-gray-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-gray-900 rounded-b-xl z-10" />
                <div className="phone-screen bg-white rounded-[2rem] overflow-y-auto aspect-[9/19]">
                  <img
                    src={PROTOTYPE_SCREENSHOT}
                    alt="Teman Jalan Prototype Screenshot"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="absolute -top-8 -right-10 bg-white rounded-xl shadow-md border border-gray-200 p-3 hidden lg:flex items-center gap-2 animate-float">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                  <Shield size={16} className="text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Keamanan</div>
                  <div className="text-sm font-bold text-gray-700">
                    Terverifikasi
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-8 bg-white rounded-xl shadow-md border border-gray-200 p-3 hidden lg:flex items-center gap-2 animate-float-delayed">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                  <Clock size={16} className="text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Estimasi</div>
                  <div className="text-sm font-bold text-gray-700">
                    Real-time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float 3s ease-in-out infinite 0.5s; }
      `}</style>
    </section>
  );
}
