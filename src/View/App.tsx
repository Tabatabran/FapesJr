import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaPrincipalProfessor from './ControladorTelaPrincipalProfessor';
import TelaLogin from './TelaLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TelaLogin />} />
        <Route path='/TelaPrincipalProfessor' element={<TelaPrincipalProfessor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;