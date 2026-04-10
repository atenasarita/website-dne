import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Inicio.module.css'

function Inicio() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    section1: false,
    section2: false,
    section3: false,
    cards: false
  });

  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Animate hero on mount
    setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);
    
    // Scroll observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute('data-section');
            setIsVisible(prev => ({ ...prev, [section]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => {
      observer.observe(el);
    });

    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Mouse move effect for hero
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <section className={styles.card} style={{ position: 'relative', overflow: 'hidden' }}>
        

        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          position: 'relative', 
          zIndex: 10,
          transform: `translateY(${scrollY * 0.3}px)`
        }}>
          <div 
            className={`${styles.mainTitle} ${isVisible.hero ? styles.fadeInUp : styles.hidden}`}
            style={{ 
              animationDelay: '0.1s',
              transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
            }}
          > 
            LOOP TEC 
          </div>
          <div 
            className={`${styles.subtitle} ${isVisible.hero ? styles.fadeInUp : styles.hidden}`}
            style={{ animationDelay: '0.3s' }}
          > 
            Día Nacional de Embajadores 2026 
          </div>
          <p 
            className={`${styles.subtitle} ${styles.secondary} ${isVisible.hero ? styles.fadeInUp : styles.hidden}`}
            style={{ animationDelay: '0.5s' }}
          >
            Creando concientización sobre la correcta separación de basura en colaboración con Ruta Azul
          </p>
          <Link
            to="/reciclatec" 
            className={`${styles.linkButton} ${styles.pulseButton} ${isVisible.hero ? styles.fadeInUp : styles.hidden}`}
            style={{ animationDelay: '0.7s' }}
          >
            Conoce más sobre Reciclatec
          </Link>
        </div>
      </section>

      <section 
        style={{ padding: '4rem 1.5rem' }}
        data-section="section1"
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 
              className={`${styles.heading2} ${isVisible.section1 ? styles.slideInLeft : styles.hiddenLeft}`}
            >
                ¿Qué estamos haciendo?
            </h2>
            
            <p className={`${styles.bodyText} ${isVisible.section1 ? styles.fadeIn : styles.hidden}`}
               style={{ animationDelay: '0.2s' }}
            >
              El Día Nacional de Embajadores se enfoca en crear un impacto positivo en la
              comunidad. Este año, se está haciendo una colaboración con Ruta Azul para crear
              concientización sobre la correcta separación de basura.
            </p>
            
            <h2 
              className={`${styles.heading2} ${isVisible.section1 ? styles.slideInLeft : styles.hiddenLeft}`}
              style={{ animationDelay: '0.4s' }}
            >
                ¿Para qué lo estamos haciendo?
            </h2>
            <p className={`${styles.bodyText} ${isVisible.section1 ? styles.fadeIn : styles.hidden}`}
               style={{ animationDelay: '0.6s' }}
            >
                Para que ese impacto positivo perdure. Si realmente hay una concientización, este DNE
                es simplemente el comienzo de una trascendencia.
            </p>
            
            <h2 
              className={`${styles.heading2} ${isVisible.section1 ? styles.slideInLeft : styles.hiddenLeft}`}
              style={{ animationDelay: '0.8s' }}
            >
                ¿Por qué LOOP?
            </h2>
            
            <p className={`${styles.bodyText} ${isVisible.section1 ? styles.fadeIn : styles.hidden}`}
               style={{ animationDelay: '1s' }}
            >
                Loop hace referencia a la economía circular y la vida completa de todos los materiales.
            </p>
        </div>
      </section>

      {/* Quick Links */}
      <section 
        style={{ padding: '4rem 10rem' }}
        data-section="cards"
      >
        <div style={{
            background: '#f5eee2',
            borderRadius: '12px',
            padding: '1.5rem',
            marginTop: '1rem',
            border: 'none',
          }}
          className={isVisible.cards ? styles.scaleIn : styles.hiddenScale}
        >
          <h2 className={styles.heading2} style={{textAlign: 'center', marginBottom: '2rem', color: '#1c2535'}}>
            Explora más
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            <QuickLinkCard
              title="¿Quiénes somos?"
              description="Conoce a los embajadores de la onceava generación"
              link="/quienes-somos"
              color="#0055A4"
              delay="0.1s"
              isVisible={isVisible.cards}
            />
            <QuickLinkCard
              title="DNE MTY 2026"
              description="Descubre todos los eventos del Día Nacional de Embajadores"
              link="/dne"
              color="#00B4D8"
              delay="0.3s"
              isVisible={isVisible.cards}
            />
            <QuickLinkCard
              title="Reciclatec"
              description="Aprende a separar correctamente tus residuos"
              link="/reciclatec"
              color="#52B788"
              delay="0.5s"
              isVisible={isVisible.cards}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function QuickLinkCard({ title, description, link, color, delay, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={link}
      className={isVisible ? styles.cardSlideUp : styles.hiddenDown}
      style={{
        textDecoration: 'none',
        background: '#1c3a5e',
        borderRadius: '12px',
        padding: '1.5rem',
        border: '0.5px solid var(--color-border-tertiary)',
        display: 'block',
        animationDelay: delay,
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isHovered ? '0 12px 24px rgba(28, 58, 94, 0.2)' : '0 2px 8px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={styles.cardIcon}
        style={{
          width: '48px',
          height: '48px',
          borderRadius: 'var(--border-radius-md)',
          background: color,
          marginBottom: '1rem',
          transform: isHovered ? 'rotate(10deg) scale(1.1)' : 'rotate(0) scale(1)',
          transition: 'transform 0.3s ease'
        }} 
      />
      <h3 style={{
        fontSize: '20px',
        fontWeight: 500,
        marginBottom: '0.5rem',
        color: '#5ca3d9',
        fontFamily: 'NeueEinstellung',
        transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
        transition: 'transform 0.3s ease'
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'Space Mono',
        fontSize: '14px',
        color: '#f8f8f5',
        lineHeight: 1.6,
        margin: 0
      }}>
        {description}
      </p>
    </Link>
  );
}

export default Inicio;