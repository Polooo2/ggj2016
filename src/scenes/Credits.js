import React, { Component } from 'react';

import Scene from './Scene';
import { Button } from 'components';
import World from 'store/World';

class Credits extends Component {
  switchToIntro = () => {
    World.trigger('scene', 'Intro');
  };

  render() {
    return (
      <Scene name="credits">
        <div style={{ position: 'absolute', padding: '1.0rem' }}>
          <div>Made at Global Game Jam Berlin 2016</div>
          <ul>
            <li key={0}>Johannes Stein</li>
            <li key={1}>Dawid Pach</li>
            <li key={2}>Luca Lombardo</li>
          </ul>
          <div>Special thanks to Malcolm Crum, Ruth Bosch, and all playtesters.</div>
          <div>Uses "Felix Blume: A Village In Africa General Ambience" from freesound.org</div>
        </div>
        <div className="button-left">
          <Button onClick={this.switchToIntro}>Back</Button>
        </div>
      </Scene>
    );
  }
}

export default Credits;
