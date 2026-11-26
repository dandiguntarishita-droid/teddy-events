
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, Star } from "lucide-react";

export default function Experience() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="experience section-padding">

      <div className="experience-container">

        <motion.div
          className="experience-visual"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="experience-image-wrap"
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1000,
            }}
          >
            <img
             src="/images/teddy_events_page_12.jpg"
              alt="Elegant event celebration"
            />

            <div className="experience-image-overlay"></div>

            <div className="experience-image-label">
              <Sparkles size={16} />
              <span>THE ART OF CELEBRATION</span>
            </div>
          </motion.div>

          <motion.div
            className="experience-floating-card"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="experience-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={13}
                  fill="currentColor"
                />
              ))}
            </div>

            <strong>68+</strong>
            <span>Events Completed</span>
          </motion.div>

          <div className="experience-decoration">
            TEDDY EVENTS
          </div>
        </motion.div>

        <motion.div
          className="experience-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="section-eyebrow">
            <span></span>
            EXPERIENCE THE DIFFERENCE
          </span>

          <h2>
            More Than
            <br />
            An Event.
            <br />
            <em>A Feeling.</em>
          </h2>

          <p>
            A celebration is not just about a beautiful venue.
            It is about the emotions, the details and the
            memories that stay with you long after the day ends.
          </p>

          <p>
            At TEDDY EVENTS, we bring creativity and thoughtful
            planning together to make every occasion special.
            From the first idea to the final moment, your
            celebration deserves attention and care.
          </p>

          <div className="experience-features">
            <div>
              <span>01</span>
              <p>Creative Event Concepts</p>
            </div>

            <div>
              <span>02</span>
              <p>Thoughtful Planning</p>
            </div>

            <div>
              <span>03</span>
              <p>Memorable Experiences</p>
            </div>
          </div>

          <a href="#booking" className="experience-link">
            LET'S CREATE SOMETHING BEAUTIFUL
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>

      <div className="experience-bottom-line">
        <span>CREATIVITY</span>
        <span>•</span>
        <span>DETAIL</span>
        <span>•</span>
        <span>CELEBRATION</span>
        <span>•</span>
        <span>MEMORIES</span>
      </div>

    </section>
  );
}
