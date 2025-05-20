import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import '../styles/SuggestionsList.css';

function SuggestionsList() {
  const { addTask } = useTaskContext();
  
  const suggestions = [
    'Devolver los libros a la biblioteca',
    'Repasar materias prácticas',
    'Empezar mi proyecto Final',
    'Ir al gimnasio (6pm)'
  ];

  return (
    <div className="suggestions-container">
      <h3 className="suggestions-title">Sugerencias ...</h3>
      <ol className="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <li 
            key={index} 
            className="suggestion-item"
            onClick={() => addTask(suggestion)}
          >
            <span className="suggestion-text">{suggestion}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SuggestionsList;
