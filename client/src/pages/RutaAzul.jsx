import React, { useState, useEffect } from 'react';
import { ExternalLink, BookOpen, Zap, Shield, GraduationCap, FlaskConical, Globe, ChevronDown, Flag, Target, Layers } from 'lucide-react';
import styles from './styles/RutaAzul.module.css';

const pilares = [
  {
    id: 'cultura',
    icon: <BookOpen size={28} color="#fff" />,
    title: 'Cultura',
    color: '#25c3f4',
    mision: 'Fomentar la toma de decisiones con conciencia sostenible.',
    objetivo: 'Impulsar una cultura de sostenibilidad, brindando conocimientos y promoviendo comportamientos en desarrollo sostenible y cambio climático.',
    areas: ['Conocimiento y Comunicación', 'Vivencia', 'Medición', 'Reconocimientos'],
  },
  {
    id: 'mitigacion',
    icon: <Zap size={28} color="#fff" />,
    title: 'Mitigación',
    color: '#ef525b',
    mision: 'Reducir el impacto ambiental de las operaciones de nuestra institución.',
    objetivo: 'Al 2025: Reducir huella de carbono en 50% (neutralidad al 2040), reducir 20% consumo hídrico, y 100% de instalaciones con modelo sostenible de gestión de residuos.',
    areas: ['Emisiones', 'Energía y Combustibles', 'Agua', 'Residuos'],
  },
  {
    id: 'adaptacion',
    icon: <Shield size={28} color="#fff" />,
    title: 'Adaptación',
    color: '#102e4d',
    mision: 'Minimizar los efectos del cambio climático en nuestras instalaciones y comunidades.',
    objetivo: 'Al 2025: 100% de campus con análisis de implicaciones de impacto de cambio climático y planes de mitigación basados en diagnósticos de vulnerabilidad climática.',
    areas: ['Riesgos climáticos', 'Planeación', 'Capacitación'],
  },
  {
    id: 'educacion',
    icon: <GraduationCap size={28} color="#fff" />,
    title: 'Educación',
    color: '#079272',
    mision: 'Formar líderes comprometidos a forjar un futuro sostenible.',
    objetivo: 'Integrar la educación en cambio climático y desarrollo sostenible en los próximos planes de estudio de profesional.',
    areas: ['Programas académicos', 'Capacitación', 'Evaluación y certificación académica'],
  },
  {
    id: 'investigacion',
    icon: <FlaskConical size={28} color="#fff" />,
    title: 'Investigación',
    color: '#137ec2',
    mision: 'Impulsar la investigación interdisciplinaria para brindar soluciones sistémicas a la complejidad del cambio climático.',
    objetivo: 'Al 2025: Crear un fondo para impulso de investigación interdisciplinaria en sostenibilidad y hacer de los campus living labs para la investigación.',
    areas: ['Investigación interdisciplinaria', 'Laboratorios', 'Divulgación'],
  },
  {
    id: 'vinculacion',
    icon: <Globe size={28} color="#fff" />,
    title: 'Vinculación',
    color: '#c0392b',
    mision: 'Catalizar la acción climática en la sociedad en su conjunto.',
    objetivo: 'Al 2025: Ser uno de los actores principales en la movilización hacia la acción climática en el país.',
    areas: ['Oferta educativa', 'Alianzas y redes', 'Proyectos', 'Involucramiento'],
  },
];

