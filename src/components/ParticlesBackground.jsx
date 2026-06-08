import { useCallback } from 'react'
import { ParticlesProvider, useParticlesProvider, default as Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const particleOptions = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'repulse' },
      onClick: { enable: true, mode: 'push' },
    },
    modes: {
      repulse: { distance: 80, duration: 0.4 },
      push: { quantity: 2 },
    },
  },
  particles: {
    color: { value: '#00C853' },
    links: { enable: false },
    move: {
      enable: true,
      speed: 0.6,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'bounce' },
    },
    number: {
      value: 70,
      density: { enable: true, area: 900 },
    },
    opacity: { value: 0.35 },
    shape: { type: 'circle' },
    size: { value: { min: 1.5, max: 3 } },
  },
  detectRetina: true,
}

function ParticlesInner() {
  const { loaded } = useParticlesProvider()

  if (!loaded) return null

  return (
    <Particles
      id="tsparticles"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -10,
        pointerEvents: 'none',
      }}
      options={particleOptions}
    />
  )
}

export default function ParticlesBackground() {
  const initEngine = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <ParticlesProvider init={initEngine}>
      <ParticlesInner />
    </ParticlesProvider>
  )
}
