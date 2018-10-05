import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import VolumeIcon from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
  }
  togglePlay = (event) => {
    this.setState({ //cambia lo stato
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }
  handleTimeUpdate = event =>{

    // Api di html5 -> currentTime
    // console.log(this.video.currentTime) mi permette vedere in console il tempo trascorso in maniera continuata
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  handleProgressChange = event =>{
    // event.target.value
    this.video.currentTime = event.target.value
  }
  handleSeeking = event =>{
    this.setState({
      loading: true
    })
  }
  handleSeeked = event =>{
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event =>{
    this.video.volume = event.target.value
  }
  handleFullScreenClick = event =>{
    if(!document.webkitIsFullScreen){ //Se è diverso da FullScreen
      this.player.webkitRequestFullScreen() //entra in FullScreen
    } else{
      document.webkitCancelFullScreen(); //esco dal FullScreen
    }
  }
  setRef = element =>{
    this.player = element
  }
  render() {
    return (
      <VideoPlayerLayout //componente che racchiude tutto
        setRef={this.setRef}
      >
        <Title //componente del titolo del video
          title={this.props.title}
        />
        <Controls /*Componente che racchiude i controlli */>
          <PlayPause //Componente che si intercambia tra il Play e pause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer //Componente della durata del video
            duration={this.state.duration}
            currentTime ={this.state.currentTime}
          />
          <ProgressBar //Componente della barra di progresso
            duration = {this.state.duration}
            value={this.state.currentTime}
            handleProgressChange = {this.handleProgressChange}
            />

          <VolumeIcon //Componente per gestire il volume
            handleVolumeChange={this.handleVolumeChange}
          />

          <FullScreen //Componente che fa diventare a schermo intero
            handleFullScreenClick = {this.handleFullScreenClick}
          />
        
        </Controls> {/*fine del componente che racchiude tutto*/}

        <Spinner //Componente che si presenta quando c'è il caricamento in corso, per 'risolvere' il delay del video
          active ={this.state.loading}
          />
        <Video //Componente del vide
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate = {this.handleTimeUpdate}
          handleSeeking = {this.handleSeeking}
          handleSeeked = {this.handleSeeked}
          src={this.props.src} 
          //Mi sono chiesto perchè non caricava un nuovo video ogni volta che facevo click e ho scoperto che React ha un algoritmo che gli permette modificare solo quando c'è un cambiamento
          />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
