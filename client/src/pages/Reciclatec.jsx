import React, { useState } from 'react';
import { Recycle, CheckCircle, XCircle } from 'lucide-react';

const categorias = [
  {
    id: 'organico',
    nombre: 'Orgánico',
    color: '#52B788',
    pantone: 'Pantone 360C',
    descripcion: 'Cáscaras, restos de comida, semillas, compostables',
    si: [
      'Cáscaras de frutas y verduras',
      'Restos de comida cocinada',
      'Huesos de pollo y pescado',
      'Bolsitas de té de papel',
      'Restos de café molido y filtros',
      'Semillas y cáscaras de nueces',
      'Flores y plantas naturales secas',
      'Servilletas de papel usadas con comida',
      'Platos y vasos compostables certificados',
      'Palillos de madera naturales'
    ],
    no: [
      'Papel plastificado o aluminado',
      'Unicel o poliestireno',
      'Servilletas con químicos o pintura',
      'Aceites o grasas en grandes cantidades',
      'Medicamentos o residuos peligrosos'
    ]
  },
  {
    id: 'inorganico',
    nombre: 'Inorgánico',
    color: '#6C757D',
    pantone: 'Pantone 877C',
    descripcion: 'Envolturas, unicel, Tetrapack',
    si: [
      'Bolsas de frituras y botanas metalizadas',
      'Envolturas de dulces y chocolates',
      'Bolsas de plástico con residuos de comida',
      'Desechables de unicel (vasos, platos, charolas)',
      'Desechables biodegradables contaminados',
      'Envases Tetrapack con residuos',
      'Papel aluminio usado',
      'Popotes y agitadores plásticos',
      'Etiquetas autoadheribles'
    ],
    no: [
      'Materiales reciclables limpios',
      'Residuos peligrosos'
    ]
  },
  {
    id: 'papel',
    nombre: 'Papel y Cartón',
    color: '#FFB703',
    pantone: 'Pantone 141C',
    descripcion: 'Papel, cartón, periódico, revistas',
    si: [
      'Papel de impresora (sin grapas ni clips)',
      'Cartón corrugado doblado y aplastado',
      'Cajas de cereal, pasta, zapatos',
      'Periódicos y revistas',
      'Libros viejos sin pasta de PVC',
      'Carpetas de cartón sin argollas metálicas',
      'Papel de regalo sin laminado metálico',
      'Sobres de papel',
      'Rollo interior del papel de baño',
      'Cajas de pizza limpias',
      'Bolsas de papel kraft',
      'Envases Tetrapack limpios y aplastados'
    ],
    no: [
      'Papel mojado o manchado con grasa',
      'Papel con grapas, clips o espirales',
      'Papel plastificado o laminado',
      'Papel carbón o térmico',
      'Pañuelos, servilletas o papel sanitario'
    ]
  },
  {
    id: 'plastico',
    nombre: 'Plástico',
    color: '#023E8A',
    pantone: 'Pantone 541C',
    descripcion: 'Botellas PET, envases plásticos',
    si: [
      'Botellas PET de agua, refresco, jugos (limpias)',
      'Envases PET de aceite, salsas (enjuagados)',
      'Frascos de plástico de crema, shampoo (vacíos)',
      'Bolsas de plástico limpias',
      'Película plástica de embalaje',
      'Recipientes de yogurt, mantequilla (enjuagados)',
      'Tapas y corcholatas de plástico',
      'Popotes y cubiertos de plástico limpios',
      'Juguetes pequeños de plástico rígido',
      'Frascos de medicamento vacíos'
    ],
    no: [
      'Bolsas de frituras o aluminizadas',
      'Plástico de burbujas con adhesivo',
      'Plásticos con residuos peligrosos',
      'Jeringas o material médico',
      'Unicel (va en inorgánico)'
    ]
  },
  {
    id: 'metal',
    nombre: 'Metal y Aluminio',
    color: '#00B4D8',
    pantone: 'Pantone Process Cyan C',
    descripcion: 'Latas, tapas metálicas',
    si: [
      'Latas de refresco, cerveza, agua mineral',
      'Latas de atún, sardinas, frijoles, vegetales',
      'Tapas metálicas de frascos de vidrio',
      'Corcholatas de refresco',
      'Papel aluminio limpio',
      'Clips, grapas y aretes de papelería',
      'Llaves viejas, tornillos, tuercas',
      'Alambres metálicos sin recubrimiento'
    ],
    no: [
      'Metal con residuos peligrosos',
      'Baterías y pilas (contenedor especial)',
      'Metal radiactivo o contaminado'
    ]
  }
];

