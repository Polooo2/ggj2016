import React, { Component } from 'react';

import Scene from './Scene';
import { BackgroundImage, Button, ProgressBar } from 'components';
import World from 'store/World';

import { intro } from 'images';

class Intro extends Component {
  switchToGame = () => {
    World.trigger('scene', 'Game');
  };

  render() {
    return (
      <Scene name="intro">
        <h2>Time traveled into ancient mayan times, oh yeah.</h2>
        <img src={intro} />
        <br />
        <Button onClick={this.switchToGame}>Continue</Button>
      </Scene>
    );
  }
}

export default Intro;
