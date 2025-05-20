import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [lastTaskDate, setLastTaskDate] = useState(null);

  const addTask = (task) => {
    const newTask = {
      id: Date.now().toString(),
      text: task,
      completed: false,
      createdAt: new Date()
    };
    setTasks([...tasks, newTask]);
    setLastTaskDate(new Date());
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, lastTaskDate, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};
