import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import QuienesSomos from './pages/QuienesSomos';
import DNE from './pages/DNE';
import RutaAzul from './pages/RutaAzul';
import Reciclatec from './pages/Reciclatec';
import Aprende from './pages/Aprende';

function App() {
  return (
    <Router>
      <div style={{ 
        minHeight: '100vh',
        background: '#f8f8f5',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/dne" element={<DNE />} />
            <Route path="/ruta-azul" element={<RutaAzul />} />
            <Route path="/reciclatec" element={<Reciclatec />} />
            <Route path="/aprende" element={<Aprende />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;