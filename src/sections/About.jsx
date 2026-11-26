
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const stats = [
  { number: "68+", label: "Events Completed" },
  { number: "8", label: "Event Services" },
  { number: "100%", label: "Passion & Creativity" },
];

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="about-container">
        <motion.div
          className="about-image-wrap"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/teddy_events_page_06.jpg"
            alt="TEDDY EVENTS floral stage decoration"
            className="about-image"
            loading="lazy"
          />

          <div className="about-image-caption">
            <Sparkles size={17} />
            <span>Every Celebration Matters</span>
          </div>

          <div className="about-image-number">
            01 / 08
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="section-eyebrow">
            <span></span>
            GET TO KNOW US
          </span>

          <h2>
            We Create
            <br />
            Moments That
            <br />
            <em>Stay Forever.</em>
          </h2>

          <p className="about-description">
            At TEDDY EVENTS, we believe every celebration
            deserves something extraordinary.
            From beautiful weddings and joyful birthdays
            to elegant receptions and special family occasions,
            we bring creativity, passion and thoughtful planning
            to every event.
          </p>

          <p className="about-description">
            With 68 events completed, our focus is on creating
            memorable experiences and capturing the moments
            that matter most.
          </p>

          <a href="#services" className="about-link">
            DISCOVER OUR SERVICES
            <ArrowUpRight size={18} />
          </a>

          <div className="about-stats">
            {stats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
