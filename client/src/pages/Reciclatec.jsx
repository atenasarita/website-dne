import React, { useState, useCallback } from 'react';
import styles from './styles/Reciclatec.module.css';
import { Lightbulb, TriangleAlert } from 'lucide-react';
import Countdown from '../components/Countdown'


const data = {
  organico: {
    nombre: 'Orgánico', color: '#52B788', pantone: 'Verde · Pantone 360C',
    desc: 'Materiales de origen natural que pueden compostarse o biodegradarse',
    si: ['Cáscaras de frutas y verduras','Restos de comida cocinada','Huesos de pollo y pescado','Bolsitas de té de papel','Restos de café molido y filtros','Semillas y cáscaras de nueces','Flores y plantas naturales secas','Servilletas de papel usadas con comida','Platos y vasos compostables certificados','Palillos de madera naturales'],
    no: ['Papel plastificado o aluminado','Unicel o poliestireno','Servilletas con químicos o pintura','Aceites o grasas en grandes cantidades','Medicamentos o residuos peligrosos'],
    tip: 'Si traes residuos de cafetería, asegúrate de drenar líquidos antes de depositar.',
    especiales: [
      { area: 'Cafeterías y comedores', items: ['Restos de comida de los comedores Campus','Frutas enteras no consumidas','Tortillas y pan no consumido'] },
      { area: 'Laboratorios de biología', items: ['Medios de cultivo no peligrosos (verificar con asesor)','Material vegetal no contaminado con químicos'], warn: 'Residuos con reactivos peligrosos siguen el Protocolo de Residuos Peligrosos del campus.' }
    ]
  },
  inorganico: {
    nombre: 'Inorgánico', color: '#888780', pantone: 'Gris · Pantone 877C',
    desc: 'Materiales mixtos o contaminados que no pueden separarse fácilmente',
    si: ['Bolsas de frituras y botanas metalizadas','Envolturas de dulces y chocolates','Bolsas de plástico con residuos de comida','Desechables de unicel (vasos, platos, charolas)','Desechables biodegradables contaminados','Envases Tetrapack con residuos','Papel aluminio usado','Popotes y agitadores plásticos','Etiquetas autoadheribles'],
    no: ['Materiales reciclables limpios','Residuos peligrosos'],
    tip: 'Si el envase Tetrapack está limpio y aplastado puede ir en Papel. Si tiene residuos, va aquí.',
    especiales: [
      { area: 'Residencias y estudiantes', items: ['Empaques de ramen y fideos instantáneos','Envases/bolsas de salsas y aderezos','Empaque interior de cereales (bolsa metalizada)'] },
      { area: 'Eventos y grupos estudiantiles', items: ['Vasos de plástico rígido con residuos','Platos de unicel o plástico usados','Servilletas contaminadas'] }
    ]
  },
  papel: {
    nombre: 'Papel y Cartón', color: '#FFB703', pantone: 'Amarillo · Pantone 141C',
    desc: 'Deben estar limpios, secos y sin elementos metálicos o plásticos adheridos',
    si: ['Papel de impresora (sin grapas ni clips)','Cartón corrugado doblado y aplastado','Cajas de cereal, pasta, zapatos','Periódicos y revistas','Libros viejos sin pasta de PVC','Carpetas de cartón sin argollas metálicas','Papel de regalo sin laminado metálico','Sobres de papel','Rollo interior del papel de baño','Cajas de pizza limpias','Bolsas de papel kraft','Tetrapack limpio y aplastado'],
    no: ['Papel mojado o manchado con grasa','Papel con grapas, clips o espirales','Papel plastificado o laminado','Papel carbón o térmico (tickets)','Pañuelos, servilletas o papel sanitario'],
    tip: 'Retira grapas y clips antes de traer. Los metales van en otro contenedor.',
    especiales: [
      { area: 'Estudiantes y aulas', items: ['Apuntes e impresiones viejas (remover grapas)','Libretas de papel (separar espiral metálica)','Carpetas de cartón de trabajos entregados'] },
      { area: 'Arquitectura — maquetas', items: ['Cartoncillo blanco y gris','Cartón corrugado de maquetas volumétricas','Planos impresos en papel sin laminado','Modelos de papel doblado'], tip: 'Maquetas con PVA o silicón sí se reciclan. Las que tienen pintura en aerosol en capas gruesas, separa el cartón.' },
      { area: 'Diseño gráfico', items: ['Pruebas de impresión en papel couché sin plastificar','Portfolios en papel bond','Bocetos y storyboards','Revistas y referencias visuales ya utilizadas'] },
      { area: 'Administración y oficinas', items: ['Documentos impresos (facturas, reportes)','Sobres de mensajería de papel','Cajas de archivo muertas'] }
    ]
  },
  plastico: {
    nombre: 'Plástico', color: '#023E8A', pantone: 'Azul · Pantone 541C',
    desc: 'Depositar limpio y preferentemente aplastado para optimizar el espacio',
    si: ['Botellas PET de agua, refresco, jugos (limpias)','Envases PET de aceite, salsas (enjuagados)','Frascos de crema, shampoo (vacíos y enjuagados)','Bolsas de plástico limpias','Película plástica de embalaje','Recipientes de yogurt, mantequilla (enjuagados)','Tapas y corcholatas de plástico','Popotes y cubiertos de plástico limpios','Frascos de medicamento vacíos'],
    no: ['Bolsas de frituras o aluminizadas (van en inorgánico)','Plástico de burbujas con adhesivo','Plásticos con residuos peligrosos','Jeringas o material médico punzocortante','Unicel — va en inorgánico'],
    tip: 'Aplasta las botellas antes de traerlas. Quita las tapas y deposítalas por separado, también son reciclables.',
    especiales: [
      { area: 'Arquitectura — maquetas', items: ['Acetato y papel vegetal limpios','Tubo PVC sin pegamento','Envases de pegamento vacíos','Láminas de polietileno o polipropileno'], warn: 'El foam board (foamy) no aplica, va en inorgánico. El unicel tampoco.' },
      { area: 'Artes visuales y diseño', items: ['Frascos de acrílico vacíos','Botes de gesso vacíos','Tubos de pintura al óleo de plástico vacíos','Carpetas plásticas transparentes sin argollas'], warn: 'Botes de acrílico con residuo húmedo NO van. Deja secar completamente primero.' },
      { area: 'Laboratorios (no peligrosos)', items: ['Envases de reactivos vacíos y enjuagados','Botellas de agua destilada','Recipientes de polipropileno sin contaminación'], warn: 'TODO material con reactivos peligrosos sigue el Protocolo de Residuos Peligrosos del campus.' },
      { area: 'Medicina y salud', items: ['Envases de suero fisiológico vacíos','Frascos de vitaminas o suplementos vacíos'], warn: 'Agujas, jeringas y material punzocortante NUNCA en contenedores de reciclaje. Usar contenedores RPBI.' }
    ]
  },
  metal: {
    nombre: 'Metal y Aluminio', color: '#00B4D8', pantone: 'Cyan · Pantone Process Cyan C',
    desc: 'El aluminio es uno de los materiales con mayor valor de reciclaje',
    si: ['Latas de refresco, cerveza, agua mineral','Latas de atún, sardinas, frijoles (acero)','Tapas metálicas de frascos de vidrio','Corcholatas de refresco','Papel aluminio limpio','Clips, grapas y aretes de papelería','Llaves viejas, tornillos, tuercas','Alambres metálicos sin recubrimiento'],
    no: ['Metal con residuos peligrosos (pinturas, solventes, ácidos)','Baterías y pilas — tienen contenedor especial','Metal radiactivo o contaminado'],
    tip: 'Aplasta las latas para ahorrar espacio. Enjuágalas antes de traer.',
    especiales: [
      { area: 'Arquitectura — maquetas', items: ['Alambre de calibre fino (cobre, aluminio)','Láminas de latón o aluminio delgadas','Pernos y tornillos pequeños'] },
      { area: 'Ingeniería mecánica y eléctrica', items: ['Recortes de lámina de aluminio o acero','Cables de cobre sin recubrimiento','Componentes metálicos de prototipos','Piezas torneadas de aluminio sobrantes'], warn: 'Piezas con rebabas o bordes filosos deben venir envueltas en cinta o papel.' },
      { area: 'Artes — escultura', items: ['Recortes de lámina usados en escultura','Alambre de esculturas terminadas','Latas de barniz o aerosol vacías'], warn: 'Las latas de aerosol deben estar completamente vacías (sin presión) antes de depositarlas.' }
    ]
  }
};

