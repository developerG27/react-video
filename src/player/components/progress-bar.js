import React from 'react';
import './progress-bar.css';

function ProgressBar(props){ //Componente funzionale
  return(
    <div className="ProgressBar">
      <input //un input di tipo range con un valore massimo in base al video caricato 
        type="range"
        min={0}
        max={props.duration}
        value={props.value}
        onChange={props.handleProgressChange} 
      />
    </div>
  )
}

export default ProgressBar;