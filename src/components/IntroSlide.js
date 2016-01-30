import React, { Component } from 'react';
import Button from './Button';
import Typewriter from 'react-typewriter';

class IntroSlide extends Component {
  static defaultProps = {
    alignImage: 'left',
    className: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      buttonTyping: false,
    };
  }

  onTypingEnd = () => {
    this.setState({
      buttonTyping: true,
    });
  };

  render() {
    let button = null;

    if (this.state.buttonTyping) {
      button = (
        <Typewriter typing={3}>
          <Button onClick={this.props.onClick}>1. {this.props.button}</Button>
        </Typewriter>
      );
    }

    return (
      <div className={`intro-slide ${this.props.className}`}>
        <img src={this.props.image} border={0} width={320} height={240} style={{ float: this.props.alignImage, marginRight: 16 }} />
        <div className="intro-slide-text">
          <Typewriter typing={~~this.props.isTyping} onTypingEnd={this.onTypingEnd}>{this.props.text}</Typewriter>
        </div>
        {button}
      </div>
    );
  }
}

export default IntroSlide;
