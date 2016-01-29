import React, {Component} from 'react';
import { background } from 'images';
import { decisionNodes } from 'data';
import Scene from './Scene';
import { BackgroundImage, Button, ProgressBar, Text } from 'components';


class Game extends Component {
  constructor() {
    this.state = {
      selectionVisible: true,
    };
  }

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
      return <Button className={`button-$(i)`} onClick={() => this.selDecision(dec.effect)}>{dec.text}</Button>
    });

    const textContainer = (() => {
      if (this.state.selectionVisible) {
        return (
          <div>
            <Button className="text-area">{decisionNodes[0].intro}</Button>
            {decisions}
            <ProgressBar className="time" progress={100} />
          </div>
        );
      }
    })();

    return (
      <Scene name="game">
        <BackgroundImage src={background} />
        <ProgressBar className="belief" progress={100} caption="How much do I feel people trust me?" />
        <div className="text-container">
          {textContainer}
        </div>
      </Scene>
    );
  }
}

export default Game;
