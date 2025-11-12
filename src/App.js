import './App.css';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';


import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Ruta para manejar URLs no encontradas (404) */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
