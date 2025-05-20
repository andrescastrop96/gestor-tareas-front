import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import politoLogo from '../assets/images/POLITECNICO1.webp';
import towerIcon from '../assets/images/tower-icon.png';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo-section">
        <img src={towerIcon} alt="Tower Solutions Logo" className="logo-tower" />
        <span className="logo-text">TOWER SOLUTIONS</span>
      </div>
      
      <div className="nav-section">
        <div className="nav-item" onClick={() => navigate('/planificacion')}>
          <p>MI</p>
          <p>PLANIFICACIÓN</p>
        </div>
        <div className="nav-item">
          <p>MIS</p>
          <p>INVESTIGACIONES</p>
        </div>
        <div className="nav-item">
          <p>MI</p>
          <p>METODOLOGIA</p>
        </div>
        <div className="nav-item" onClick={() => navigate('/cambiar-estado')}>
          <p>MIS</p>
          <p>OBJETIVOS</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
