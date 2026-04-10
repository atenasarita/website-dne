import React from 'react';
import { ExternalLink } from 'lucide-react';
import styles from './styles/QuienesSomos.module.css'
import Embajadores from '../foto-embajadores.jpeg'

const embajadores = [
  { nombre: "Adrian Marcelo Sanchez Elizondo", carrera: "MO", instagram: "adrianm.embajadorestec" },
  { nombre: "Ana Camila Norzagaray García", carrera: "LTP-LRI", instagram: "anacam.embajadorestec" },
  { nombre: "Ana María González Gómez", carrera: "LIT", instagram: "anama.embajadorestec" },
  { nombre: "Andrés Martínez Medina", carrera: "BGB", instagram: "andresm.embajadorestec" },
  { nombre: "Astrid Valenzuela Sandoval", carrera: "IQ", instagram: "astridv.embajadorestec" },
  { nombre: "Aurelio Guillermo Valdés Méndez", carrera: "LTP-LEC", instagram: "guillermo.embajadorestec" },
  { nombre: "Atenas Lucía Arita García", carrera: "ITC", instagram: "atenas.embajadorestec" },
  { nombre: "Camila Victoria Romero Chávez", carrera: "LEI", instagram: "camii.embajadorestec" },
  { nombre: "Daniel Robles Pineda", carrera: "MC", instagram: "danielr.embajadorestec" },
  { nombre: "Daniela Guadalupe Valdez Gutiérrez", carrera: "LEM", instagram: "danyvaldez.embajadorestec" },
  { nombre: "Eduardo Eugenio Garza Escamilla", carrera: "LAET", instagram: "laloo.embajadorestec" },
  { nombre: "Enmanuel Rivas Barinas", carrera: "ITC", instagram: "enmanuel.embajadorestec" },
  { nombre: "Francisco Javier Acosta Noriega", carrera: "LPS", instagram: "paco.embajadorestec" },
  { nombre: "Iztac Rubén Olvera Cámara", carrera: "LEI", instagram: "rubenn.embajadorestec" },
  { nombre: "Johemi García Ortega", carrera: "IMD", instagram: "jojo.embajadorestec" },
  { nombre: "Jorge Andrés del Carpio Paz", carrera: "LBC", instagram: "jorgedc.embajadorestec" },
  { nombre: "José Eduardo López Arzamendi", carrera: "LEC", instagram: "josel.embajadorestec" },
  { nombre: "Julio Jose Arregui Escobal", carrera: "IDS", instagram: "julioa.embajadorestec" },
  { nombre: "Karol Marissa Piñeiro Galván", carrera: "LPS", instagram: "karol.embajadorestec" },
  { nombre: "Melina Guajardo Gaytán", carrera: "ARQ", instagram: "melina.embajadorestec" },
  { nombre: "Mariana Cabrera Ramirez", carrera: "IID", instagram: "cabrera.embajadorestec" },
  { nombre: "Mara Estefanía Torres García", carrera: "IQ", instagram: "mara.embajadorestec" },
  { nombre: "Michelle Contreras Escalante", carrera: "LED-LEC", instagram: "michelle.ce.embajadorestec" },
  { nombre: "Mililani Guadalupe Varela Lugardo", carrera: "IFI", instagram: "mili.embajadorestec" },
  { nombre: "Nancy Lorena Marroquín Rodríguez", carrera: "LIT", instagram: "nancy.embajadorestec" },
  { nombre: "Samuel David Garrido Escobar", carrera: "IM", instagram: "samuelg.embajadorestec" }
];

function QuienesSomos() {
  return (
    <div>
        <section className={styles.card} style={{ position: 'relative', overflow: 'hidden' }}>
      
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className={styles.mainTitle}>
            ¿Quiénes somos?
          </h1>

           <div className={styles.imageContainer}>
        <img 
          src={Embajadores}
          alt="Onceava Generacion de Embajadores"
          className={styles.image}
        />
      </div>
          <p className= {styles.subtitle}>
            Somos los Embajadores del Tec Campus Monterrey de la onceava generación. Este año, estamos colaborando con Ruta Azul para darle difusión a RECICLATEC, para así poder juntar y darle el debido tratamiento a tus residuos. 
          </p>
        </div>

      </section>

      

      {/*  tabla de embajadores */}
      <section style={{
        padding: '4rem 1rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            {embajadores.map((embajador, index) => (
              <div key={index} style={{
                background: '#fafaf8',
                padding: '1rem',
                transition: 'all 0.2s',
                fontFamily: 'DM Sans'
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
                  color: '#203b5d',
                  fontFamily: 'NeueEinstellung'
                }}>
                  {embajador.nombre}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#2e6da4',
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
                    color: '#829bb3',
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