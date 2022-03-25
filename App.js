import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import Resetpassword from './resetpassword';
import background from './background.jpg'
import Dashboard from './dashboard';
import { Route, Routes } from 'react-router-dom';
import Register from './register';

function App() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Login />} />                                                         
        <Route path="/Reset" element={<Resetpassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
    
    </div>
  );
}

export default App;
