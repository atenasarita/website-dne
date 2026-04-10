import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import logo from '../../../src/Logo-LOOP-azul.png'; 

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/quienes-somos', label: '¿Quiénes somos?' },
    { path: '/dne', label: 'DNE MTY 2026' },
    { path: '/ruta-azul', label: 'Ruta Azul' },
    { path: '/reciclatec', label: 'Reciclatec' },
    { path: '/aprende', label: 'Aprende' }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <Link to="/" className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${
                isActive(item.path) ? styles.active : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={styles.mobileBtn}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`${styles.mobileLink} ${
                  isActive(item.path) ? styles.mobileActive : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;