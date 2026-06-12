import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProcessSection from './components/ProcessSection'
import ParticlesBackground from './components/ParticlesBackground'
import Footer from './components/Footer'
import AboutAppSection from './components/AboutSection'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function App() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <main>
        <HeroSection />
        <AboutAppSection />
        <ProcessSection />
      </main>
      <Footer />
    </>
  )
}
