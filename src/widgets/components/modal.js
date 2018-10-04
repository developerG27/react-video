import React from 'react';
import './modal.css';

function Modal(props){
  return(
    <div className="Modal">
      questo è un modale
      {props.children}
      <button onClick={props.handleClick}> Chiudi </button>
    </div>
  )
}

export default Modal;
