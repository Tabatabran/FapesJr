import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaMapa from './TelaMontagemProva';
import TelaLogin from './TelaLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TelaLogin />} />
        <Route path='/TelaMapa' element={<TelaMapa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;