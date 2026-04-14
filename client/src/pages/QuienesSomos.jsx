import React, { useEffect, useState } from 'react';
import SparksCarousel from '../components/SparksCarousel';
import FiltroEscuela from '../components/FiltroEscuela';

import styles from './styles/QuienesSomos.module.css';
import Embajadores from '../../src/foto-embajadores.jpeg';

const embajadores = [
  { nombre: "Adrian Marcelo Sanchez Elizondo", carrera: "MO", instagram: "adrianm.embajadorestec", escuela: "Escuela de Medicina y Ciencias de la Salud"},
  { nombre: "Ana Camila Norzagaray García", carrera: "LTP-LRI", instagram: "anacam.embajadorestec", escuela: "Escuela de Ciencias Sociales y Gobierno" },
  { nombre: "Ana María González Gómez", carrera: "LIT", instagram: "anama.embajadorestec", escuela: "Escuela de Negocios"},
  { nombre: "Andrés Martínez Medina", carrera: "BGB", instagram: "andresm.embajadorestec", escuela: "Escuela de Negocios" },
  { nombre: "Astrid Valenzuela Sandoval", carrera: "IQ", instagram: "astridv.embajadorestec", escuela: "Escuela de Ingeniería y Ciencias" },
  { nombre: "Aurelio Guillermo Valdés Méndez", carrera: "LTP-LEC", instagram: "guillermo.embajadorestec", escuela: "Escuela de Ciencias Sociales y Gobierno" },
  { nombre: "Atenas Lucía Arita García", carrera: "ITC", instagram: "atenas.embajadorestec", escuela: "Escuela de Ingeniería y Ciencias"},
  { nombre: "Camila Victoria Romero Chávez", carrera: "LEI", instagram: "camii.embajadorestec", escuela: "Escuela de Humanidades y Educación"},
  { nombre: "Daniel Robles Pineda", carrera: "MC", instagram: "danielr.embajadorestec", escuela: "Escuela de Medicina y Ciencias de la Salud" },
  { nombre: "Daniela Guadalupe Valdez Gutiérrez", carrera: "LEM", instagram: "danyvaldez.embajadorestec", escuela: "Escuela de Negocios" },
  { nombre: "Eduardo Eugenio Garza Escamilla", carrera: "LAET", instagram: "laloo.embajadorestec", escuela: "Escuela de Negocios" },
  { nombre: "Enmanuel Rivas Barinas", carrera: "ITC", instagram: "enmanuel.embajadorestec", escuela: "Escuela de Ingeniería y Ciencias" },
  { nombre: "Francisco Javier Acosta Noriega", carrera: "LPS", instagram: "paco.embajadorestec", escuela: "Escuela de Medicina y Ciencias de la Salud" },
  { nombre: "Iztac Rubén Olvera Cámara", carrera: "LEI", instagram: "rubenn.embajadorestec", escuela: "Escuela de Humanidades y Educación"},
  { nombre: "Johemi García Ortega", carrera: "IMD", instagram: "jojo.embajadorestec", escuela: "Escuela de Ingeniería y Ciencias" },
  { nombre: "Jorge Andrés del Carpio Paz", carrera: "LBC", instagram: "jorgedc.embajadorestec", escuela: "Escuela de Medicina y Ciencias de la Salud" },
  { nombre: "José Eduardo López Arzamendi", carrera: "LEC", instagram: "josel.embajadorestec", escuela: "Escuela de Ciencias Sociales y Gobierno" },
  { nombre: "Julio Jose Arregui Escobal", carrera: "IDS", instagram: "julioa.embajadorestec", escuela: "Escuela de Ingeniería y Ciencias" },
  { nombre: "Karol Marissa Piñeiro Galván", carrera: "LPS", instagram: "karol.embajadorestec", escuela: "Escuela de Medicina y Ciencias de la Salud" },
  { nombre: "Melina Guajardo Gaytán", carrera: "ARQ", instagram: "melina.embajadorestec", escuela: "Escuela de Arquitectura, Arte y Diseño"},
  { nombre: "Mariana Cabrera Ramirez", carrera: "IID", instagram: "cabrera.embajadorestec", escuela: "Escuela de Ingeniería y Ciencias" },
  { nombre: "Mara Estefanía Torres García", carrera: "IQ", instagram: "mara.embajadorestec", escuela: "Escuela de Ingeniería y Ciencias" },
  { nombre: "Michelle Contreras Escalante", carrera: "LED-LEC", instagram: "michelle.ce.embajadorestec", escuela: "Escuela de Ciencias Sociales y Gobierno" },
  { nombre: "Mililani Guadalupe Varela Lugardo", carrera: "IFI", instagram: "mili.embajadorestec", escuela: "Escuela de Ingeniería y Ciencias" },
  { nombre: "Nancy Lorena Marroquín Rodríguez", carrera: "LIT", instagram: "nancy.embajadorestec", escuela: "Escuela de Negocios" },
  { nombre: "Samuel David Garrido Escobar", carrera: "IM", instagram: "samuelg.embajadorestec", escuela: "Escuela de Ingeniería y Ciencias" }
];

