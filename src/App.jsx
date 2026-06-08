import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import ProcessSection from './components/ProcessSection'
import ParticlesBackground from './components/ParticlesBackground'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function App() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
      </main>
      <Footer />
    </>
  )
}
