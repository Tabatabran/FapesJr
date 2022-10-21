import React ,{ useState } from "react";
import Modal from "react-modal";
import "./popUp.css";

Modal.setAppElement("#root");

function popUp({mensagem, visible, openModal, closeModal}: {mensagem: string, visible:boolean,
    closeModal:() => void, openModal:() => void}) {


  

  return (
    <div className="Container">
      <Modal
        isOpen={visible}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h2 id = 'mensagem'>{mensagem}</h2>
        
        <button className="buttoModal" onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
}

export default popUp;