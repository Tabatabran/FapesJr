import React from 'react';
import './TelaEscolhaPersonagem.css';


function TelaInicial() {

  return (
    <div className="TelaEscolhaPersonagem">

      <form>

        <div className='formLogin'>

          <button id='barcoVermelho' />
          <button id='barcoPirata' />
          <button id='barcoBranco' />

        </div>

      </form>
    </div >
  );
}

export default TelaInicial;