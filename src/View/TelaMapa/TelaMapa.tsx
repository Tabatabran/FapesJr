import React, { useEffect } from 'react';
import './TelaMapa.css';
import fundo from '../../imagens/mapa.png'
import barcoVermelho from '../../imagens/barcoVermelho.png'
import barcoBranco from '../../imagens/barcoBranco.png'
import barcoPirata from '../../imagens/barcoPirata.png'
import PopUp from '../../Componentes/PopUp/PopUps'

interface Params {
  tipoBarco: string, showPopUp: boolean, openModal: () => void, closeModal: () => void,
  mensagem: string
}

function TelaMapa({ tipoBarco, showPopUp, openModal, closeModal,
  mensagem}: Params) {

  return (
    <div className="TelaMapa"
      style={{ backgroundImage: `url(${fundo})` }}>

      {tipoBarco === 'vermelho' && (
        <img id='barco' src={barcoVermelho} />
      )}
      {tipoBarco === 'pirata' && (
        <img id='barco' src={barcoPirata} />
      )}
      {tipoBarco === 'branco' && (
        <img id='barco' src={barcoBranco} />
      )}

      <div>
        <PopUp mensagem={mensagem} visible={showPopUp} openModal={openModal} closeModal={closeModal} />
      </div>

    </div >
  );
}

export default TelaMapa;