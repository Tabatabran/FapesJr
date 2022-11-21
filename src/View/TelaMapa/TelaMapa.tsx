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

      <input id='barco' src={urlBarco} />

    </div >
  );
}

export default TelaMapa;