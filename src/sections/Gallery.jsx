
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const photos = [
  { id: 1, category: "Birthdays", title: "Colourful Birthday Celebration", page: 1 },
  { id: 2, category: "Weddings", title: "Traditional Wedding Mandap", page: 2 },
  { id: 3, category: "Stage Decor", title: "Golden Celebration Setup", page: 3 },
  { id: 4, category: "Stage Decor", title: "Elegant Floral Seating Stage", page: 4 },
  { id: 5, category: "Weddings", title: "Traditional Wedding Stage", page: 5 },
  { id: 6, category: "Stage Decor", title: "Beautiful Floral Decoration", page: 6 },
  { id: 7, category: "Venue Decor", title: "Event Venue Decoration", page: 7 },
  { id: 8, category: "Stage Decor", title: "Floral Celebration Stage", page: 8 },
  { id: 9, category: "Birthdays", title: "Princess Birthday Theme", page: 9 },
  { id: 10, category: "Birthdays", title: "Butterfly Birthday Decoration", page: 10 },
  { id: 11, category: "Birthdays", title: "Colourful Birthday Stage", page: 11 },
  { id: 12, category: "Haldi", title: "Yellow Floral Celebration", page: 12 },
  { id: 14, category: "Birthdays", title: "Blue and Yellow Balloon Theme", page: 14 },
  { id: 15, category: "Venue Decor", title: "Elegant Event Venue", page: 15 },
  { id: 16, category: "Stage Decor", title: "Floral Stage Arrangement", page: 16 },
  { id: 17, category: "Stage Decor", title: "Beautiful Celebration Setup", page: 17 },
  { id: 18, category: "Weddings", title: "Traditional Wedding Decoration", page: 18 },
  { id: 19, category: "Stage Decor", title: "Floral Event Backdrop", page: 18 },
  { id: 20, category: "Birthdays", title: "Blue Balloon Birthday Theme", page: 20 },
  { id: 21, category: "Weddings", title: "Wedding Mandap Details", page: 21 },
  { id: 22, category: "Stage Decor", title: "Purple Floral Celebration", page: 22 },
  { id: 23, category: "Birthdays", title: "Princess Theme Decoration", page: 23 },
  { id: 24, category: "Haldi", title: "Yellow and Green Floral Setup", page: 24 },
  { id: 25, category: "Birthdays", title: "Colourful Cartoon Birthday", page: 25 },
  { id: 26, category: "Stage Decor", title: "Lavender Floral Stage", page: 26 },
  { id: 27, category: "Stage Decor", title: "Detailed Floral Arrangement", page: 27 },
  { id: 28, category: "Birthdays", title: "Joyful Birthday Celebration", page: 28 },
  { id: 29, category: "Venue Decor", title: "Grand Event Venue Setup", page: 29 },
  { id: 30, category: "Birthdays", title: "Colourful Birthday Backdrop", page: 30 },
  { id: 31, category: "Birthdays", title: "Beautiful Birthday Stage", page: 31 },
  { id: 32, category: "Venue Decor", title: "Elegant Venue Decoration", page: 32 },
  { id: 33, category: "Stage Decor", title: "Floral Seating Arrangement", page: 33 },
].map((photo) => ({
  ...photo,
  image: `/images/teddy_events_page_${String(photo.page).padStart(2, "0")}.jpg`,
}));

const categories = [
  "All",
  "Weddings",
  "Birthdays",
  "Stage Decor",
  "Venue Decor",
  "Haldi",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryRef = useRef(null);
  const pauseRef = useRef(false);

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  // Reset carousel when category changes
  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }, [activeCategory]);

  // Automatic horizontal sliding on mobile
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const interval = setInterval(() => {
      if (window.innerWidth > 768 || pauseRef.current) return;

      const card = gallery.querySelector(".gallery-item");
      if (!card) return;

      const cardWidth =
        card.getBoundingClientRect().width + 16;

      const maxScroll =
        gallery.scrollWidth - gallery.clientWidth;

      if (gallery.scrollLeft >= maxScroll - 10) {
        gallery.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        gallery.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [activeCategory]);

  const changePhoto = (direction) => {
    if (!selectedPhoto) return;

    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );

    const nextIndex =
      (currentIndex + direction + filteredPhotos.length) %
      filteredPhotos.length;

    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  return (
    <section className="gallery section-padding" id="gallery">

      <div className="gallery-heading">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">
            <span></span>
            OUR VISUAL STORIES
          </span>

          <h2>
            Moments Worth
            <br />
            <em>Remembering.</em>
          </h2>
        </motion.div>

        <p>
          Explore real celebrations and event decorations
          from TEDDY EVENTS. Every photograph captures
          a special moment created with care.
        </p>
      </div>

      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="gallery-grid"
        ref={galleryRef}
        onTouchStart={() => {
          pauseRef.current = true;
        }}
        onTouchEnd={() => {
          setTimeout(() => {
            pauseRef.current = false;
          }, 2500);
        }}
        onMouseEnter={() => {
          pauseRef.current = true;
        }}
        onMouseLeave={() => {
          pauseRef.current = false;
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo, index) => (
            <motion.article
              layout
              key={photo.id}
              className={`gallery-item gallery-item-${index % 4}`}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedPhoto(photo)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSelectedPhoto(photo);
                }
              }}
            >
              <img
                src={photo.image}
                alt={photo.title}
                loading="lazy"
              />

              <div className="gallery-item-overlay">
                <span>{photo.category}</span>
                <h3>{photo.title}</h3>
                <ArrowUpRight size={22} />
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="gallery-swipe-hint">
        <ChevronLeft size={15} />
        SWIPE TO EXPLORE MORE
        <ChevronRight size={15} />
      </p>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close image"
            >
              <X size={28} />
            </button>

            <button
              className="lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                changePhoto(-1);
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={30} />
            </button>

            <motion.img
              key={selectedPhoto.id}
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(event) => event.stopPropagation()}
            />

            <button
              className="lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                changePhoto(1);
              }}
              aria-label="Next image"
            >
              <ChevronRight size={30} />
            </button>

            <div className="lightbox-caption">
              {selectedPhoto.title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="gallery-bottom">
        <p>CELEBRATING LIFE, ONE MOMENT AT A TIME.</p>

        <a href="#contact">
          CREATE YOUR STORY
          <ArrowUpRight size={18} />
        </a>
      </div>

    </section>
  );
}
