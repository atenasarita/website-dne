import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import styles from './styles/DNE.module.css'

const dneEvents = [
  { 
    fecha: "Miércoles 8 de abril", 
    evento: "LOOP x Vive Bailando",
    descripcion: "Un evento en el que conoces más sobre la importancia de la separación de basura y el reciclaje en nuestro campus, mientras disfrutas de una clase de baile al ritmo de música latina.",
    lugar: "Jardin de Experiencias - Parque Central"
  },
  { 
    fecha: "Domingo 12 de abril", 
    evento: "LOOP x Casa Monarca",
    descripcion: "Apoyo social a comunidades migrantes.",
    lugar: "Casa Monarca"
  },
  { 
    fecha: "Viernes 17 de abril", 
    evento: "Stand DNE MTY 2026",
    descripcion: "¿Tienes 5 minutos en tu break? Ven a conocer el significado del DNE y cómo puedes contribuir a un futuro más sostenible.",
    lugar: "Aulas 4 - De 3PM a 5PM"
  },
  { 
    fecha: "Lunes 20 de abril", 
    evento: "Panel Sustentabilidad",
    descripcion: " Panel para hablar sobre (tema pendiente), generar conversación y que el público haga preguntas mientras los expertos las contestan. ¡Abierto a toda la comunidad Tec!",
    lugar: "Auditorio de biblioteca - 4PM a 6PM"
  },
  { 
    fecha: "Miércoles 22 de abril", 
    evento: "Reciclatec",
    descripcion: "Nuestro mayor evento, en el que podrás llevar tus residuos reciclables y electrónicos para que sean procesados de manera responsable. Además, habrá activaciones, música y comida para conocer más sobre el Día de la Tierra.",
    lugar: "Pasillo DAF - 9AM a 5PM"
  }
];


function DNE() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState({
    events: false,
  });

  const [showHero, setShowHero] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  

  React.useEffect(() => {
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

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowHero(true);
    }, 100);
  }, []);

  return (

    
    <div style={{ backgroundColor: '#e8e6e0'}}>
      <section className={styles.card} style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            position: 'relative', 
            zIndex: 10,
            transform: `translateY(${scrollY * 0.3}px)`
        }}>       
            <h1
              className={`${styles.mainTitle} ${
                showHero ? styles.fadeIn : styles.hidden
              }`}
              style={{ animationDelay: '0.1s' }}
            >
              DNE MTY 2026
            </h1>
            <p
              className={`${styles.subtitle} ${
                showHero ? styles.fadeIn : styles.hidden
              }`}
              style={{ animationDelay: '0.3s' }}
              >
              Día Nacional de Embajadores - Calendario de eventos
            </p>
        </div>
      </section>

      <section style={{
        padding: '4rem 1.5rem',
      }} data-section="events" >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gap: '1rem'
          }}>
            {dneEvents.map((event, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                    key={index}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={isVisible.events ? styles.fadeInUp : styles.hidden}
                    style={{
                      animationDelay: `${index * 0.1}s`,

                      background: '#f8f8f5',
                      borderRadius: '12px',
                      padding: '1.25rem',
                      border: '1px solid',
                      borderColor: isOpen ? '#c69a6d' : '#e8e6e0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      cursor: 'pointer',

                      transform: isOpen ? 'scale(1.01)' : 'scale(1)',
                      boxShadow: isOpen 
                        ? '0 8px 25px rgba(0,0,0,0.08)' 
                        : '0 2px 6px rgba(0,0,0,0.04)',

                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
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

                    {/* Flechita */}
                    <div style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    fontSize: '18px',
                    color: '#6b7280'
                  }}>
                    ⌄
                  </div>
                  </div>

                  {/* Contenido expandido */}
                  <div style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}>
                    <div style={{
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        paddingTop: '0.5rem',
                        fontSize: '14px',
                        color: '#4b5563',

                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
                        transition: 'all 0.25s ease 0.1s'
                      }}>
                        <p style={{ margin: 0 }}>{event.descripcion}</p>
                        <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#6b7280' }}>
                          {event.lugar}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section 
        className={styles.sectionWide}
      >        
      <div style={{
            background: '#f5eee2',
            borderRadius: '12px',
            padding: '1.5rem',
            marginTop: '1rem',
            border: 'none', 
            maxWidth: '800px', 
            margin: '0 auto', 
            textAlign: 'center' }}>

          <h2 className={styles.heading2}>
            Un impacto que trasciende
          </h2>
          <p className={styles.secondaryText}>
            Cada evento del DNE MTY 2026 está diseñado para crear concientización sobre la correcta
            separación de basura y promover la economía circular. Únete a nosotros en este viaje
            hacia un futuro más sostenible.
          </p>
        </div>
      </section>
    </div>
  );
}

<style>
{`
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`}
</style>

export default DNE;
