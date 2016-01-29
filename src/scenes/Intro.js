import React, {Component} from 'react';

import { Scene } from 'engine';
import { BackgroundImage, Button, ProgressBar } from 'components';
import World from 'store/World';

class Intro extends Component {
  switchToGame = () => {
    World.trigger('scene', 'Game');
  };

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
