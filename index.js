import React from 'react';
import {render} from 'react-dom';
import Media from './src/playlist/components/media';
import data from './src/api.json';

const app = document.querySelector('#app');
// const hello = <h1>Hello world</h1>

// ReactDOM.render(Cosa renderizzo, dove lo farò)
// ReactDOM.render( hello , app);

render(<Media type="video" title="Cos'è il responsive design?" author="GianPumayalla" images="./images/covers/bitcoin.jpg"/>, app)


// npm run build:dev