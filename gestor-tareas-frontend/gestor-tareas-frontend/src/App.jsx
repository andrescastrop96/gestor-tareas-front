import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import poliLogo from './assets/POLITECNICO1.png.webp';
import towerLogo from './assets/Tower_Solutions.png';

// Componente para la vista de Inicio de Sesión
function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#3b1f1f] to-[#2d1a1a] px-4">
      {/* Logos centrados arriba */}
      <div className="flex justify-center items-center space-x-4 mb-4">
        <img src={poliLogo} alt="Logo Politécnico" className="h-36 w-auto object-contain mt-0" />
        <img src={towerLogo} alt="Logo Tower Solutions" className="h-60 w-auto object-contain mt-12" />
      </div>

      {/* Texto de bienvenida fuera del bloque blanco */}
      <p className="text-white text-center text-lg font-semibold mb-6">
        ¡Bienvenido a <span className="text-yellow-400">Gestor de Tareas</span> desarrollado por <span className="text-yellow-400">Tower Solutions</span>!
      </p>

      {/* Tarjeta de login */}
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Iniciar Sesión</h2>
        
        <form>
          <label className="block mb-2 text-sm font-medium text-gray-700">Correo electrónico</label>
          <input 
            type="email" 
            placeholder="correo@ejemplo.com" 
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring focus:border-blue-300" 
          />
          
          <label className="block mb-2 text-sm font-medium text-gray-700">Contraseña</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            className="w-full px-4 py-2 border rounded-lg mb-6 focus:outline-none focus:ring focus:border-blue-300" 
          />
          
          <button 
            type="submit" 
            className="w-full bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-2 px-4 rounded"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          ¿No tienes cuenta? <Link to="/register" className="text-yellow-600 hover:underline">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}

// Componente para la vista de Registro
// Componente para la vista de Registro
function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8090/gestor-tareas/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setMensaje('✅ Registro exitoso');
      } else {
        setMensaje('❌ Error en el registro');
      }
    } catch (error) {
      console.error(error);
      setMensaje('❌ Error de conexión con el servidor');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#3b1f1f] to-[#2d1a1a] px-4">
      {/* Logos centrados arriba */}
      <div className="flex justify-center items-center space-x-4 mb-4">
        <img src={poliLogo} alt="Logo Politécnico" className="h-36 w-auto object-contain mt-0" />
        <img src={towerLogo} alt="Logo Tower Solutions" className="h-60 w-auto object-contain mt-12" />
      </div>

      {/* Texto de bienvenida fuera del bloque blanco */}
      <p className="text-white text-center text-lg font-semibold mb-6">
        ¡Regístrate en <span className="text-yellow-400">Gestor de Tareas</span> de <span className="text-yellow-400">Tower Solutions</span>!
      </p>

      {/* Tarjeta de registro */}
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registrarse</h2>
        
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            name="firstName"
            placeholder="Juan"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring focus:border-blue-300"
            required
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">Apellido</label>
          <input
            type="text"
            name="lastName"
            placeholder="Pérez"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring focus:border-blue-300"
            required
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">Correo electrónico</label>
          <input
            type="email"
            name="email"
            placeholder="correo@ejemplo.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring focus:border-blue-300"
            required
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg mb-6 focus:outline-none focus:ring focus:border-blue-300"
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-2 px-4 rounded"
          >
            Registrarse
          </button>

          {mensaje && (
            <p className="mt-4 text-center text-sm font-semibold text-blue-600">{mensaje}</p>
          )}
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?{' '}
          <Link to="/" className="text-yellow-600 hover:underline">Inicia Sesión</Link>
        </p>
      </div>
    </div>
  );
}


// Componente principal App
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;