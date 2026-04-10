import React from 'react';
import { Calendar } from 'lucide-react';

const dneEvents = [
  { fecha: "Miércoles 8 de abril", evento: "LOOP x Vive Bailando" },
  { fecha: "Domingo 12 de abril", evento: "LOOP x Casa Monarca" },
  { fecha: "Martes 14 de abril", evento: "Conversatorio de estudiantes para estudiantes" },
  { fecha: "Lunes 20 de abril", evento: "Conversatorio con Expertos" },
  { fecha: "Miércoles 22 de abril", evento: "Reciclatec" }
];

function DNE() {
  return (
    <div>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #00B4D8 0%, #52B788 100%)',
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
            DNE MTY 2026
          </h1>
          <p style={{
            fontSize: '18px',
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Día Nacional de Embajadores - Calendario de eventos
          </p>
        </div>
      </section>

      {/* Events List */}
      <section style={{
        padding: '4rem 1.5rem',
        background: 'var(--color-background-tertiary)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gap: '1rem'
          }}>
            {dneEvents.map((event, index) => (
              <div key={index} style={{
                background: 'var(--color-background-primary)',
                borderRadius: 'var(--border-radius-lg)',
                padding: '1.25rem',
                border: '0.5px solid var(--color-border-tertiary)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(4px)';
                e.currentTarget.style.borderColor = 'var(--color-border-info)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.borderColor = 'var(--color-border-tertiary)';
              }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--border-radius-md)',
                  background: 'var(--color-background-info)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Calendar size={24} color="var(--color-text-info)" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '4px'
                  }}>
                    {event.fecha}
                  </div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'var(--color-text-primary)'
                  }}>
                    {event.evento}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section style={{
        padding: '4rem 1.5rem',
        background: 'var(--color-background-primary)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 500,
            marginBottom: '1rem'
          }}>
            Un impacto que trasciende
          </h2>
          <p style={{
            fontSize: '17px',
            lineHeight: 1.7,
            color: 'var(--color-text-secondary)'
          }}>
            Cada evento del DNE MTY 2026 está diseñado para crear concientización sobre la correcta
            separación de basura y promover la economía circular. Únete a nosotros en este viaje
            hacia un futuro más sostenible.
          </p>
        </div>
      </section>
    </div>
  );
}

export default DNE;
