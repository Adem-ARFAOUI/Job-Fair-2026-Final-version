import React, { useState } from "react";
import "./Header.css";

const Header = ({
  activeSection,
  setActiveSection,
  setHomeTarget,
  homeRefs,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  // Bouton scroll-up

  React.useEffect(() => {
    const handleScroll = () => setShowScrollUp(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll vers une sous-section de Home
  const scrollToHomeSub = (key) => {
    setActiveSection("home");
    setHomeTarget(key);
    setShowDropdown(false);
    setMenuOpen(false);
  };

  const handleClick = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {showScrollUp && (
        <div
          className='scroll-up'
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className='fa-solid fa-chevron-up'></i>
        </div>
      )}

      <header className='header'>
        <div className='header-title'>
          <img
            src='/images & logos/job-logo.png'
            alt='jobLogo'
            className='job-logo'
          />
          <div>
            <h1>Job Fair 2026</h1>
            <span>12 février 2026</span>
          </div>
        </div>

        <div className='header-logos'>
          <img src='/images & logos/utm-logo.png' alt='UTM' />
          <img src='/images & logos/dds-logo.png' alt='DDS' />
          <img src='/images & logos/fsegt-logo.jpg' alt='FSEGT' />
        </div>

        <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
          <i className='fa-solid fa-bars'></i>
        </div>
      </header>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className='ul'>
          {/* Home avec dropdown */}
          <li
            className={`home-item ${
              activeSection === "home" ? "active" : ""
            } ${showDropdown ? "dropdown-open" : ""}`}
            onMouseEnter={() =>
              window.innerWidth > 960 && setShowDropdown(true)
            }
            onMouseLeave={() =>
              window.innerWidth > 960 && setShowDropdown(false)
            }
          >
            <span className='home-label' onClick={() => handleClick("home")}>
              Home
            </span>

            <i
              className={`fa-solid fa-chevron-down home-arrow ${
                showDropdown ? "open" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setShowDropdown((prev) => !prev);
              }}
            />

            <ul className={`dropdown ${showDropdown ? "open" : ""}`}>
              <li onClick={() => scrollToHomeSub("organisateurs")}>
                Organisateurs
              </li>
              <li onClick={() => scrollToHomeSub("partenaires")}>
                Partenaires
              </li>
              <li onClick={() => scrollToHomeSub("sponsors")}>Sponsors</li>
            </ul>
          </li>

          <li
            className={activeSection === "programme" ? "active" : ""}
            onClick={() => handleClick("programme")}
          >
            Programme
          </li>

          <li
            className={activeSection === "speakers" ? "active" : ""}
            onClick={() => handleClick("speakers")}
          >
            Speakers
          </li>

          <li
            className={activeSection === "entreprises" ? "active" : ""}
            onClick={() => handleClick("entreprises")}
          >
            Entreprises
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
