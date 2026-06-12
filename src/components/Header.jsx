import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Empathize", href: "#empathize" },
  { label: "Define", href: "#define" },
  { label: "Ideate", href: "#proses" },
  { label: "Prototype", href: "#prototype" },
  { label: "Testing", href: "#test" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveHash(`#${section}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 text-gray-900 no-underline group"
        >
          <img
            src="/Logo.png"
            alt="Teman Jalan Logo"
            className="w-11 h-11 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Teman Jalan
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className={`relative text-base font-medium transition-colors duration-200 ${
                activeHash === item.href
                  ? "text-green-600"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {item.label}
              {activeHash === item.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#prototype"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#prototype");
            }}
            className="hidden md:inline-flex items-center gap-2 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold py-2.5 px-6 rounded-xl transition-all duration-200 text-base"
          >
            <span>Lihat Prototype</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg`}
      >
        <nav className="flex flex-col px-6 py-5 gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className={`text-gray-800 font-medium py-2 px-3 rounded-lg transition-colors text-base ${
                activeHash === item.href
                  ? "bg-green-50 text-green-700"
                  : "hover:bg-gray-50"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#prototype"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#prototype");
            }}
            className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold py-3 px-5 rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-2 text-base"
          >
            <span>Lihat Prototype</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}