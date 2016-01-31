import React, {Component} from 'react';
import { background } from 'images';
import { decisionNodes } from 'data';
import Scene from './Scene';
import { Button, ProgressBar, Text, TextContainer, Timer } from 'components';
import consts from 'consts';
import { ambience } from 'sounds';

import World from 'store/World';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      belief: consts.belief.init,
      selectionVisible: true,
      selectedDecision: null,
      timer: consts.timer,
      timerActive: false,
      resultText: null,
    };

    this.state.selectedDecision = this.getAvailableDecisions();
  }

  onContinue = () => {
    this.setState({
      timerActive: true,
    });
  };

  /**
   * Select, return a decision node and mark it as used
   * @returns {*}
   */
  getAvailableDecisions = () => {
    var availableDecisions = decisionNodes.filter((elem) => {
      return !elem.used && elem.min <= this.state.belief && this.state.belief <= elem.max;
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
        resultText: null,
        timerActive: false,
      });
    } else {
      // reset belief
      this.state.belief = consts.belief.init;
      // reset decisions file
      decisionNodes.forEach(function(elem, index) {
        decisionNodes[index].used = false;
      });
      World.trigger('scene', this.nextScene);
    }
  };

  /**
   * Based on the action select a reaction and consequences
   * @param effect
   * @param nothingDone
   * @param answer
     */
  selDecision = (effect, nothingDone, answer) => {
    var belief = this.state.belief + effect;
    let text = '';
    console.log('selDecisions', decisionNodes);
    const nextDecision = this.getAvailableDecisions();

    if (belief >= consts.belief.max || (nextDecision === null && belief > 50)) {
      text = this.state.selectedDecision.effects.win;
      this.nextScene = 'Intro';
    } else if (belief <= consts.belief.min || (nextDecision === null && belief <= 50)) {
      text = this.state.selectedDecision.effects.fail;
      this.nextScene = 'Intro';
    } else {
      text = this.state.selectedDecision.selection[answer].result;
      this.nextScene = 'Game';
    }

    if (nothingDone) {
      text = this.state.selectedDecision.noSelection.result;
    }

    // fallback
    if (text === '') {
      text = 'Pedro de Alvarado charges in with his conquistadores cavalry, 180 horsemans strong. Swords fall down left and right, screams and blood are numbing you senses. <br/> You barely have the time to curse your dumb ideas when a sword finds your neck.';
    }

    this.setState({
      belief: belief,
      selectedDecision: nextDecision,
      selectionVisible: false,
      resultText: text,
      timerActive: false,
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
      nextScene: this.nextScene,
      onContinue: this.onContinue,
    };
    return (
      <Scene name="game">
        <ProgressBar className="belief" progress={this.state.belief} caption="How much do I feel people trust me?" />
        <div className="text-container">
          <TextContainer {...helperObj}/>
          <Timer onTimeUp={() => this.selDecision(this.state.selectedDecision.noSelection.effect, true, 0)} timerState={this.state.timerActive}/>
        </div>
        <audio id="sound-background" autoPlay loop>
          <source src={ambience} type="audio/mpeg" />
        </audio>
      </Scene>
    );
  }
  componentDidUpdate() {
    var vid = document.getElementById('sound-background');
    vid.volume = 0.2;
  }
}

export default Game;
