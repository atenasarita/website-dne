import React, { useState, useEffect } from 'react';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const target = new Date('2026-04-22T09:00:00');

    const calc = () => {
      const diff = target - new Date();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'días',     value: timeLeft.days },
    { label: 'horas',    value: timeLeft.hours },
    { label: 'minutos',  value: timeLeft.minutes },
    { label: 'segundos', value: timeLeft.seconds },
  ];

  return (
    <div style={{
      display: 'inline-flex', gap: '8px', marginTop: '1.5rem',
      flexWrap: 'wrap', justifyContent: 'center'
    }}>
      {units.map(({ label, value }, i) => (
        <>
          <div key={label} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            background: 'rgba(255,255,255,0.1)',
            border: '0.5px solid rgba(255,255,255,0.18)',
            borderRadius: '12px',
            padding: '10px 16px',
            minWidth: '64px'
          }}>
            <span style={{
              fontFamily: 'Space Mono', fontSize: '28px', fontWeight: 500,
              color: '#e8f5e9', lineHeight: 1
            }}>
              {String(value ?? 0).padStart(2, '0')}
            </span>
            <span style={{
              fontSize: '11px', color: 'rgba(255,255,255,0.55)',
              marginTop: '4px', letterSpacing: '0.06em'
            }}>
              {label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span key={`sep-${i}`} style={{
              fontFamily: 'Space Mono', fontSize: '24px',
              color: 'rgba(255,255,255,0.35)', alignSelf: 'center', marginTop: '-8px'
            }}>:</span>
          )}
        </>
      ))}
    </div>
  );
}

export default Countdown;