function Reciclatec() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #52B788 0%, #00B4D8 100%)',
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
            <Recycle size={36} />
          </div>
          <h1 style={{
            fontSize: '40px',
            fontWeight: 500,
            marginBottom: '1rem'
          }}>
            Reciclatec
          </h1>
          <p style={{
            fontSize: '18px',
            opacity: 0.95,
            lineHeight: 1.7,
            marginBottom: '1rem'
          }}>
            Evento anual de reciclaje y separación de residuos
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            borderRadius: 'var(--border-radius-lg)',
            padding: '1rem',
            display: 'inline-block'
          }}>
            <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '4px' }}>
              Este año será el
            </div>
            <div style={{ fontSize: '22px', fontWeight: 500 }}>
              Miércoles 22 de abril
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section style={{
        padding: '3rem 1.5rem',
        background: 'var(--color-background-primary)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontSize: '17px',
            lineHeight: 1.7,
            color: 'var(--color-text-secondary)'
          }}>
            Durante Reciclatec, estudiantes, profesores y colaboradores traen sus residuos reciclables
            al campus para darles una disposición adecuada, reducir el impacto ambiental y fortalecer
            la cultura de sustentabilidad del Tec.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section style={{
        padding: '3rem 1.5rem',
        background: 'var(--color-background-tertiary)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 500,
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}>
            Categorías de reciclaje
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'var(--color-text-secondary)',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            Selecciona una categoría para ver qué sí y qué no va en cada contenedor
          </p>

          {/* Color Legend */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(selectedCategory?.id === cat.id ? null : cat)}
                style={{
                  background: selectedCategory?.id === cat.id ? cat.color : 'var(--color-background-primary)',
                  color: selectedCategory?.id === cat.id ? 'white' : 'var(--color-text-primary)',
                  border: selectedCategory?.id === cat.id ? 'none' : '0.5px solid var(--color-border-tertiary)',
                  borderRadius: 'var(--border-radius-lg)',
                  padding: '1rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory?.id !== cat.id) {
                    e.currentTarget.style.borderColor = cat.color;
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory?.id !== cat.id) {
                    e.currentTarget.style.borderColor = 'var(--color-border-tertiary)';
                  }
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: selectedCategory?.id === cat.id ? 'rgba(255,255,255,0.2)' : cat.color,
                  marginBottom: '8px'
                }} />
                <div style={{ fontWeight: 500, marginBottom: '4px', fontSize: '16px' }}>
                  {cat.nombre}
                </div>
                <div style={{
                  fontSize: '12px',
                  opacity: selectedCategory?.id === cat.id ? 0.9 : 0.7
                }}>
                  {cat.pantone}
                </div>
              </button>
            ))}
          </div>

          {/* Selected Category Details */}
          {selectedCategory && (
            <div style={{
              background: 'var(--color-background-primary)',
              borderRadius: 'var(--border-radius-lg)',
              padding: '2rem',
              border: `2px solid ${selectedCategory.color}`,
              animation: 'fadeIn 0.3s ease-in'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: selectedCategory.color
                }} />
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: 500, margin: 0 }}>
                    {selectedCategory.nombre}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: '4px 0 0' }}>
                    {selectedCategory.descripcion}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '1rem'
                  }}>
                    <CheckCircle size={20} color="var(--color-text-success)" />
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: 500,
                      margin: 0,
                      color: 'var(--color-text-success)'
                    }}>
                      ¿Qué SÍ va aquí?
                    </h4>
                  </div>
                  <ul style={{
                    fontSize: '14px',
                    lineHeight: 1.8,
                    color: 'var(--color-text-secondary)',
                    paddingLeft: '1.25rem',
                    margin: 0
                  }}>
                    {selectedCategory.si.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '1rem'
                  }}>
                    <XCircle size={20} color="var(--color-text-danger)" />
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: 500,
                      margin: 0,
                      color: 'var(--color-text-danger)'
                    }}>
                      ¿Qué NO va aquí?
                    </h4>
                  </div>
                  <ul style={{
                    fontSize: '14px',
                    lineHeight: 1.8,
                    color: 'var(--color-text-secondary)',
                    paddingLeft: '1.25rem',
                    margin: 0
                  }}>
                    {selectedCategory.no.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {!selectedCategory && (
            <div style={{
              textAlign: 'center',
              padding: '3rem 1.5rem',
              color: 'var(--color-text-secondary)'
            }}>
              <Recycle size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
              <p style={{ fontSize: '16px' }}>
                Selecciona una categoría para ver los detalles
              </p>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Reciclatec;