import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Opcional: si usas React Router para navegar de vuelta al login

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate('/login');
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    setIsSubmitting(true);
  };

  useEffect(() => {
        if (isSubmitting) {
            const dataToSend = {
                "username" : username,
                "password" : password
            }

            console.log(JSON.stringify(dataToSend));

            fetch('http://localhost:3000/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(dataToSend) // converts javascript object to json string
            })
            .then(response => response.json())
            .then(data => {
                if (data.responseCode == 'SP_000') {
                  setIsLoggedIn(true); 
                }
                console.log(`Respuesta del servidor: ${data.responseText}`);
            })
            .catch(error => console.log(`Error al enviar la solicitud: ${error}`))
        }
    });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Registrarse
        </h1>

        <form onSubmit={handleRegister} >
          <div className="mb-4">
            <label htmlFor="username" className="block text-lg text-gray-600 mb-2">
              Nombre de usuario:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 text-gray-700 bg-gray-200 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-gray-600 mb-2">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-gray-700 bg-gray-200 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-lg text-gray-600 mb-2">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-gray-700 bg-gray-200 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-lg text-gray-600 mb-2">
              Confirmar contraseña:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 text-gray-700 bg-gray-200 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300"
          >
            Registrarse
          </button>
        </form>

        <Link 
          to="/login"
          className="block w-full px-4 py-3 my-3 text-lg font-semibold text-purple-600 bg-neutral-100 border-purple-600 border-2 rounded-full hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300"
        >
          Iniciar sesión
        </Link>

        <div className="flex justify-end mt-6 text-xs text-gray-500">
          <a href="#" className="hover:underline">
            Ayuda
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;