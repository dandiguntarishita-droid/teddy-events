
import { ArrowUpRight, Phone, Mail, Heart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span>TEDDY</span>
            <small>EVENTS</small>
          </a>

          <p>
            Creating Moments. Crafting Memories.
            We turn your special occasions into
            beautiful experiences worth remembering.
          </p>

          <a
            href="https://www.instagram.com/teddy_events_and_photography?evlk=enc1bXBhdjN3MGc2"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="Visit TEDDY EVENTS on Instagram"
          >
            <FaInstagram size={19} />
          </a>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#gallery">Our Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Our Services</h3>
          <a href="#services">Weddings</a>
          <a href="#services">Birthdays</a>
          <a href="#services">Engagements</a>
          <a href="#services">Receptions</a>
          <a href="#services">Photography</a>
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>

          <a href="tel:+918978024363">
            <Phone size={17} />
            +91 89780 24363
          </a>

          <a href="mailto:saiteddy2000@gmail.com">
            <Mail size={17} />
            saiteddy2000@gmail.com
          </a>

          <a
            href="https://wa.me/918978024363"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} TEDDY EVENTS. All Rights Reserved.
        </p>

        <p className="footer-made">
          Made with <Heart size={14} fill="currentColor" /> for celebrations.
        </p>

        <a href="#home" className="footer-back-top">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
