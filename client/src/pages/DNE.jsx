import React from 'react';
import { Calendar } from 'lucide-react';
import styles from './styles/DNE.module.css'

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

      <section className={styles.card}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className={styles.mainTitle}>
              DNE MTY 2026
            </h1>
          <p className= {styles.subtitle}>
            Día Nacional de Embajadores - Calendario de eventos
          </p>
        </div>
      </section>

      <section style={{
        padding: '4rem 1.5rem',
        backgroundColor: '#e8e6e0'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gap: '1rem'
          }}>
            {dneEvents.map((event, index) => (
              <div key={index} style={{
                background: '#f8f8f5',
                borderRadius: '12px',
                padding: '1.25rem',
                border: '1px solid',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(4px)';
                e.currentTarget.style.borderColor = '#c69a6d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.borderColor = '#e8e6e0';
              }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Calendar size={24} color="#1d3a5d" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '14px',
                    color: '#1d3a5d',
                    marginBottom: '4px',
                    fontFamily: 'NeueEinstellung'
                  }}>
                    {event.fecha}
                  </div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#696c6f'
                  }}>
                    {event.evento}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '4rem 1.5rem',
        background: 'aquamarine'
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
