import React, {Component} from 'react';

import Scene from './Scene';
import { BackgroundImage, Button, ProgressBar } from 'components';
import World from 'store/World';

class GameLost extends Component {
  onReset = () => {
    World.resetAll();
    World.trigger('scene', 'Intro');
  };

  render() {
    return (
      <Scene name="game-lost">
        <h2>It looks like you lost you the game. Oh noes!</h2>
        <Button onClick={this.onReset}>Try again?</Button>
      </Scene>
    );
  }
}

export default GameLost;
