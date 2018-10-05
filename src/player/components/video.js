import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  togglePlay() {
    if (this.props.pause) { //se la proprietà pause è true
      this.video.play() //fa diventare play true e pause false
    } else { //altrimenti
      this.video.pause() //fa diventare pause true
    }
  }

  componentWillReceiveProps(nextProps) { //funzione che si usa quando il componente riceve nuove proprietà
    if (nextProps.pause !== this.props.pause) { //se la nuova proprietà pausa è diversa dalla proprietà pausa
      this.togglePlay(); //fai partire la funzione sopra
    }
  }

  setRef = element => { //arrow function
    this.video = element; //video ha il valore di elemento
  }

  render() {

    const { 
      handleLoadedMetadata, //funzione che carica i metadata
      handleTimeUpdate, //funzione che fa capire quanto tempo è passato
      handleSeeking,
      handleSeeked,
    } = this.props; //le aggiunge alle proprietà

    return (
      <div className="Video">
        <video
          autoPlay={this.props.autoplay} //si usa camelCase perchè non ci possono essere spazi
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate = {handleTimeUpdate}
          onSeeking ={handleSeeking}
          onSeeked ={handleSeeked}
        />
      </div>
    )
  }
}

export default Video;
