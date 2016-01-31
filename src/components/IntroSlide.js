import React, { Component } from 'react';
import Button from './Button';
import TypedText from './TypedText';

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
    if (!this.props.isTyping) {
      return null;
    }

    const imageStyle = {
      float: this.props.alignImage,
    };

    if (this.props.alignImage === 'right') {
      imageStyle.marginLeft = 16;
    } else {
      imageStyle.marginRight = 16;
    }

    const image = (this.props.image) ? <img src={this.props.image} border={0} width={320} height={240} style={imageStyle} /> : null;
    const audio = (this.props.audio) ? <audio autoPlay><source src={this.props.audio} type="audio/mpeg" /></audio> : null;

    return (
      <div className={`intro-slide ${this.props.className}`} style={this.props.style}>
        {image}
        <div className="intro-slide-text">
          <TypedText onTypingDone={this.onTypingEnd}>{this.props.text}</TypedText>
        </div>
        <div className={`decision-container ${(this.state.buttonTyping) ? 'show' : ''}`}>
          <Button onClick={this.props.onClick}>1. {this.props.button}</Button>
        </div>
        {audio}
      </div>
    );
  }
}

export default IntroSlide;
