import React from 'react';
import './video-player-layout.css';

const VideoPlayerLayout = (props) => (
  <div className="VideoPlayer">
    {props.children}
  </div>
)

export default VideoPlayerLayout



// export default class VideoPlayer extends Component{
//   render(){
//     return(
//       <videoPlayerLayout>

//       </videoPlayerLayout>
//     )
//   }
// }