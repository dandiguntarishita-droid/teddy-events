
import { motion } from "framer-motion";
import {
  Heart,
  Cake,
  Gem,
  PartyPopper,
  Baby,
  CalendarHeart,
  Camera,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Wedding Celebrations",
    description:
      "Beautifully planned weddings filled with elegance, love and unforgettable memories.",
    image: "/images/teddy_events_page_02.jpg",
    icon: Heart,
  },
  {
    number: "02",
    title: "Birthday Celebrations",
    description:
      "Creative birthday experiences designed to make every celebration special.",
    image: "/images/teddy_events_page_01.jpg",
    icon: Cake,
  },
  {
    number: "03",
    title: "Engagement Ceremonies",
    description:
      "Elegant engagement celebrations for the beginning of a beautiful journey.",
    image: "/images/teddy_events_page_04.jpg",
    icon: Gem,
  },
  {
    number: "04",
    title: "Reception Events",
    description:
      "Sophisticated reception experiences with beautiful event styling.",
    image: "/images/teddy_events_page_05.jpg",
    icon: PartyPopper,
  },
  {
    number: "05",
    title: "Baby Showers",
    description:
      "Celebrate precious new beginnings with beautiful decorations and thoughtful details.",
    image: "/images/teddy_events_page_10.jpg",
    icon: Baby,
  },
  {
    number: "06",
    title: "Anniversary Celebrations",
    description:
      "Celebrate milestones and treasured memories with a personal touch.",
    image: "/images/teddy_events_page_12.jpg",
    icon: CalendarHeart,
  },
  {
    number: "07",
    title: "Complete Event Management",
    description:
      "From initial planning to event execution, we help bring your vision to life.",
    image: "/images/teddy_events_page_07.jpg",
    icon: Sparkles,
  },
  {
    number: "08",
    title: "Photography & Videography",
    description:
      "Preserving your special occasions through beautiful visual storytelling.",
    image: "/images/teddy_events_page_08.jpg",
    icon: Camera,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="services-heading">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">
            <span></span>
            WHAT WE CREATE
          </span>

          <h2>
            Celebrations Made
            <br />
            <em>Extraordinary.</em>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Every event has a story. We help turn yours
          into an experience worth remembering.
        </motion.p>
      </div>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <motion.article
              className="service-card"
              variants={cardVariants}
              key={service.number}
              whileHover={{ y: -10 }}
            >
              <div className="service-image">
                <img
                  src={service.image}
                  alt={`TEDDY EVENTS - ${service.title}`}
                  loading="lazy"
                />

                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-icon">
                  <Icon size={23} />
                </span>

                <div className="service-image-overlay"></div>
              </div>

              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="#contact" className="service-link">
                  CONTACT US
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
