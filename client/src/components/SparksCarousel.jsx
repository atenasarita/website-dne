import * as React from "react";
import { ExternalLink } from "lucide-react";

const SparksCarousel = React.forwardRef(({ title, subtitle, items, headerExtra }, ref) => {
  const carouselRef = React.useRef(null);
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;
      const newScrollLeft =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const checkScrollPosition = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setIsAtStart(scrollLeft < 10);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
      }
    };
    const currentRef = carouselRef.current;
    if (currentRef) {
      checkScrollPosition();
      currentRef.addEventListener("scroll", checkScrollPosition);
    }
    window.addEventListener("resize", checkScrollPosition);
    return () => {
      if (currentRef) currentRef.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [items]);

  return (
    <section ref={ref} style={{ width: "100%", padding: "2rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          <h2 style={{ 
            fontSize: "1.75rem", 
            fontWeight: 700, 
            color: "#203b5d", 
            margin: 0, 
            fontFamily: "NeueEinstellung"
          }}>
            {title}
          </h2>

          {subtitle && (
            <p style={{ marginTop: "0.25rem", color: "#6b7280", fontSize: "0.95rem", fontFamily: "Space Mono" }}>
              {subtitle}
            </p>
          )}

          {headerExtra && (
            <div style={{ marginTop: "1rem" }}>
              {headerExtra}
            </div>
          )}
        </div>

        {/* Carousel wrapper */}
        <div style={{ position: "relative" }}>
          <div
            ref={carouselRef}
            style={{
              display: "flex",
              gap: "1rem",
              overflowX: "auto",
              paddingBottom: "1rem",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {items.map((item, index) => (
              <div
                key={item.id ?? index}
                style={{
                  minWidth: "180px",
                  maxWidth: "190px",
                  flexShrink: 0,
                  background: "#fafaf8",
                  padding: "1rem",
                  transition: "all 0.2s",
                  fontFamily: "DM Sans",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{
                  fontSize: "14px",
                  marginBottom: "4px",
                  color: "#203b5d",
                  fontFamily: "NeueEinstellung",
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontSize: "13px",
                  color: "#2e6da4",
                  marginBottom: "8px",
                }}>
                  {item.countLabel}
                </div>
                {item.instagram && (
                  <a
                    href={`https://instagram.com/${item.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "13px",
                      color: "#829bb3",
                      textDecoration: "none",
                    }}
                  >
                    @{item.instagram}
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Left button */}
          {!isAtStart && (
            <button
              onClick={() => scroll("left")}
              style={{
                position: "absolute", left: "-16px", top: "45%",
                transform: "translateY(-50%)",
                background: "#fff", border: "1px solid #e5e7eb",
                borderRadius: "50%", width: "36px", height: "36px",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                zIndex: 10, fontSize: "1.1rem", color: "#374151",
              }}
              aria-label="Scroll left"
            >‹</button>
          )}

          {/* Right button */}
          {!isAtEnd && (
            <button
              onClick={() => scroll("right")}
              style={{
                position: "absolute", right: "-16px", top: "45%",
                transform: "translateY(-50%)",
                background: "#fff", border: "1px solid #e5e7eb",
                borderRadius: "50%", width: "36px", height: "36px",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                zIndex: 10, fontSize: "1.1rem", color: "#374151",
              }}
              aria-label="Scroll right"
            >›</button>
          )}
        </div>
      </div>
    </section>
  );
});

export default SparksCarousel;