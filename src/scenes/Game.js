import React, {Component} from 'react';

import Scene from './Scene';
import { BackgroundImage, Button, ProgressBar } from 'components';

class Game extends Component {
  render() {
    return (
      <Scene name="game">
        <ProgressBar className="belief" progress={100} />
        <Button className="button-build" onClick={this.onBuild}>Defenses</Button>
        <Button className="button-quests" onClick={this.onQuests}>Quests</Button>
        <Button className="button-upgrades" onClick={this.onUpgrades}>Upgrades</Button>
        <Button className="button-help" onClick={this.onHelp}>Help</Button>
        <ProgressBar className="time" progress={100} />
      </Scene>
    );
  }
}

export default Game;
