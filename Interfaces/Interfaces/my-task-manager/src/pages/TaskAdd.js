import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertBar from '../components/AlertBar';
import Header from '../components/Header';
import SuggestionsList from '../components/SuggestionsList';
import { useTaskContext } from '../context/TaskContext';
import '../styles/TaskAdd.css';

function TaskAdd() {
  const [newTask, setNewTask] = useState('');
  const { addTask, lastTaskDate, tasks } = useTaskContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="task-add-container">
      <AlertBar />
      <Header />
      <div className="task-add-content">
        <h2 className="section-title">Agregar Nueva Tarea</h2>
        <form onSubmit={handleSubmit} className="task-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Escribe una nueva tarea..."
            className="task-input"
          />
          <button className="add-task-button" type="submit">
            + Agregar
          </button>
        </form>
        <SuggestionsList />
        <div className="recent-tasks-section">
          <h3>Tareas recientes</h3>
          <ul>
            {tasks.slice(-5).reverse().map(task => (
              <li key={task.id}>{task.text}</li>
            ))}
          </ul>
        </div>
        <div className="last-task-info">
          Última Tarea Agregada: {lastTaskDate?.toLocaleDateString() || 'Ninguna'}
        </div>
        <button className="back-button" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

export default TaskAdd;
