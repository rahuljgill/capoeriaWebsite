import { useEffect, useState } from "react";
import new_Logo from "../assets/new_Logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Classes", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Location", href: "#location" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 hidden w-full transition-all duration-300 md:block ${
        scrolled
          ? "border-b border-[#c98b2b]/10 bg-[#f7f2ea]/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-4 transition-opacity hover:opacity-90"
        >
          <img
            src={new_Logo}
            alt="Bath Capoeira Group"
            className="h-16 w-16 object-contain"
          />

          <div className="leading-none">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c98b2b]">
              Bath
            </p>

            <h2 className="text-lg font-black uppercase tracking-tight text-[#1e140d]">
              Capoeira Group
            </h2>
          </div>
        </a>

        {/* Nav Links */}
        <nav>
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group relative text-sm font-bold uppercase tracking-[0.15em] text-[#2a1a10] transition hover:text-[#c98b2b]"
                >
                  {link.label}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#c98b2b] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-md bg-[#c98b2b] px-6 py-3 text-sm font-black uppercase tracking-[0.15em] text-white shadow-lg shadow-[#c98b2b]/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#b67d27]"
        >
          Book a Trial
        </a>
      </div>
    </header>
  );
}

export default Navbar;
