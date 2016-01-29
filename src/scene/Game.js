import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import Button from '../Button';
import ProgressBar from '../ProgressBar';

class Game extends Component {
  render() {
    return (
      <Scene name="game">
        <ProgressBar progress={100} />
        <Button className="button-build" onClick={this.onBuild}>Defenses</Button>
        <Button className="button-quests" onClick={this.onQuests}>Quests</Button>
        <Button className="button-upgrades" onClick={this.onUpgrades}>Upgrades</Button>
        <Button className="button-help" onClick={this.onHelp}>Help</Button>
      </Scene>
    );
  }
}

export default Game;
