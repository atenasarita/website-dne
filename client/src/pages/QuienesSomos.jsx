import React from 'react';
import { ExternalLink } from 'lucide-react';

const embajadores = [
  { nombre: "Ana Camila Norzagaray García", carrera: "LTP-LRI", instagram: "anacam.embajadorestec" },
  { nombre: "Ana María González Gómez", carrera: "LIT", instagram: "anama.embajadorestec" },
  { nombre: "Jorge Andrés del Carpio Paz", carrera: "LBC", instagram: "jorgedc.embajadorestec" },
  { nombre: "Samuel David Garrido Escobar", carrera: "IM", instagram: "samuelg.embajadorestec" },
  { nombre: "Camila Victoria Romero Chávez", carrera: "LEI", instagram: "camii.embajadorestec" },
  { nombre: "José Eduardo López Arzamendi", carrera: "LEC", instagram: "josel.embajadorestec" },
  { nombre: "Julio Jose Arregui Escobal", carrera: "IDS", instagram: "julioa.embajadorestec" },
  { nombre: "Atenas Lucía Arita García", carrera: "ITC", instagram: "atenas.embajadorestec" },
  { nombre: "Michelle Contreras Escalante", carrera: "LED-LEC", instagram: "michelle.ce.embajadorestec" },
  { nombre: "Francisco Javier Acosta Noriega", carrera: "LPS", instagram: "paco.embajadorestec" },
  { nombre: "Enmanuel Rivas Barinas", carrera: "ITC", instagram: "enmanuel.embajadorestec" },
  { nombre: "Astrid Valenzuela Sandoval", carrera: "IQ", instagram: "astridv.embajadorestec" },
  { nombre: "Nancy Lorena Marroquín Rodríguez", carrera: "LIT", instagram: "nancy.embajadorestec" },
  { nombre: "Daniela Guadalupe Valdez Gutiérrez", carrera: "LEM", instagram: "danyvaldez.embajadorestec" },
  { nombre: "Johemi García Ortega", carrera: "IMD", instagram: "jojo.embajadorestec" },
  { nombre: "Mililani Guadalupe Varela Lugardo", carrera: "IFI", instagram: "mili.embajadorestec" },
  { nombre: "Adrian Marcelo Sanchez Elizondo", carrera: "MO", instagram: "adrianm.embajadorestec" },
  { nombre: "Eduardo Eugenio Garza Escamilla", carrera: "LAET", instagram: "laloo.embajadorestec" },
  { nombre: "Andrés Martínez Medina", carrera: "BGB", instagram: "andresm.embajadorestec" },
  { nombre: "Daniel Robles Pineda", carrera: "MC", instagram: "danielr.embajadorestec" },
  { nombre: "Karol Marissa Piñeiro Galván", carrera: "LPS", instagram: "karol.embajadorestec" },
  { nombre: "Aurelio Guillermo Valdés Méndez", carrera: "LTP-LEC", instagram: "guillermo.embajadorestec" },
  { nombre: "Melina Guajardo Gaytán", carrera: "ARQ", instagram: "melina.embajadorestec" },
  { nombre: "Mariana Cabrera Ramirez", carrera: "IID", instagram: "cabrera.embajadorestec" },
  { nombre: "Iztac Rubén Olvera Cámara", carrera: "LEI", instagram: "rubenn.embajadorestec" },
  { nombre: "Mara Estefanía Torres García", carrera: "IQ", instagram: "mara.embajadorestec" }
];

function QuienesSomos() {
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
            ¿Quiénes somos?
          </h1>
          <p style={{
            fontSize: '18px',
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Somos los Embajadores del Tec Campus Monterrey de la onceava generación
          </p>
        </div>
      </section>

      {/* Embajadores Grid */}
      <section style={{
        padding: '4rem 1.5rem',
        background: 'var(--color-background-tertiary)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem'
          }}>
            {embajadores.map((embajador, index) => (
              <div key={index} style={{
                background: 'var(--color-background-primary)',
                borderRadius: 'var(--border-radius-lg)',
                padding: '1rem',
                border: '0.5px solid var(--color-border-tertiary)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  fontWeight: 500,
                  fontSize: '14px',
                  marginBottom: '4px',
                  color: 'var(--color-text-primary)'
                }}>
                  {embajador.nombre}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: 'var(--color-text-secondary)',
                  marginBottom: '8px'
                }}>
                  {embajador.carrera}
                </div>
                <a
                  href={`https://instagram.com/${embajador.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '13px',
                    color: 'var(--color-text-info)',
                    textDecoration: 'none'
                  }}
                >
                  @{embajador.instagram}
                  <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuienesSomos;