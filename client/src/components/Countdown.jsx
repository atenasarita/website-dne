import React, { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

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
    <div className={styles.countdownContainer}>
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
            <span className={styles.countdownValue}>
              {String(value ?? 0).padStart(2, '0')}
            </span>
            <span className={styles.countdownLabel}>
              {label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className={styles.countdownSeparator}>:</span>
          )}
        </>
      ))}
    </div>
  );
}

export default Countdown;