const allItems = [];
Object.entries(data).forEach(([id, cat]) => {
  cat.si.forEach(item => allItems.push({ item, cat: cat.nombre, color: cat.color, type: 'si' }));
  cat.no.forEach(item => allItems.push({ item, cat: cat.nombre, color: cat.color, type: 'no' }));
  cat.especiales?.forEach(e =>
    e.items.forEach(item => allItems.push({ item: `${item} (${e.area})`, cat: cat.nombre, color: cat.color, type: 'especial' }))
  );
});

const typeLabel = { si: 'Sí va', no: 'No va', especial: 'Caso especial' };

function TipBanner({ text }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: '10px',
      borderRadius: '8px', padding: '0.75rem 1rem', marginTop: '0.75rem'
    }}>
    <Lightbulb />
      <span style={{ fontSize: '13px', color: 'var(--color-text-info)', lineHeight: 1.5 }}>{text}</span>
    </div>
  );
}

function WarnBanner({ text }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: '10px',
      background: 'var(--color-background-warning)',
      border: '0.5px solid var(--color-border-warning)',
      borderRadius: '8px', padding: '0.75rem 1rem', marginTop: '0.75rem'
    }}>
      <span style={{ fontSize: '14px', flexShrink: 0 }}>
        <TriangleAlert />
      </span>
      <span style={{ fontSize: '13px', color: '#e15b3b', lineHeight: 1.5 }}>{text}</span>
    </div>
  );
}

