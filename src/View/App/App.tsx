import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaPrincipalProfessor from '../TelaPrincipalProfessor/TelaPrincipalProfessor';
import TelaMontagemProva from '../TelaMontagemProva/ControladorTelaMontagemProva';
import TelaEscolhaPersonagem from '../TelaEscolhaPersonagem/TelaEscolhaPersonagem';
import TelaInicialJogo from '../TelaInicialJogo/TelaInicialJogo';
import TelaLogin from '../TelaLogin/TelaLogin';
import TelaMapa from '../TelaMapa/TelaMapa';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TelaLogin />} />
        <Route path='/TelaPrincipalProfessor' element={<TelaPrincipalProfessor />} />
        <Route path='/TelaMontagemProva' element={<TelaMontagemProva />} />
        <Route path='/TelaEscolhaPersonagem' element={<TelaEscolhaPersonagem />} />
        <Route path='/TelaInicialJogo' element={<TelaInicialJogo />} />
        <Route path='/TelaMapa' element={<TelaMapa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;