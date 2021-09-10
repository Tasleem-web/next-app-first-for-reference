import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => window.scrollY >= 300 ? setIsScrolled(true) : setIsScrolled(false);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`} >
      <Link href="#">
        <a href="#" className="logo">
          {/* <FontAwesomeIcon icon="fas fa-magic" /> */}
          design.</a>

      </Link>
      <div className="fas fa-bars"></div>
      <nav className="navbar">
        <ul>
          <li>
            <Link href="#home">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a>about</a>
            </Link>
          </li>
          <li>
            <Link href="#service">
              <a>services</a>
            </Link>
          </li>
          <li>
            <Link href="#team">
              <a>team</a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a>contact</a>
            </Link>
          </li>
          <li>
            <Link href="#faq">
              <a>FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="/viewcontactdetails">
              <a>View Contact Details</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;