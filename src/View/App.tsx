import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaMapa from './TelaMapa';
import TelaInicial from './TelaInicial';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TelaInicial />} />
        <Route path='/TelaMapa' element={<TelaMapa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;