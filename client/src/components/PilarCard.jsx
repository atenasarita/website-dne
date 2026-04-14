import { ChevronDown, Flag, Target, Layers } from 'lucide-react';
import React, { useState } from 'react';

function PilarCard({ pilar }) {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: '#e8e6e0',
        borderRadius: '12px',
        border: '0.5px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isHovered
          ? '0 12px 28px rgba(0,0,0,0.25)'
          : '0 2px 8px rgba(0,0,0,0.15)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Card header - always visible */}
      <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '10px',
            background: pilar.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transform: isHovered ? 'rotate(8deg) scale(1.08)' : 'rotate(0) scale(1)',
            transition: 'transform 0.3s ease',
          }}>
            {pilar.icon}
          </div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 500,
            color: '#203b5d',
            fontFamily: 'NeueEinstellung',
            margin: 0,
            transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.3s ease',
          }}>
            {pilar.title}
          </h3>
        </div>
        <ChevronDown
          size={20}
          color="#829bb3"
          style={{
            flexShrink: 0,
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>

      {/* Expandable content */}
      <div style={{
        maxHeight: expanded ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{
          padding: '0 1.5rem 1.5rem',
          borderTop: '0.5px solid rgba(255,255,255,0.08)',
          paddingTop: '1.25rem',
        }}>

          {/* Misión */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.4rem' }}>
              <Flag size={13} color={pilar.color} />
              <span style={{ fontSize: '11px', fontWeight: 700, color: pilar.color, textTransform: 'uppercase', letterSpacing: '0.07em', fontFamily: 'DM Sans' }}>
                Misión
              </span>
            </div>
            <p style={{ fontFamily: 'Space Mono', fontSize: '13px', color: '#203b5d', lineHeight: 1.6, margin: 0 }}>
              {pilar.mision}
            </p>
          </div>

          {/* Objetivo */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.4rem' }}>
              <Target size={13} color={pilar.color} />
              <span style={{ fontSize: '11px', fontWeight: 700, color: pilar.color, textTransform: 'uppercase', letterSpacing: '0.07em', fontFamily: 'DM Sans' }}>
                Objetivo
              </span>
            </div>
            <p style={{ fontFamily: 'Space Mono', fontSize: '13px', color: '#203b5d', lineHeight: 1.6, margin: 0 }}>
              {pilar.objetivo}
            </p>
          </div>

          {/* Áreas */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.6rem' }}>
              <Layers size={13} color={pilar.color} />
              <span style={{ fontSize: '11px', fontWeight: 700, color: pilar.color, textTransform: 'uppercase', letterSpacing: '0.07em', fontFamily: 'DM Sans' }}>
                Áreas de trabajo
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {pilar.areas.map((area, i) => (
                <span key={i} style={{
                  fontSize: '12px',
                  fontFamily: 'DM Sans',
                  color: '#203b5d',
                  background: `${pilar.color}33`,
                  border: `0.5px solid ${pilar.color}66`,
                  borderRadius: '20px',
                  padding: '3px 10px',
                }}>
                  {area}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PilarCard;