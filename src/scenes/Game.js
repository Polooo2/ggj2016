import React, {Component} from 'react';
import { background } from 'images';
import { decisionNodes } from 'data';
import Scene from './Scene';
import { BackgroundImage, Button, ProgressBar, Text } from 'components';

console.log('test', decisionNodes);

class Game extends Component {
  render() {
    return (
      <Scene name="game">
        <BackgroundImage src={background} />
        <ProgressBar className="belief" progress={100} />
        <Button className="text-area">{decisionNodes[0].intro}</Button>
        <Button className="button-1" onClick={this.onBuild}>{decisionNodes[0].selection[0].text}</Button>
        <Button className="button-2" onClick={this.onQuests}>{decisionNodes[0].selection[1].text}</Button>
        <Button className="button-3" onClick={this.onUpgrades}>{decisionNodes[0].selection[2].text}</Button>
        <Button className="button-4" onClick={this.onUpgrades}>{decisionNodes[0].selection[2].text}</Button>
        <ProgressBar className="time" progress={100} />
      </Scene>
    );
  }
}

export default Game;
