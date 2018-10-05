import React from 'react';
import './spinner.css';

function Spinner(props){
  if(!props.active) return null //se è diverso da attivo
  return(
    <div className="Spinner"> {/*Classi scritte in PascalCase*/}
      <span>⭮</span> {/*un Unicode trovato online, per non dover sempre inserire gli svg*/}
    </div>
  )
}

export default Spinner;