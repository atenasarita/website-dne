import React, { useState, useEffect} from 'react';
import { BookOpen, Library, GraduationCap, ExternalLink, PlayCircle } from 'lucide-react';
import styles from './styles/Aprende.module.css'

function MapaReciclatec() {
  return (
    <div style={{
      borderRadius: '15px',
      border: '0.5px solid var(--color-border-tertiary)',
      overflow: 'hidden',
      marginBottom: '6rem',
    }}>
    
      <div style={{
        padding: '1.25rem 1.5rem',
        borderBottom: '0.5px solid var(--color-border-tertiary)'
      }}>
        <h2 className={styles.heading2}>
          Donde dejar tus residuos alrededor del campus
        </h2>
      </div>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1UW4MbluNCQSj-VJBhREE5F_ZlWEVVa0&ll=25.652851064367894,-100.288378&z=16"
        width="100%"
        height="480"
        style={{ display: 'block', border: 'none' }}
        title="Mapa de puntos de recolección Reciclatec"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}

function ResourceCard({ title, description, icon, href }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const inner = (
    <div
      style={{
        background: '#c69a6d',
        borderRadius: '15px',
        padding: '1.5rem',
        transition: 'all 0.2s',
        height: '100%',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: href ? 'pointer' : 'default',
        textDecoration: 'none',
        display: 'block'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        width: '48px', height: '48px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#1d2535',
        marginBottom: '1rem'
      }}>
        {icon}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 500, margin: 0, color: '#1d2535', fontFamily: 'NeueEinstellung' }}>
          {title}
        </h3>
        {href && <ExternalLink size={13} color="#1d2535" />}
      </div>
      <p style={{ fontSize: '14px', color: '#1d2535', lineHeight: 1.6, margin: 0, fontFamily: 'Space Mono' }}>
        {description}
      </p>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {inner}
      </a>
    );
  }
  return inner;
}

function Aprende() {
    const [isVisible, setIsVisible] = useState({
      hero: false,
      intro: false,
      mapa: false,
      resources: false
    });
  
    const [scrollY, setScrollY] = useState(0);
    
  
    useEffect(() => {
      // HERO ON LOAD
      setTimeout(() => {
        setIsVisible(prev => ({ ...prev, hero: true }));
      }, 100);
  
      // SCROLL OBSERVER
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute('data-section');
            setIsVisible(prev => ({ ...prev, [section]: true }));
          }
        });
      }, { threshold: 0.1 });
  
      document.querySelectorAll('[data-section]').forEach(el => observer.observe(el));
  
      // Parallax scroll effect
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      // Mouse move effect for hero
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div>
      {/* Hero */}
      <section className={styles.card} data-section="hero" style={{ position: 'relative', overflow: 'hidden' }} >
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          position: 'relative', 
          zIndex: 10,
          transform: `translateY(${scrollY * 0.3}px)`
        }}>
          <h1 className={`${styles.mainTitle} ${ isVisible.hero ? styles.fadeIn : styles.hidden }`} style={{ animationDelay: '0.1s' }}>            
              Aprende
          </h1>
          <p className={`${styles.subtitle} ${ isVisible.hero ? styles.fadeIn : styles.hidden }`}>
            No tienes que esperar a Reciclatec para educarte y ser parte del cambio!
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Intro banner */}
          <div style={{
            background: '#e8e6e0',
            borderRadius: '15px',
            padding: '1.5rem 2rem',
            marginBottom: '3rem',
            textAlign: 'center'
          }} className={`${ isVisible.hero ? styles.slideInLeft : styles.hidden }`}>
            <p className={styles.heading3}>
              ¿Sabías que al ser estudiante del Tec de Monterrey tienes acceso a miles de recursos
              académicos relacionados con sustentabilidad?
            </p>
          </div>

          {/* Mapa */}
          <div  data-section='mapa' className={`${ isVisible.hero ? styles.slideInLeft : styles.hidden }`} style={{ animationDelay: '0.2s' }}>
            <MapaReciclatec />
          </div>

          <div data-section='resources'className={`${isVisible.resources ? styles.fadeInUp : styles.hidden}`}> 
          <p className={styles.heading2}>
            Recursos disponibles
          </p>

          {/* Resource cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1rem',
            marginBottom: '6rem'
          }}>

            <ResourceCard
              title="Taylor & Francis Online"
              description="Plataforma con millones de artículos académicos, revistas científicas y libros revisados por pares sobre casi todas las áreas del conocimiento."
              icon={<Library />}
              href="https://www.tandfonline.com"
              badge="300k+ artículos"
            />

            <ResourceCard
              title="Biblioteca Digital Tec"
              description="Accede a todos los recursos académicos del Tec de Monterrey disponibles para la comunidad estudiantil, incluyendo bases de datos, ebooks y más."
              icon={<BookOpen />}
              href="https://biblioteca.tec.mx"
              badge="Acceso con matrícula"
            />

            <ResourceCard
              title="Guías y tutoriales"
              description="Aprende a usar las herramientas de investigación académica disponibles en el campus para sacarles el mayor provecho."
              icon={<GraduationCap />}
              badge="Próximamente"
              extra={
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '0.75rem 1rem',
                  background: 'rgba(32,59,93,0.06)',
                  borderRadius: '10px',
                  border: '0.5px dashed rgba(32,59,93,0.2)'
                }}>
                  <PlayCircle size={18} color="#829bb3" />
                  <span style={{ fontSize: '13px', color: 'var(--color-text-tertiary)' }}>
                    Video tutorial disponible próximamente
                  </span>
                </div>
              }
            />

          </div>

          </div>

          {/* CTA */}
          <div style={{
            background: '#e8e6e0',
            borderRadius: '15px',
            padding: '2.5rem 2rem',
            textAlign: 'center'
          }}>
            <h2 className={styles.heading2}>
              Aprende y comparte
            </h2>
            <p className={styles.bodyText}>
              La educación es clave para crear un impacto positivo. Utiliza estos recursos para
              aprender más sobre sustentabilidad y comparte el conocimiento con tu comunidad.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Aprende;