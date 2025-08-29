/* eslint-disable no-unused-vars */
import React from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/abhivermacs1996/",
      icon: <FaInstagram />,
      color: "#E4405F"
    },
    {
      name: "Twitter",
      href: "https://x.com/vermaabhishekc2",
      icon: <FaTwitter />,
      color: "#1DA1F2"
    },
    {
      name: "GitHub",
      href: "https://github.com/abhishekverma1996",
      icon: <FaGithub />,
      color: "#181717"
    },
    {
      name: "LinkedIn",
      href: "https://in.linkedin.com/in/abhishek-verma495",
      icon: <FaLinkedin />,
      color: "#0077B5"
    }
  ];

  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* Main Footer Content */}
        <div className="footer__main">
          {/* Brand Section */}
          <div className="footer__brand">
            <h1 className="footer__title">&lt;Abhishek Verma/&gt;</h1>
            <p className="footer__description">
              Full Stack Developer passionate about creating innovative web solutions 
              and turning ideas into reality through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__links">
            <h3 className="footer__links-title">Quick Links</h3>
            <ul className="footer__list">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer__link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer__social">
            <h3 className="footer__social-title">Connect With Me</h3>
            <div className="footer__social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{ '--social-color': social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <div className="footer__copy">
            <span>&copy; {currentYear} Abhishek Verma. All rights reserved.</span>
            <span className="footer__made-with">
              Made with <FaHeart className="footer__heart" /> in India
            </span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="footer__scroll-top"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>

      {/* Footer Background Pattern */}
      <div className="footer__pattern"></div>
    </footer>
  );
};

export default Footer;