function PilarCard({ pilar }) {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: '#e8e6e0',
        borderRadius: '12px',
        border: '0.5px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isHovered
          ? '0 12px 28px rgba(0,0,0,0.25)'
          : '0 2px 8px rgba(0,0,0,0.15)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Card header - always visible */}
      <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '10px',
            background: pilar.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transform: isHovered ? 'rotate(8deg) scale(1.08)' : 'rotate(0) scale(1)',
            transition: 'transform 0.3s ease',
          }}>
            {pilar.icon}
          </div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 500,
            color: '#203b5d',
            fontFamily: 'NeueEinstellung',
            margin: 0,
            transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.3s ease',
          }}>
            {pilar.title}
          </h3>
        </div>
        <ChevronDown
          size={20}
          color="#829bb3"
          style={{
            flexShrink: 0,
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>

      {/* Expandable content */}
      <div style={{
        maxHeight: expanded ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{
          padding: '0 1.5rem 1.5rem',
          borderTop: '0.5px solid rgba(255,255,255,0.08)',
          paddingTop: '1.25rem',
        }}>

          {/* Misión */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.4rem' }}>
              <Flag size={13} color={pilar.color} />
              <span style={{ fontSize: '11px', fontWeight: 700, color: pilar.color, textTransform: 'uppercase', letterSpacing: '0.07em', fontFamily: 'DM Sans' }}>
                Misión
              </span>
            </div>
            <p style={{ fontFamily: 'Space Mono', fontSize: '13px', color: '#203b5d', lineHeight: 1.6, margin: 0 }}>
              {pilar.mision}
            </p>
          </div>

          {/* Objetivo */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.4rem' }}>
              <Target size={13} color={pilar.color} />
              <span style={{ fontSize: '11px', fontWeight: 700, color: pilar.color, textTransform: 'uppercase', letterSpacing: '0.07em', fontFamily: 'DM Sans' }}>
                Objetivo
              </span>
            </div>
            <p style={{ fontFamily: 'Space Mono', fontSize: '13px', color: '#203b5d', lineHeight: 1.6, margin: 0 }}>
              {pilar.objetivo}
            </p>
          </div>

          {/* Áreas */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.6rem' }}>
              <Layers size={13} color={pilar.color} />
              <span style={{ fontSize: '11px', fontWeight: 700, color: pilar.color, textTransform: 'uppercase', letterSpacing: '0.07em', fontFamily: 'DM Sans' }}>
                Áreas de trabajo
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {pilar.areas.map((area, i) => (
                <span key={i} style={{
                  fontSize: '12px',
                  fontFamily: 'DM Sans',
                  color: '#203b5d',
                  background: `${pilar.color}33`,
                  border: `0.5px solid ${pilar.color}66`,
                  borderRadius: '20px',
                  padding: '3px 10px',
                }}>
                  {area}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function RutaAzul() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    intro: false,
    pilares: false,
    cta: false,
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
      <section className={styles.card} style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          position: 'relative', 
          zIndex: 10,
          transform: `translateY(${scrollY * 0.3}px)`
      }}>          
        <h1 className={`${styles.mainTitle} ${isVisible.hero ? styles.fadeIn : styles.hidden}`}>
            Ruta Azul
          </h1>
          <p className={`${styles.subtitle} ${isVisible.hero ? styles.fadeIn : styles.hidden}`} style={{ animationDelay: '0.2s' }}>
            Plan de Sostenibilidad y Cambio Climático al 2025
          </p>
        </div>
      </section>

      <section data-section="intro" style={{ padding: '4rem 10rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', marginBottom: '4rem' }} className={isVisible.intro ? styles.fadeInUp : styles.hidden}>
          <h2 className={styles.heading2} style={{ marginBottom: '1rem' }}>¿Qué es Ruta Azul?</h2>
          <p className={styles.bodyText}>
            Ruta Azul es el nombre del Plan de Sostenibilidad y Cambio Climático al 2025 del Tecnológico de Monterrey.
            Es el camino que se ha trazado para lograr un futuro sostenible y convertirnos en una institución modelo.
          </p>
          <p className={styles.bodyText} style={{ color: 'var(--color-text-secondary)' }}>
            El rumbo es claro: trabajamos juntos para crear un impacto positivo en nuestra comunidad y en el medio ambiente.
          </p>
        </div>

        {/* Pilares expandibles */}
        <section data-section="pilares"> 

        <div style={{
          background: '#829bb3',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '1000px',
          margin: '0 auto 3rem',
        }}>
          <h2 className={styles.heading2} style={{ marginBottom: '0.5rem' }}>
            Ejes de acción estratégica
          </h2>
          <p style={{ fontFamily: 'DM Sans', fontSize: '14px', color: '#1c3a5e', marginBottom: '1.5rem' }}>
            Haz clic en cada pilar para conocer más detalles.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
          }}>
            {pilares.map((pilar, index) => (
              <PilarCard
                key={pilar.id}
                pilar={pilar}
                delay={`${index * 0.1}s`}
                isVisible={isVisible.pilares}
              />
            ))}
          </div>
        </div>
        </section>

        {/* CTA */}
        <div style={{
          background: '#f5eee2',
          borderRadius: '15px',
          padding: '2rem',
          textAlign: 'center',
          border: '0.5px solid #c69a6d',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          <h3 className={styles.heading3}>
            Conoce más sobre Ruta Azul
          </h3>
          <p className={styles.bodyText}>
            Visita el sitio oficial para conocer a detalle nuestras iniciativas y compromisos de sostenibilidad.
          </p>
          <a href="https://tec.mx/es/florecimiento-humano/desarrollo-sostenible/ruta-azul"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '0.5px solid var(--color-border-info)',
              color: 'var(--color-text-info)',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Visitar sitio oficial
            <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default RutaAzul;