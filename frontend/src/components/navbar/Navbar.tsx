import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <Link to="/" className="navbar-brand">
        FundFind
      </Link>

      <div className={`navbar-links ${menuOpen ? "menu-open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>

      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? "☀" : "☾"}
      </button>
    </nav>
  );
}

export default Navbar;