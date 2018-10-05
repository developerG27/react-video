import React from 'react';
import './timer.css';

//00 => 0 +1 =  01
function leftPad(number){ //Mi sono ispirato ad una funzione trovata online
  const pad = '00'; //dichiaro una costante con un valore string di 00 che sarà il suo valore di default
  return pad.substring(0, pad.length - number.length) + number; //la funzione substring mi permette sostituire il valore  
}

function formattedTime(secs){
  const minutes = parseInt(secs/60,10) //trasforma i secondi in minuti e lo trasforma in numero intero
  const seconds = parseInt(secs % 60, 10) //riporta quello che rimane dopo 60 secondi (5 % 2 = 1), lo trasforma in numero intero
  return `${minutes} : ${leftPad(seconds.toString())}` /* Template ES6, su windows per fare ` bisogna fare Alt + 0096 */
}

function Timer(props){
  return(
    <div className="Timer">
      <p>
        <span>
          {formattedTime(props.currentTime)} / {formattedTime(props.duration)} {/*ritorna le funzioni create sopra che le proprietà*/}
        </span>
      </p>
    </div>
  )
}

export default Timer;