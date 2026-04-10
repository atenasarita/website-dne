import React from 'react';
import { BookOpen, Library, GraduationCap } from 'lucide-react';

function Aprende() {
  return (
    <div>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #FFB703 0%, #52B788 100%)',
        color: 'white',
        padding: '4rem 1.5rem 3rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            marginBottom: '1rem'
          }}>
            <GraduationCap size={36} />
          </div>
          <h1 style={{
            fontSize: '40px',
            fontWeight: 500,
            marginBottom: '1rem'
          }}>
            Aprende
          </h1>
          <p style={{
            fontSize: '18px',
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Recursos académicos sobre sustentabilidad
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{
        padding: '4rem 1.5rem',
        background: 'var(--color-background-tertiary)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Intro */}
          <div style={{
            background: 'var(--color-background-info)',
            borderRadius: 'var(--border-radius-lg)',
            padding: '2rem',
            marginBottom: '2rem',
            border: '0.5px solid var(--color-border-info)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'var(--color-text-info)',
              margin: 0
            }}>
              ¿Sabías que al ser estudiante del Tec de Monterrey tienes acceso a miles de recursos
              académicos relacionados con sustentabilidad?
            </p>
          </div>

          {/* Taylor & Francis */}
          <div style={{
            background: 'var(--color-background-primary)',
            borderRadius: 'var(--border-radius-lg)',
            padding: '2rem',
            border: '0.5px solid var(--color-border-tertiary)',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--border-radius-md)',
                background: 'var(--color-background-info)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Library size={24} color="var(--color-text-info)" />
              </div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 500,
                margin: 0
              }}>
                Taylor & Francis Online
              </h2>
            </div>
            
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
              marginBottom: '1rem'
            }}>
              Taylor & Francis Online es una plataforma digital que ofrece acceso a una vasta
              biblioteca de millones de artículos académicos, revistas científicas y libros de
              investigación revisados por pares, abarcando casi todas las áreas del conocimiento humano.
            </p>
            
            <div style={{
              background: 'var(--color-background-secondary)',
              borderRadius: 'var(--border-radius-md)',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '0.75rem'
              }}>
                <BookOpen size={20} color="var(--color-text-info)" />
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  margin: 0,
                  color: 'var(--color-text-info)'
                }}>
                  Más de 300 mil artículos disponibles
                </h3>
              </div>
              <p style={{
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                margin: 0
              }}>
                Artículos relacionados con el medio ambiente y la sustentabilidad desde la
                Biblioteca Digital del Tec
              </p>
            </div>

            <div style={{
              background: 'var(--color-background-secondary)',
              borderRadius: 'var(--border-radius-md)',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <BookOpen size={48} color="var(--color-text-info)" style={{ marginBottom: '12px' }} />
              <p style={{
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
                margin: 0
              }}>
                Video tutorial disponible próximamente
              </p>
            </div>
          </div>

          {/* Additional Resources */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem'
          }}>
            <ResourceCard
              title="Biblioteca Digital"
              description="Accede a millones de recursos académicos del Tec"
              icon={<Library size={24} />}
            />
            <ResourceCard
              title="Artículos científicos"
              description="Investigaciones revisadas por pares sobre sustentabilidad"
              icon={<BookOpen size={24} />}
            />
            <ResourceCard
              title="Guías y tutoriales"
              description="Aprende a usar las herramientas de investigación"
              icon={<GraduationCap size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
            Aprende y comparte
          </h2>
          <p style={{
            fontSize: '17px',
            lineHeight: 1.7,
            color: 'var(--color-text-secondary)',
            marginBottom: '2rem'
          }}>
            La educación es clave para crear un impacto positivo. Utiliza estos recursos para
            aprender más sobre sustentabilidad y comparte el conocimiento con tu comunidad.
          </p>
        </div>
      </section>
    </div>
  );
}

function ResourceCard({ title, description, icon }) {
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
      e.currentTarget.style.borderColor = 'var(--color-border-info)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
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
        color: 'var(--color-text-info)',
        marginBottom: '1rem'
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '16px',
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

export default Aprende;