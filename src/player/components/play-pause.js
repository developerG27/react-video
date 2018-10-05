import React from 'react';
import './play-pause.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';

function PlayPause(props) { //componente funzionale
  return (
    <div className="PlayPause"> 
      {
        props.pause ? //se pause è true
          <button
            onClick={props.handleClick} //al click fai partire la funzione
          >
            <Play size={25} color="white" /> {/*Componente Play*/}
          </button>
        : //Altrimenti
        <button
          onClick={props.handleClick} //al click fai partire la funzione
        >
          <Pause size={25} color="white" /> {/*Componente Pause*/}
        </button>
      }
    </div>
  )
}

export default PlayPause;