import React from 'react';
import FullScreenIcon from '../../icons/components/full-screen';
import './full-screen.css';

function FullScreen(props){
  return(
    <div className="FullScreen" onClick={props.handleFullScreenClick /*Dopo il click fai partire la funzione*/}>
      <FullScreenIcon //Componente full screen con le proprietà
        size={25}
        color="white"
      />
    </div>
  )
}

export default FullScreen;