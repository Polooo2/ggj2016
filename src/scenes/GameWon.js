import React, {Component} from 'react';

import { Scene } from 'engine';
import { BackgroundImage, Button, ProgressBar } from 'components';
import World from 'store/World';

class GameWon extends Component {
  onReset = () => {
    World.resetAll();
    World.trigger('scene', 'Intro');
  };

  render() {
    return (
      <Scene name="game-won">
        <h2>Inner peace is great, isn't it?</h2>
        <Button onClick={this.onReset}>Try again?</Button>
      </Scene>
    );
  }
}

export default GameWon;
