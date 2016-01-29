// Shims for ES5


// Console polyfill
// TODO: Webpack should provide something like that. Check it it's the same
import 'console-polyfill';

// ES6 promise polyfill
import ES6Promise from 'es6-promise';
ES6Promise.polyfill();

import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../styles/main.less';

import { Viewport, SceneDirector } from 'gameengine';

import FastClick from 'fastclick';

const content = document.getElementById('content');

if (Object.hasOwnProperty.call(document, 'addEventListener')) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

const game = (
  <Viewport width={1024} height={614}>
    <SceneDirector />
    <audio autoPlay loop>
      <source src="images/music.mp3" type="audio/mpeg" />
    </audio>
  </Viewport>
);

ReactDOM.render(game, content);
