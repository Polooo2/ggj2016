import React, {Component} from 'react';

import Scene from './Scene';
import { BackgroundImage, Button, ProgressBar } from 'components';

class Game extends Component {
  render() {
    return (
      <Scene name="game">
        <ProgressBar className="belief" progress={100} />
        <Button className="button-1" onClick={this.onBuild}>Defenses</Button>
        <Button className="button-2" onClick={this.onQuests}>Quests</Button>
        <Button className="button-3" onClick={this.onUpgrades}>Upgrades</Button>
        <Button className="button-4" onClick={this.onHelp}>Help</Button>
        <ProgressBar className="time" progress={100} />
      </Scene>
    );
  }
}

export default Game;
