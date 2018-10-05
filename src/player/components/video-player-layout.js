import React from 'react';
import './video-player-layout.css'; //importo i css di Video Player che si trovano nella stessa cartella

const VideoPlayerLayout = (props) => ( //arrow function che riceve come parametro le proprietà
  <div className="VideoPlayer"
      ref={props.setRef} 
  >
    {props.children} {/*Dentro ai componenti funzionali non si accetta this*/} 
  </div>
)

export default VideoPlayerLayout;