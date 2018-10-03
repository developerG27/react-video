import React from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play'
import Volume from '../../icons/components/volume'
import Pause from '../../icons/components/pause'
import FullScreen from '../../icons/components/full-screen.js';

function Playlist(props) {
  // const playlist = props.data.categories[0].playlist
  console.log(props.data)
  return(
    <div className='Playlist'>
      <Play
        size={50}
        color="black"
      />

      <Volume
        size={50}
        color="black"
      />

      <Pause
        size={50}
        color="black"
      />

      <FullScreen
        size={50}
        color="black"
      />

      {
        playlist.map((item)=> {
        // spread operator
        return <Media {...item} key={item.id}/>
        })
      }
      </div>
    )
}
export default Playlist;