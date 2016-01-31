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
    if (this.props.timerState) {
      this.startTimer();
    } else {
      this.stopTimer();
      this.resetTimer();
    }
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
    if (this.props.timerState !== nextProps.timerState) {
      console.log('timetState changed');
      if (!nextProps.timerState) {
        console.log('stopping timer');
        this.stopTimer();
        this.resetTimer();
      } else {
        console.log('starting timer');
        this.startTimer();
      }
    }
  }

  render() {
    let className = 'time';

    if (this.state.timer <= 5) {
      className += ' animated infinite flash';
    }

    return (
      <ProgressBar className={className} progress={(this.state.timer / consts.timer) * 100} />
    );
  }
}

export default Timer;
