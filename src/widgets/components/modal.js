import React from 'react';
import './modal.css';
import VideoPlayerLayout from '../../player/components/video-player-layout';

function Modal(props){
  return(
    <div className="Modal">
      Questo è un modale
      {props.children}
      <button onClick={props.handleClick}> Chiudi </button>
    </div>
  )
}

export default Modal;
