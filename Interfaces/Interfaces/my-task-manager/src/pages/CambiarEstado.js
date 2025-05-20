import React from 'react';
import { useNavigate } from 'react-router-dom';
import AlertBar from '../components/AlertBar';
import Header from '../components/Header';
import { useTaskContext } from '../context/TaskContext';
import '../styles/CambiarEstado.css';

function CambiarEstado() {
  const navigate = useNavigate();
  const { tasks, toggleTask } = useTaskContext();

  return (
    <div className="cambiar-estado-container">
      <AlertBar />
      <Header />
      <div className="cambiar-estado-content">
        <h2 className="section-title">Cambiar Estado de tus Tareas</h2>
        <div className="status-columns">
          <div className="column">
            <h3>Pendientes</h3>
            {tasks.filter(t => !t.completed).length === 0 && <p className="empty-msg">No hay tareas pendientes.</p>}
            {tasks.filter(t => !t.completed).map(task => (
              <div key={task.id} className="task-item">
                <input 
                  type="checkbox" 
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span>{task.text}</span>
              </div>
            ))}
          </div>
          <div className="column">
            <h3>Completadas</h3>
            {tasks.filter(t => t.completed).length === 0 && <p className="empty-msg">No hay tareas completadas.</p>}
            {tasks.filter(t => t.completed).map(task => (
              <div key={task.id} className="task-item completed">
                <input 
                  type="checkbox" 
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span>{task.text}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="back-button" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

export default CambiarEstado;
