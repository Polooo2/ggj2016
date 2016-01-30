import React, {Component} from 'react';
import { background } from 'images';
import { decisionNodes } from 'data';
import Scene from './Scene';
import { BackgroundImage, Button, ProgressBar, Text, TextContainer, Timer } from 'components';
import consts from 'consts';

import World from 'store/World';

var belief = consts.belief.init;

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionVisible: true,
      selectedDecision: this.getAvailableDecisions(),
      timer: consts.timer,
      resultText: '',
    };
  }

  /**
   * Select, return a decision node and mark it as used
   * @returns {*}
   */
  getAvailableDecisions = () => {
    var availableDecisions = decisionNodes.filter((elem) => {
      return !elem.used && elem.min < belief && belief < elem.max;
    });
    if (availableDecisions.length === 0) {
      console.log('Couldnt find any unused nodes');
      return null;
    }
    const decisionNode = availableDecisions[Math.floor(Math.random() * availableDecisions.length)];
    // mark this decisionNode as used
    decisionNode.used = true;
    return decisionNode;
  };

  switchToGame = () => {
    if (this.nextScene === 'Game') {
      this.setState({
        selectionVisible: true,
        resultText: '',
      });
    } else {
      // reset belief
      belief = consts.belief.init;
      // reset decisions file
      decisionNodes.forEach(function(elem, index) {
        decisionNodes[index].used = false;
      });
      World.trigger('scene', this.nextScene);
    }
  };

  selDecision = (effect, nothingDone) => {
    belief += effect;
    let text = '';
    const nextDecision = this.getAvailableDecisions();

    if (belief >= consts.belief.max || (nextDecision === null && belief > 50)) {
      text = this.state.selectedDecision.effects.win;
      this.nextScene = 'Intro';
    } else if (belief <= consts.belief.min || (nextDecision === null && belief <= 50)) {
      text = this.state.selectedDecision.effects.fail;
      this.nextScene = 'Intro';
    } else if (effect > 0) {
      text = this.state.selectedDecision.effects.pos;
      this.nextScene = 'Game';
    } else if (effect < 0) {
      text = this.state.selectedDecision.effects.neg;
      this.nextScene = 'Game';
    }
    this.setState({
      selectedDecision: nextDecision,
      selectionVisible: false,
      resultText: text,
    });
  };

  render() {
    const {selectionVisible, resultText, selectedDecision} = this.state;
    const helperObj = {
      selectionVisible,
      resultText,
      selectedDecision,
      selDecision: this.selDecision,
      switchToGame: this.switchToGame,
    };
    return (
      <Scene name="game">
        <BackgroundImage src={background} />
        <ProgressBar className="belief" progress={belief} caption="How much do I feel people trust me?" />
        <div className="text-container">
          <TextContainer {...helperObj}/>
          <Timer onTimeUp={() => this.selDecision(this.state.selectedDecision.noSelection.effect, true)} timerState={this.state.resultText}/>
        </div>
      </Scene>
    );
  }
}

export default Game;
