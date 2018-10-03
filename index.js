import React from 'react';
import {render} from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

const app = document.querySelector('#app');
// const hello = <h1>Hello world</h1>

// ReactDOM.render(Cosa renderizzo, dove lo farò)
// ReactDOM.render( hello , app);

render(<Playlist data={data} />, app)


// npm run build:dev