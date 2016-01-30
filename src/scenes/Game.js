import React, {Component} from 'react';
import { background } from 'images';
import { decisionNodes } from 'data';
import Scene from './Scene';
import { BackgroundImage, Button, ProgressBar, Text } from 'components';
import consts from 'consts';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionVisible: true,
      timer: consts.timer,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    this.timerId = setInterval(() => {
      this.setState({
        timer: this.state.timer - 1,
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

  getAvailableDecisions = () => {
    // TODO add believe

    var availableDecisions = decisionNodes.filter(elem => elem.min < 20 && 20 < elem.max);
    return availableDecisions[Math.floor(Math.random()*availableDecisions.length)];
  };

  selDecision = () => {
    alert(1);
  };

  render() {
    const decisions = this.getAvailableDecisions().selection.map((dec, i) => {
      return <Button key={i} className={`button-$(i)`} onClick={() => this.selDecision(dec.effect)}>{i + 1}. {dec.text}</Button>;
    });

    const textContainer = (() => {
      if (this.state.selectionVisible) {
        return (
          <div>
            <Button className="text-area">{decisionNodes[0].intro}</Button>
            {decisions}
            <ProgressBar className="time" progress={(this.state.timer / consts.timer) * 100} />
          </div>
        );
      }
    })();

    return (
      <Scene name="game">
        <BackgroundImage src={background} />
        <ProgressBar className="belief" progress={10} caption="How much do I feel people trust me?" />
        <div className="text-container">{textContainer}</div>
      </Scene>
    );
  }
}

export default Game;
