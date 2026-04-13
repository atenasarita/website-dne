import React from 'react';
import { ExternalLink, Leaf, Target, Users, TrendingUp } from 'lucide-react';
import styles from './styles/RutaAzul.module.css';

function RutaAzul() {
  return (
    <div>
      {/* Header - styled like Inicio */}
      <section
        className={styles.card}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className={styles.mainTitle}>
            Ruta Azul
          </h1>
          <p className={styles.subtitle}>
            Plan de Sostenibilidad y Cambio Climático al 2025
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '4rem 1.5rem', background: 'var(--color-backgroun-tertiary)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{marginBottom: '6rem'
            }}
          >
            <h2 className={styles.heading2} style={{ marginBottom: '1rem' }}>
              ¿Qué es Ruta Azul?
            </h2>
            <p className={styles.bodyText} style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
              Ruta Azul es el nombre del Plan de Sostenibilidad y Cambio Climático al 2025 del Tecnológico de Monterrey.
              Es el camino que se ha trazado para lograr un futuro sostenible y convertirnos en
              una institución modelo de sostenibilidad.
            </p>
            <p className={styles.bodyText} style={{ color: 'var(--color-text-secondary)' }}>
              El rumbo es claro: trabajamos juntos para crear un impacto positivo en nuestra comunidad
              y en el medio ambiente.
            </p>

          </div>

        </div>

          <section style={{
          background: '#f5eee2',
          padding: '2rem', 
          borderRadius: '12px',
          maxWidth: '1000px',
          margin: '0 auto',
          }}> 

          <h2 className={styles.heading2} style={{ marginBottom: '1rem' }}>
              Conoce los ejes de acción estratégica de Ruta Azul
          </h2>

          {/* Key Pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem',
              borderRadius: '12px',
              padding: '1.5rem',
              marginTop: '1rem'
            }}
          >
            <PillarCard
              icon={<Leaf size={28} />}
              title="Sostenibilidad"
              description="Promovemos prácticas sostenibles en todas nuestras actividades"
              color="var(--color-text-success)"
            />
            <PillarCard
              icon={<Target size={28} />}
              title="Metas claras"
              description="Objetivos específicos hacia el 2025 para reducir nuestro impacto"
              color="var(--color-text-info)"
            />
            <PillarCard
              icon={<Users size={28} />}
              title="Comunidad"
              description="Involucrar a toda la comunidad Tec en el cambio"
              color="var(--color-text-warning)"
            />
            <PillarCard
              icon={<TrendingUp size={28} />}
              title="Impacto"
              description="Medimos y mejoramos continuamente nuestros resultados"
              color="var(--color-text-danger)"
            />
            <PillarCard
              icon={<TrendingUp size={28} />}
              title="Impacto"
              description="Medimos y mejoramos continuamente nuestros resultados"
              color="var(--color-text-danger)"
            />
            <PillarCard
              icon={<TrendingUp size={28} />}
              title="Impacto"
              description="Medimos y mejoramos continuamente nuestros resultados"
              color="var(--color-text-danger)"
            />
          </div>

          </section>

          {/* CTA - use linkButton style from Inicio.module.css */}
          <div
            style={{
              background: 'var(--color-background-info)',
              borderRadius: 'var(--border-radius-lg)',
              padding: '2rem',
              textAlign: 'center',
              border: '0.5px solid var(--color-border-info)',
            }}
          >
            <h3 className={styles.heading3} style={{ marginBottom: '1rem', color: 'var(--color-text-info)' }}>
              Conoce más sobre Ruta Azul
            </h3>
            <p className={styles.bodyText} style={{ color: 'var(--color-text-info)', marginBottom: '1.5rem' }}>
              Visita el sitio oficial para conocer a detalle nuestras iniciativas y compromisos
              de sostenibilidad.
            </p>
            <a
              href="https://tec.mx/es/florecimiento-humano/desarrollo-sostenible/ruta-azul?srsltid=AfmBOoqjtj5iMyqJZitSh96kh6US4m0vuHVtK3A8XoUk5R0ztILQbEcE"
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
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Visitar sitio oficial
              <ExternalLink size={16} />
            </a>
          </div>
      </section>
    </div>
  );
}

function PillarCard({ icon, title, description, color, delay = "0s", isVisible = true }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={isVisible ? styles.cardSlideUp : styles.hiddenDown}
      style={{
        background: '#1c3a5e',
        borderRadius: '12px',
        padding: '1.5rem',
        border: '0.5px solid var(--color-border-tertiary)',
        display: 'block',
        animationDelay: delay,

        // ✨ animación hover
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isHovered
          ? '0 12px 24px rgba(28, 58, 94, 0.25)'
          : '0 2px 8px rgba(0,0,0,0.1)',

        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* ICON */}
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '10px',
          background: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',

          transform: isHovered ? 'rotate(10deg) scale(1.1)' : 'rotate(0) scale(1)',
          transition: 'transform 0.3s ease',
        }}
      >
        {icon}
      </div>

      {/* TITLE */}
      <h3
        style={{
          fontSize: '20px',
          fontWeight: 500,
          marginBottom: '0.5rem',
          color: '#5ca3d9',
          fontFamily: 'NeueEinstellung',

          transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
          transition: 'transform 0.3s ease',
        }}
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        style={{
          fontFamily: 'Space Mono',
          fontSize: '14px',
          color: '#f8f8f5',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default RutaAzul;