function QuienesSomos() {
  const [filtroEscuela, setFiltroEscuela] = useState("Todas");
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [isVisible, setIsVisible] = useState({
    hero: false,
    proyecto: false,
    imagen: false,
    embajadores: false,
  });

  const escuelas = ["Todas", ...new Set(embajadores.map(e => e.escuela))];

  const embajadoresFiltrados =
    filtroEscuela === "Todas"
      ? embajadores
      : embajadores.filter(e => e.escuela === filtroEscuela);

  useEffect(() => {
    // HERO
    setTimeout(() => {
      setIsVisible(prev => ({ ...prev, hero: true }));
    }, 100);

    // OBSERVER
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section');
          setIsVisible(prev => ({ ...prev, [section]: true }));
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('[data-section]').forEach(el => observer.observe(el));

    const handleScroll = () => setScrollY(window.scrollY);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className={styles.card} style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ transform: `translateY(${scrollY * 0.3}px)`, willChange: 'transform' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

            <h1
              className={`${styles.mainTitle} ${isVisible.hero ? styles.fadeInUp : styles.hidden}`}
              style={{ animationDelay: '0.1s' }}
              // removed the inline transform — it was fighting fadeInUp
            >
              ¿Quiénes somos?
            </h1>

            <p
              className={`${styles.subtitle} ${isVisible.hero ? styles.fadeInUp : styles.hidden}`}
              style={{ animationDelay: '0.3s' }}
            >
              Hola! Somos los Embajadores Tec del Campus Monterrey de la onceava generación. Estamos muy emocionados de compartir contigo un poco más sobre nosotros y nuestro proyecto del Día Nacional de Embajadores 2026.
            </p>
          </div>
        </div>
      </section>

      {/* PROYECTO */}
      <section style={{ padding: '1rem 2rem' }} data-section="proyecto">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <h2
              className={`${styles.heading2} ${isVisible.proyecto ? styles.slideInLeft : styles.hiddenLeft}`}
              style={{ animationDelay: '0.1s' }}>
            Embajadores Tec x Ruta Azul: Loop Tec
          </h2>

          <p  
            className={`${styles.bodyText} ${isVisible.proyecto ? styles.slideInLeft : styles.hiddenLeftn}`}
            style={{ animationDelay: '0.2s' }}
          >
            Este año estamos colaborando con Ruta Azul para darle difusión a RECICLATEC:
            un evento de reciclaje que se llevará a cabo el 22 de abril, donde podrás
            entregar tus residuos para que reciban el tratamiento adecuado.
            <br /><br />
            Nuestra misión es concientizar a toda la comunidad Tec sobre la importancia
            de reciclar y cómo esto beneficia a nuestro planeta. Cuidar el medio ambiente
            es algo que nos apasiona profundamente, y esperamos que ese mensaje se traduzca
            en una gran participación. ¡Te esperamos el 22 de abril!
          </p>

        </div>
      </section>

      {/* IMAGEN */}
      <section data-section="imagen" style={{ padding: '0 1.5rem 4rem' }}>
        <div
          className={`${styles.imageContainer} ${isVisible.imagen ? styles.scaleIn : styles.hiddenScale}`}
          style={{ animationDelay: '0.2s' }}
        >
          <img src={Embajadores} alt="Embajadores" className={styles.image} />
        </div>
      </section>

      {/* CARRUSEL */}
      <section
        style={{ padding: '3rem 1.5rem', backgroundColor: '#f5eee2' }}
        data-section="embajadores"
      >
        <div
          className={`${isVisible.embajadores ? styles.fadeInUp : styles.hidden}`}
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            animationDelay: '0.2s'
          }}
        >

          <div
            className={isVisible.embajadores ? styles.fadeInUp : styles.hidden}
            style={{
              textAlign: 'center',
              marginBottom: '1.5rem',
              animationDelay: '0.3s'
            }}
          >

          <div
            className={isVisible.embajadores ? styles.fadeInUp : styles.hidden}
            style={{ animationDelay: '0.4s' }}
          >
            <SparksCarousel
            title="Conoce a los Embajadores!"
            subtitle="Filtra para conocer a los embajadores de cada escuela"
            headerExtra={
              <FiltroEscuela
                escuelas={escuelas}
                value={filtroEscuela}
                onChange={setFiltroEscuela}
              />
            }
            items={embajadoresFiltrados.map((e, i) => ({
              id: i,
              title: e.nombre,
              count: i + 1,
              countLabel: e.carrera,
              instagram: e.instagram,
            }))}
          />
          </div>

        </div>
        </div>
      </section>
    </div>
  );
}

export default QuienesSomos;