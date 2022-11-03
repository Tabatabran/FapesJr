import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaMontagemProva from '../TelaMontagemProva/ControladorTelaMontagemProva';
import TelaLogin from '../TelaLogin/TelaLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TelaLogin />} />
        <Route path='/TelaMontagemProva' element={<TelaMontagemProva />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;