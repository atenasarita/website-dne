import React, { useState, useRef, useEffect } from "react";

export default function FiltroEscuela({ escuelas, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minWidth: "220px",
          height: "40px",
          padding: "0 12px",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
          background: "#fff",
          fontSize: "14px",
          color: "#111827",
          cursor: "pointer",
          outline: "none",
        }}
      >
        <span style={{ color: value ? "#111827" : "#6b7280" }}>
          {value || "Filtrar por escuela"}
        </span>

        <span
          style={{
            marginLeft: "8px",
            fontSize: "12px",
            color: "#6b7280",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          ▾
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            width: "100%",
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            zIndex: 50,
            overflow: "hidden",
            animation: "fadeIn 0.15s ease",
          }}
        >
          {/* Label */}
          <div
            style={{
              padding: "8px 12px",
              fontSize: "11px",
              color: "#6b7280",
              letterSpacing: "0.05em",
              fontWeight: 600,
              fontFamily: "Space Mono"
            }}
          >
            Escuelas
          </div>

          {/* Items */}
          {escuelas.map((escuela, i) => {
            const isSelected = value === escuela;

            return (
              <div
                key={i}
                onClick={() => {
                  onChange(escuela);
                  setOpen(false);
                }}
                style={{
                  padding: "10px 12px",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  cursor: "pointer",
                  background: isSelected ? "#f9fafb" : "transparent",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f3f4f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isSelected
                    ? "#f9fafb"
                    : "transparent";
                }}
              >
                <span>{escuela}</span>

                {isSelected && (
                  <span style={{ color: "#2563eb", fontSize: "13px" }}>
                    ✓
                  </span>
                )}
              </div>
            );
          })}

          {/* Clear */}
          <div
            onClick={() => {
              onChange("Todas");
              setOpen(false);
            }}
            style={{
              padding: "8px 12px",
              fontSize: "12px",
              color: "#6b7280",
              borderTop: "1px solid #f3f4f6",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#111827";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#6b7280";
            }}
          >
            Limpiar
          </div>
        </div>
      )}

      {/* Animación */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-4px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}