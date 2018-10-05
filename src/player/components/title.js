import React from 'react';
import './title.css';


function Title(props) { //componente funzionale
  return (
    <div className="Title">
      <h2>{props.title}</h2> {/*Ritorna il titolo*/}
    </div>
  )
}

export default Title;
