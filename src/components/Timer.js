import React, { Component, PropTypes } from 'react';
import ProgressBar from './ProgressBar';

import consts from 'consts';

class Timer extends Component {
  static propTypes = {
    onTimeUp: PropTypes.func,
  };

  static defaultProps = {
    onTimeUp: function() {},
  };

  constructor(props) {
    super(props);

    this.state = {
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
      this.props.onTimeUp();
      this.resetTimer();
    }
  };

  componentWillReceiveProps(nextProps) {
    console.log('recieve update');
    if (this.props.timerState !== nextProps.timerState) {
      if (nextProps.timerState !== '') {
        this.stopTimer();
        this.resetTimer();
      } else {
        this.startTimer();
      }
    }
  }

  render() {
    return (
      <ProgressBar className="time" progress={(this.state.timer / consts.timer) * 100} />
    );
  }
}

export default Timer;
