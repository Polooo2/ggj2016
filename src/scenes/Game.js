import React, {Component} from 'react';
import { background } from 'images';
import { decisionNodes } from 'data';
import Scene from './Scene';
import { BackgroundImage, Button, ProgressBar, Text } from 'components';


class Game extends Component {
  getAvailableDecisions = () => {
    // TODO add believe

    var availableDecisions = decisionNodes.filter(elem => elem.min < 20 < elem.max);
    return availableDecisions[Math.floor(Math.random()*availableDecisions.length)];
  };
  selDecision = () => {
    alert(1)
  };
  render() {
    const decisions = this.getAvailableDecisions().selection.map((dec, i) => {
      return <Button className={"button-" + (i)} onClick={() => this.selDecision(dec.effect)}>{dec.text}</Button>
    });

    return (
      <Scene name="game">
        <BackgroundImage src={background} />
        <ProgressBar className="belief" progress={100} />
        <div className="text-container">
          <Button className="text-area">{decisionNodes[0].intro}</Button>
          {decisions}
          <ProgressBar className="time" progress={100} />
        </div>
      </Scene>
    );
  }
}

export default Game;
