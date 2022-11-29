import React, { useEffect } from 'react';
import './TelaMapa.css';
import fundo from '../../imagens/mapa.png'
import barcoVermelho from '../../imagens/barcoVermelho.png'
import barcoBranco from '../../imagens/barcoBranco.png'
import barcoPirata from '../../imagens/barcoPirata.png'

function TelaMapa({tipoBarco}:{tipoBarco: string}) {

  return (
    <div className="TelaMapa"
      style={{ backgroundImage: `url(${fundo})` }}>

      {tipoBarco === 'vermelho' && (
      <img id='barco' src= {barcoVermelho}/>
      )}
      {tipoBarco === 'pirata' && (
      <img id='barco' src= {barcoPirata}/>
      )}
      {tipoBarco === 'branco' && (
      <img id='barco' src= {barcoBranco}/>
      )}

    </div >
  );
}

export default TelaMapa;