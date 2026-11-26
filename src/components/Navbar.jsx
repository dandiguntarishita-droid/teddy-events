
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <a href="#home" className="navbar-brand" onClick={closeMenu}>
        <img
          src="/images/logo_teddy_events_page_13.png"
          alt="TEDDY EVENTS Logo"
          className="navbar-logo-image"
        />

        <span className="navbar-brand-text">
          <strong>TEDDY EVENTS</strong>
        </span>
      </a>

      <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={closeMenu}>
            {link.name}
          </a>
        ))}
      </nav>

      <a href="#contact" className="navbar-cta" onClick={closeMenu}>
        Contact Us
        <ArrowUpRight size={17} />
      </a>

      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>
    </header>
  );
}
