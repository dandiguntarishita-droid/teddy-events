
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

const contacts = [
  {
    title: "WhatsApp",
    description: "Chat with us directly",
    detail: "+91 89780 24363",
    icon: MessageCircle,
    link: "https://wa.me/918978024363",
  },
  {
    title: "Call Us",
    description: "Let's talk about your event",
    detail: "+91 89780 24363",
    icon: Phone,
    link: "tel:+918978024363",
  },
  {
    title: "Email",
    description: "Send us your thoughts",
    detail: "saiteddy2000@gmail.com",
    icon: Mail,
    link: "mailto:saiteddy2000@gmail.com",
  },
  {
    title: "Instagram",
    description: "Explore our social presence",
    detail: "@teddy_events_and_photography",
    icon: FaInstagram,
    link: "https://www.instagram.com/teddy_events_and_photography?evlk=enc1bXBhdjN3MGc2",
  },
];

export default function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow">
            <span></span>
            GET IN TOUCH
          </span>

          <h2>
            Let's Make
            <br />
            Something
            <br />
            <em>Memorable.</em>
          </h2>

          <p>
            Have a celebration in mind?
            We'd love to hear from you.
            Connect with TEDDY EVENTS and let's
            create something beautiful together.
          </p>

          <div className="contact-location">
            <MapPin size={19} />
            <span>Andhra Pradesh, India</span>
          </div>
        </motion.div>

        <div className="contact-options">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.a
                href={contact.link}
                target={
                  contact.title === "Instagram" ||
                  contact.title === "WhatsApp"
                    ? "_blank"
                    : undefined
                }
                rel="noopener noreferrer"
                className="contact-card"
                key={contact.title}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ x: 8 }}
              >
                <div className="contact-card-icon">
                  <Icon size={23} />
                </div>

                <div className="contact-card-content">
                  <span>{contact.title}</span>
                  <h3>{contact.detail}</h3>
                  <p>{contact.description}</p>
                </div>

                <div className="contact-card-arrow">
                  <ArrowUpRight size={21} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      <motion.div
        className="contact-banner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <Sparkles size={19} />
          <span>YOUR SPECIAL MOMENT STARTS HERE</span>
        </div>

        <h3>
          Every Celebration Has
          <br />
          A Story. Let's Create Yours.
        </h3>

        <a
          href="https://wa.me/918978024363"
          target="_blank"
          rel="noopener noreferrer"
        >
          CHAT WITH US
          <ArrowUpRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}