function ItemRow({ text, type }) {
  const isYes = type === 'si';
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: '8px',
      padding: '6px 0',
      borderBottom: '0.5px solid var(--color-border-tertiary)',
      fontSize: '13px', color: 'var(--color-text-secondary)'
    }}>
      <span style={{ color: isYes ? '#52B788' : '#E24B4A', flexShrink: 0, marginTop: '2px', fontSize: '12px' }}>
        {isYes ? '✓' : '✗'}
      </span>
      <span>{text}</span>
    </div>
  );
}

function CategoryPanel({ catId }) {
  const c = data[catId];
  return (
    <div>
      {/* Category header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        background: 'var(--color-background-secondary)',
        border: '0.5px solid var(--color-border-tertiary)',
        borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '1rem'
      }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: c.color, flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--color-text-primary)' }}>{c.nombre}</div>
          <div style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>{c.pantone} · {c.desc}</div>
        </div>
      </div>

      {/* Sí / No columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '0.75rem' }}>
        {[{ label: 'Sí va aquí', dot: '#52B788', items: c.si, type: 'si' },
          { label: 'No va aquí', dot: '#E24B4A', items: c.no, type: 'no' }].map(col => (
          <div key={col.label} style={{
            background: 'var(--color-background-primary)',
            border: '0.5px solid var(--color-border-tertiary)',
            borderRadius: '12px', overflow: 'hidden'
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '0.875rem 1.25rem',
              borderBottom: '0.5px solid var(--color-border-tertiary)'
            }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: col.dot }} />
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-primary)' }}>{col.label}</span>
            </div>
            <div style={{ padding: '0.5rem 1.25rem' }}>
              {col.items.map((item, i) => (
                <ItemRow key={i} text={item} type={col.type} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {c.tip && <TipBanner text={c.tip} />}

      {/* Especiales */}
      {c.especiales?.length > 0 && (
        <div style={{ marginTop: '1.5rem' }}>
          <p style={{
            fontSize: '11px', fontWeight: 500, textTransform: 'uppercase',
            letterSpacing: '0.08em', color: 'var(--color-text-tertiary)', marginBottom: '0.75rem'
          }}>
            Casos especiales de la comunidad Tec
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
            {c.especiales.map((e, i) => (
              <div key={i} style={{
                background: 'var(--color-background-primary)',
                border: '0.5px solid var(--color-border-tertiary)',
                borderRadius: '10px', padding: '0.875rem 1rem'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                  {e.area}
                </div>
                {e.items.map((item, j) => (
                  <div key={j} style={{
                    fontSize: '12px', color: 'var(--color-text-secondary)',
                    lineHeight: 1.6, paddingLeft: '10px', position: 'relative'
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-text-tertiary)' }}>·</span>
                    {item}
                  </div>
                ))}
                {e.tip && <TipBanner text={e.tip} />}
                {e.warn && <WarnBanner text={e.warn} />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SearchResults({ query }) {
  const matches = allItems.filter(r => r.item.toLowerCase().includes(query.toLowerCase())).slice(0, 12);

  if (!matches.length) return (
    <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-tertiary)', fontSize: '14px' }}>
      No se encontraron resultados para "{query}"
    </div>
  );

  return (
    <div style={{
      background: 'var(--color-background-primary)',
      border: '0.5px solid var(--color-border-tertiary)',
      borderRadius: '12px', overflow: 'hidden'
    }}>
      {matches.map((r, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          padding: '0.75rem 1.25rem',
          borderBottom: i < matches.length - 1 ? '0.5px solid var(--color-border-tertiary)' : 'none',
          fontSize: '13px'
        }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: r.color, flexShrink: 0 }} />
          <span style={{ flex: 1, color: 'var(--color-text-primary)' }}>{r.item}</span>
          <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', whiteSpace: 'nowrap' }}>
            {r.cat} · {typeLabel[r.type]}
          </span>
        </div>
      ))}
    </div>
  );
}

function Reciclatec() {
  const [selectedCat, setSelectedCat] = useState('organico');
  const [query, setQuery] = useState('');

  const handleSearch = useCallback((e) => setQuery(e.target.value), []);
  const isSearching = query.trim().length > 0;

  const tabs = [
    { id: 'organico', label: 'Orgánico', color: '#52B788' },
    { id: 'inorganico', label: 'Inorgánico', color: '#888780' },
    { id: 'papel', label: 'Papel y cartón', color: '#FFB703' },
    { id: 'plastico', label: 'Plástico', color: '#023E8A' },
    { id: 'metal', label: 'Metal y aluminio', color: '#00B4D8' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className={styles.card}>
        <h1 className={styles.mainTitle}>
          Reciclatec
        </h1>
        <p className={styles.subtitle}>
          Evento anual de reciclaje y separación de residuos del Tec de Monterrey
        </p>

        <Countdown />

        <p style={{
          fontFamily: 'Space Mono',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.55)',
          marginTop: '0.75rem',
          letterSpacing: '0.04em'
        }}>
          Miércoles 22 de abril  Pasillo DAF · Campus Monterrey
        </p>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '4rem' }}>
          <h2 className={styles.heading2} style={{ marginBottom: '1rem' }}>¿Qué es?</h2>
          <p className={styles.bodyText} style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            Reciclatec es el evento anual de reciclaje y separación de residuos de la comunidad del Tec de Monterrey Campus Monterrey. Durante este día, estudiantes, profesores y colaboradores traen sus residuos reciclables al campus para darles una disposición adecuada, reducir el impacto ambiental y fortalecer la cultura de sustentabilidad del Tec. Este año será el miércoles 22 de abril.
          </p>
          
      </div>


      {/* Search */}
      <section style={{ padding: '4rem 1.5rem'}}>

        <div style={{ maxWidth: '900px', margin: '0 auto', marginBottom: '4rem', backgroundColor: '#f2ece0', padding: '2rem', borderRadius: '15px' }}>
          <h2 className={styles.heading2}>Conoce las categorías </h2>

          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Busca un material... ej: botella PET, cartón, lata..."
            style={{
              width: '90%',
              padding: '10px 14px',
              border: '0.5px solid',
              borderRadius: '8px', fontSize: '14px',
              color: '#5e3f1d',
              outline: 'none', fontFamily: 'Space Mono',
            }}
            onFocus={e => e.target.style.borderColor = '#5e3f1d'}
            onBlur={e => e.target.style.borderColor = '#5e3f1d'}
          />

      {isSearching ? (
        <>
          <p style={{
            fontSize: '11px', fontWeight: 500, textTransform: 'uppercase',
            letterSpacing: '0.08em', color: 'var(--color-text-tertiary)', marginBottom: '0.75rem'
          }}>
            Resultados de búsqueda
          </p>
          <SearchResults query={query} />
        </>
      ) : (
        <>
          {/* Category tabs */}
          <p style={{
            fontSize: '11px', fontWeight: 500, textTransform: 'uppercase',
            letterSpacing: '0.08em', color: '#5e3f1d', marginBottom: '0.75rem'
          }}>
            Selecciona una categoría
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCat(tab.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '8px 14px',
                  border: selectedCat === tab.id ? `1.5px solid ${tab.color}` : '0.5px solid var(--color-border-tertiary)',
                  borderRadius: '20px',
                  background: 'var(--color-background-primary)',
                  cursor: 'pointer', fontSize: '13px',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'NeueEinstellung',
                  transition: 'all 0.15s'
                }}
              >
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: tab.color, flexShrink: 0 }} />
                {tab.label}
              </button>
            ))}
          </div>

          <CategoryPanel catId={selectedCat} />
        </>
      )}
      </div>

      </section>
    </div>

  );
}

export default Reciclatec;