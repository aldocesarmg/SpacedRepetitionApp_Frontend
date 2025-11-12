import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import logo from '../img/profile.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    if (isLoggedIn) {
        navigate('/dashboard');
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // avoids default behavior of browsers: send data and then reload the page
        setIsSubmitting(true); // Trigger the useEffect
        // console.log('Correo electrónico:', email);
        // console.log('Contraseña:', password);
    };

    useEffect(() => {
        if (isSubmitting) {
            const dataToSend = {
                "username" : email,
                "password" : password
            }

            console.log(JSON.stringify(dataToSend));

            fetch('http://localhost:3000/users/login', {
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
                console.log(`Respuesta del servidor: ${data.responseText}`)
            })
            .catch(error => console.log(`Error al enviar la solicitud: ${error}`))
        }
    });

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg w-full max-w-sm">
                <div className="w-24 h-24 rounded-full border-2 border-purple-500 mb-6 overflow-hidden">
                    <img src={logo} />
                </div>
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">Iniciar sesión</h1>
                
                <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div>
                    <label htmlFor="email" className="text-gray-600 block mb-2">Correo electronico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 text-gray-700 bg-gray-200 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder=""
                    />
                </div>
                <div>
                    <label htmlFor="password" className="text-gray-600 block mb-2">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 text-gray-700 bg-gray-200 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder=""
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300"
                >
                    Entrar
                </button>
                </form>

                <Link
                    to="/signup"
                    className="w-full px-4 py-3 my-3 text-lg font-semibold text-purple-600 bg-neutral-100 border-purple-600 border-2 rounded-full hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300"
                >
                    Registrarse
                </Link>

                <div className="flex justify-between w-full mt-8 text-sm">
                <a href="#" className="text-purple-600 hover:underline">Olvidé mi contraseña</a>
                <a href="#" className="text-purple-600 hover:underline">Ayuda</a>
                </div>
            </div>
        </div>
    );
};

export default Login;