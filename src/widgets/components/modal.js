import React from 'react';
import './modal.css';
import VideoPlayerLayout from '../../player/components/video-player-layout';

function Modal(props){
  return(
    <div className="Modal">
      {/* Questo è un modale */}
      {props.children}
      <button className="Modal-close" onClick={props.handleClick}/> 
    </div>
  )
}

export default Modal;
