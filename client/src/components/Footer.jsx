import React from 'react';

function Footer() {
  return (
    <footer style={{
      background: 'var(--color-background-primary)',
      borderTop: '0.5px solid var(--color-border-tertiary)',
      padding: '2rem 1.5rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 500,
          marginBottom: '0.5rem'
        }}>
          LOOP
        </div>
        <p style={{
          fontSize: '14px',
          color: 'var(--color-text-secondary)',
          marginBottom: '1rem'
        }}>
          Día Nacional de Embajadores 2026
        </p>
        <p style={{
          fontSize: '13px',
          color: 'var(--color-text-tertiary)'
        }}>
          Embajadores del Tec Campus Monterrey - Onceava Generación #jointheloop
        </p>
      </div>
    </footer>
  );
}

export default Footer;