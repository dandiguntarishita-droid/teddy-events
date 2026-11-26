
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Sparkles,
} from "lucide-react";

const testimonials = [
  {
    name: "Happy Celebration",
    event: "Wedding Experience",
    message:
      "A beautiful celebration deserves thoughtful planning and attention to every little detail. TEDDY EVENTS aims to make every wedding feel special and memorable.",
    initials: "WE",
  },
  {
    name: "Special Moments",
    event: "Birthday Celebration",
    message:
      "Every birthday is an opportunity to create wonderful memories. Our goal is to make each celebration joyful, creative and full of happiness.",
    initials: "BC",
  },
  {
    name: "Forever Together",
    event: "Engagement Celebration",
    message:
      "From the first idea to the special occasion, every detail matters. We believe the best celebrations are the ones filled with genuine emotions.",
    initials: "EC",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex(
      (previous) => (previous + 1) % testimonials.length
    );
  };

  const previousTestimonial = () => {
    setActiveIndex(
      (previous) =>
        (previous - 1 + testimonials.length) %
        testimonials.length
    );
  };

  return (
    <section className="testimonials section-padding">

      <div className="testimonials-container">

        <motion.div
          className="testimonials-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">
            <span></span>
            THE CELEBRATION EXPERIENCE
          </span>

          <h2>
            Every Story
            <br />
            <em>Matters.</em>
          </h2>

          <p>
            Behind every celebration is a story,
            a special moment and a memory worth keeping.
          </p>
        </motion.div>

        <motion.div
          className="testimonial-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="testimonial-top">
            <div className="testimonial-quote-icon">
              <Quote size={30} />
            </div>

            <span className="testimonial-number">
              0{activeIndex + 1} / 0{testimonials.length}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="testimonial-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3>“{current.message}”</h3>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {current.initials}
                </div>

                <div>
                  <strong>{current.name}</strong>
                  <span>{current.event}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-bottom">
            <div className="testimonial-sample-label">
              <Sparkles size={15} />
              <span>ILLUSTRATIVE SAMPLE CONTENT</span>
            </div>

            <div className="testimonial-controls">
              <button
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
