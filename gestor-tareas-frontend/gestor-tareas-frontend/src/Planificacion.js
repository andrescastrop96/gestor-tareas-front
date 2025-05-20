import React from 'react';
import { useNavigate } from 'react-router-dom';
import AlertBar from '../components/AlertBar';
import Header from '../components/Header';
import '../styles/Planificacion.css';

function Planificacion() {
  const navigate = useNavigate();

  const weeklyPlan = [
    { day: 'Lunes', tasks: ['Matemáticas - Capítulo 1', 'Proyecto Java'] },
    { day: 'Martes', tasks: ['Investigación COVID-19', 'Revisión metodología'] },
    { day: 'Miércoles', tasks: ['Objetivos personales', 'Práctica React'] },
    { day: 'Jueves', tasks: ['Estudio Spring Boot', 'Reunión equipo'] },
    { day: 'Viernes', tasks: ['Entrega proyecto', 'Evaluación final'] },
    { day: 'Sábado', tasks: ['Descanso', 'Lectura'] },
    { day: 'Domingo', tasks: ['Planificación próxima semana'] },
  ];

  return (
    <div className="planificacion-container">
      <AlertBar />
      <Header />
      <div className="planificacion-content">
        <h2 className="section-title">Planificación Semanal</h2>
        <div className="planificacion-grid">
          {weeklyPlan.map(({ day, tasks }) => (
            <div key={day} className="day-card">
              <h3>{day}</h3>
              <ul>
                {tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button className="back-button" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

export default Planificacion;
