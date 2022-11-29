import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaPrincipalProfessor from '../TelaPrincipalProfessor/ControladorTelaPrincipalProfessor';
import TelaMontagemProva from '../TelaMontagemProva/ControladorTelaMontagemProva';
import TelaEscolhaPersonagem from '../TelaEscolhaPersonagem/ControladorTelaEscolhaPersonagem';
import TelaInicialJogo from '../TelaInicialJogo/TelaInicialJogo';
import TelaLogin from '../TelaLogin/ControladorTelaLogin';
import TelaCadastro from '../TelaCadastro/ControladorTelaCadastro';
import TelaMapa from '../TelaMapa/ControladorTelaMapa';

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
            <Route path='/CadastroProfessor' element={<TelaCadastro />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;