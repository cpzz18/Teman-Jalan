export default function Footer() {
  const year = new Date().getFullYear()

  const navLinks = [
    { label: 'Empathize', href: '#empathize' },
    { label: 'Define', href: '#define' },
    { label: 'Ideate', href: '#proses' },
    { label: 'Prototype', href: '#prototype' },
    { label: 'Test', href: '#test' },
  ]

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/cpzz18',
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/robbinchan/',
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-gray-900 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-green-500 blur-md rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand section dengan logo gambar */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo gambar dari public/Logo.png */}
              <img 
                src="/Logo.png" 
                alt="Teman Jalan Logo" 
                className="w-10 h-10 object-contain rounded-lg"
              />
              <span className="font-bold text-xl text-white tracking-tight">Teman Jalan</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Studi kasus UI/UX dengan pendekatan Design Thinking untuk aplikasi pencari teman perjalanan berbasis ojek online.
            </p>
            <p className="text-xs text-gray-600">&copy; {year} Teman Jalan — All rights reserved.</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Tahapan</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Tentang</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>UI/UX Case Study</li>
              <li>Design Thinking Process</li>
              <li>High-Fidelity Prototype</li>
              <li>Usability Testing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Ikuti Saya</h3>
            <div className="flex gap-3 mb-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-xs text-gray-600">
            Karya ini dipublikasikan untuk keperluan portofolio desain UI/UX. 
            Teman Jalan adalah proyek konseptual, bukan aplikasi nyata.
          </p>
        </div>
      </div>
    </footer>
  )
}