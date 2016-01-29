import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import World from 'store/World';
import Button from '../Button';

class Intro extends Component {
  switchToGame = () => {
    World.trigger('scene', 'Game');
  }

  render() {
    return (
      <Scene name="intro">
        <h2>Time traveled into ancient mayan times, oh yeah.</h2>
        <Button onClick={this.switchToGame}>Continue</Button>
      </Scene>
    );
  }
}

export default Intro;
