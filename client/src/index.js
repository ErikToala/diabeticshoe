import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './pages/navbar'
import Home from './pages/home'
import Patients from './pages/patients';
import Registro from './pages/register'
import Team from './pages/team'



ReactDOM.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/colaboradores" element={<Team></Team>} />
      <Route path="/historial-clinico" element={<Patients></Patients>} />
      <Route path="/historial-clinico/nuevo-paciente" element={<Registro></Registro>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


