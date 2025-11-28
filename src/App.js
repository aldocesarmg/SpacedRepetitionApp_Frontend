import './App.css';
import Dashboard from './components/Dashboard.jsx';
import Home from './components/Home.jsx';
import Library from './components/Library.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import MazosConfig from './components/MazosConfig.jsx';

import { Routes, Route } from 'react-router-dom';
import Playboard from './components/Playboard.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} >
          <Route index element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/mazosConfig/:id" element={<MazosConfig />} />
          <Route path="/playboard/:id" element={<Playboard />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Ruta para manejar URLs no encontradas (404) */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
