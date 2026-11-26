
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img
          src="/images/teddy_events_page_02.jpg"
          alt="TEDDY EVENTS wedding mandap decoration"
        />
      </div>

      <div className="hero-overlay"></div>
      <div className="hero-glow"></div>

      <div className="hero-content">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Sparkles size={15} />
          <span>EVENTS • CELEBRATIONS • MEMORIES</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Every Moment
          <br />
          Deserves To Be
          <br />
          <span>Extraordinary.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          From beautiful weddings to unforgettable celebrations,
          we turn your special occasions into timeless memories.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a href="#services" className="hero-primary-btn">
            Explore Our Services
            <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="hero-secondary-btn">
            Contact Us
          </a>
        </motion.div>

        <motion.div
          className="hero-stat"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <span className="stat-number">68+</span>
          <span className="stat-label">Events Completed</span>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={18} />
      </motion.a>

      <div className="hero-side-text">
        ANDHRA PRADESH • INDIA
      </div>
    </section>
  );
}
