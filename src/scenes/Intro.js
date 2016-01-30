import React, { Component } from 'react';

import Scene from './Scene';
import { BackgroundImage, Button, ProgressBar } from 'components';
import World from 'store/World';

import { introduction } from 'data';
import { intro } from 'images';

class Intro extends Component {
  constructor() {
    this.state = {
      introState: 0
    }
  }

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
