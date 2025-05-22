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
      
          const data = await response.json(); // ⚠️ siempre leer el body
      
          if (response.ok) {
            setMensaje(`✅ ${data.mensaje || 'Registro exitoso'}`);
          } else {
            // Este log ayuda a depurar casos como este
            console.error('Respuesta de error:', data);
            setMensaje(`❌ ${data.mensaje || 'Error en el registro'}`);
          }
          
        } catch (error) {
          console.error(error);
          setMensaje('❌ Error de conexión con el servidor');
        }
      };
      
      
      
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md">
          <div className="flex justify-between mb-4">
            <img src={poliLogo} alt="Politécnico Logo" className="h-12 w-auto" />
            <img src={towerLogo} alt="Tower Solutions Logo" className="h-12 w-auto" />
          </div>
          <h2 className="text-center text-2xl font-bold text-gray-900">Crea tu cuenta</h2>
          
          <form onSubmit={handleSubmit}>
            <label className="block mb-2 text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg mb-4"
              required
            />
  
            <label className="block mb-2 text-sm font-medium text-gray-700">Apellido</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg mb-4"
              required
            />
  
            <label className="block mb-2 text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg mb-4"
              required
            />
  
            <label className="block mb-2 text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg mb-6"
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
  
          <p className="mt-2 text-center text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="font-medium text-yellow-700 hover:text-yellow-900">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    );
  }
  
  export default Register;