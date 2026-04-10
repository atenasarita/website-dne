import React from 'react';
import { ExternalLink, Leaf, Target, Users, TrendingUp } from 'lucide-react';

function RutaAzul() {
  return (
    <div>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #0055A4 0%, #00B4D8 100%)',
        color: 'white',
        padding: '4rem 1.5rem 3rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '40px',
            fontWeight: 500,
            marginBottom: '1rem'
          }}>
            Ruta Azul
          </h1>
          <p style={{
            fontSize: '18px',
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Plan de Sostenibilidad y Cambio Climático al 2025
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{
        padding: '4rem 1.5rem',
        background: 'var(--color-backgroun-tertiary)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: 'var(--color-background-primary)',
            borderRadius: 'var(--border-radius-lg)',
            padding: '2rem',
            border: '0.5px solid var(--color-border-tertiary)',
            marginBottom: '2rem'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 500,
              marginBottom: '1rem'
            }}>
              ¿Qué es Ruta Azul?
            </h2>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
              marginBottom: '1rem'
            }}>
              Ruta Azul es el nombre de nuestro Plan de Sostenibilidad y Cambio Climático al 2025.
              Es el camino que hemos trazado para lograr un futuro sostenible y convertirnos en
              una institución modelo de sostenibilidad.
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)'
            }}>
              El rumbo es claro: trabajamos juntos para crear un impacto positivo en nuestra comunidad
              y en el medio ambiente.
            </p>
          </div>

          {/* Key Pillars */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
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
          </div>

          {/* CTA */}
          <div style={{
            background: 'var(--color-background-info)',
            borderRadius: 'var(--border-radius-lg)',
            padding: '2rem',
            textAlign: 'center',
            border: '0.5px solid var(--color-border-info)'
          }}>
            <h3 style={{
              fontSize: '22px',
              fontWeight: 500,
              marginBottom: '1rem',
              color: 'var(--color-text-info)'
            }}>
              Conoce más sobre Ruta Azul
            </h3>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: 'var(--color-text-info)',
              marginBottom: '1.5rem'
            }}>
              Visita el sitio oficial para conocer a detalle nuestras iniciativas y compromisos
              de sostenibilidad.
            </p>
            <a
              href="https://tec.mx/es/sostenibilidad"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'var(--color-background-primary)',
                border: '0.5px solid var(--color-border-info)',
                borderRadius: 'var(--border-radius-lg)',
                fontSize: '16px',
                fontWeight: 500,
                color: 'var(--color-text-info)',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Visitar sitio oficial
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function PillarCard({ icon, title, description, color }) {
  return (
    <div style={{
      background: 'var(--color-background-primary)',
      borderRadius: 'var(--border-radius-lg)',
      padding: '1.5rem',
      border: '0.5px solid var(--color-border-tertiary)',
      transition: 'all 0.2s'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.borderColor = color;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--color-border-tertiary)';
    }}
    >
      <div style={{ color, marginBottom: '1rem' }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '18px',
        fontWeight: 500,
        marginBottom: '0.5rem'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '14px',
        color: 'var(--color-text-secondary)',
        lineHeight: 1.6,
        margin: 0
      }}>
        {description}
      </p>
    </div>
  );
}

export default RutaAzul;