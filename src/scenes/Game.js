import React, {Component} from 'react';
import { background } from 'images';
import { decisionNodes } from 'data';
import Scene from './Scene';
import { BackgroundImage, Button, ProgressBar, Text } from 'components';
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

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    this.timerId = setInterval(() => {
      this.setState({
        timer: this.state.timer - 1,
      }, () => {
        this.processTimer();
      });
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timerId);
  };

  resetTimer = () => {
    this.setState({
      timer: consts.timer,
    });
  };

  processTimer = () => {
    if (this.state.timer <= 0) {
      this.selDecision(this.selectedDecision.noSelection.effect, true);
      this.resetTimer();
    }
  };

  /**
   * Select, return a decision node and mark it as used
   * @returns {*}
   */
  getAvailableDecisions = () => {
    var availableDecisions = decisionNodes.filter((elem) => {
      return !elem.used && elem.min < belief && belief < elem.max;
    });
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
      World.trigger('scene', this.nextScene);
    }
  };

  selDecision = (effect, nothingDone) => {
    belief += effect;
    let text = '';
    const nextDecision = this.getAvailableDecisions();

    if (belief >= consts.belief.max || (nextDecision === null && belief > 50)) {
      text = this.selectedDecision.effects.win;
      this.nextScene = 'Intro';
    } else if (belief <= consts.belief.min || (nextDecision === null && belief <= 50)) {
      text = this.selectedDecision.effects.fail;
      this.nextScene = 'Intro';
    } else if (effect > 0) {
      text = this.selectedDecision.effects.pos;
      this.nextScene = 'Game';
    } else if (effect < 0) {
      text = this.selectedDecision.effects.neg;
      this.nextScene = 'Game';
    }
    this.setState({
      selectionVisible: false,
      resultText: text,
    });
  };

  render() {
    this.selectedDecision = this.getAvailableDecisions();
    // TODO mark selected decisions to not be used again
    const decisions = this.selectedDecision.selection.map((dec, i) => {
      return <Button key={i} className={`button-$(i)`} onClick={() => this.selDecision(dec.effect)}>{i + 1}. {dec.text}</Button>;
    });

    return (
      <Scene name="game">
        <BackgroundImage src={background} />
        <ProgressBar className="belief" progress={belief} caption="How much do I feel people trust me?" />
        <div className="text-container">{textContainer}
          <TextContainer selectionVisible={this.nextScene}></TextContainer>
        </div>
      </Scene>
    );
  }
}

export default Game;
