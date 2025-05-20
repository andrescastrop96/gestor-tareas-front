import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Home from './pages/Home';
import TaskAdd from './pages/TaskAdd';
import Planificacion from './pages/Planificacion';
import CambiarEstado from './pages/CambiarEstado';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-task" element={<TaskAdd />} />
            <Route path="/planificacion" element={<Planificacion />} />
            <Route path="/cambiar-estado" element={<CambiarEstado />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;
