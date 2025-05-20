import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TaskCards.css';

function TaskCards() {
  const navigate = useNavigate();

  return (
    <div className="task-cards">
      <div className="task-card" onClick={() => navigate('/planificacion')}>
        <div className="task-text">
          Click para acceder a tu planificación semanal.
        </div>
      </div>
      <div className="task-card" onClick={() => navigate('/add-task')}>
        <div className="task-text">
          Click para agregar tareas.
        </div>
      </div>
      <div className="task-card" onClick={() => navigate('/cambiar-estado')}>
        <div className="task-text">
          Click para cambiar el estado de tus tareas.
        </div>
      </div>
      <div className="task-card" onClick={() => alert('Próximamente...')}>
        <div className="task-text">
          Un bonus, no todo en la vida es estudio.
        </div>
      </div>
    </div>
  );
}

export default TaskCards;
