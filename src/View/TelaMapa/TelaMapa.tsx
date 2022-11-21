import React from 'react';
import './TelaMapa.css';
import fundo from '../../imagens/mapa.png'


function TelaMapa(
  {urlBarco}:
  {urlBarco: string}
) {

  return (
    <div className="TelaMapa"
      style={{ backgroundImage: `url(${fundo})` }}>

      <button id='barco' />

    </div >
  );
}

export default TelaMapa;