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

    let button = null;

    if (this.state.buttonTyping) {
      button = (
        <TypedText>
          <Button onClick={this.props.onClick}>1. {this.props.button}</Button>
        </TypedText>
      );
    }

    const imageStyle = {
      float: this.props.alignImage,
    };

    if (this.props.alignImage === 'right') {
      imageStyle.marginLeft = 16;
    } else {
      imageStyle.marginRight = 16;
    }

    return (
      <div className={`intro-slide ${this.props.className}`} style={this.props.style}>
        <img src={this.props.image} border={0} width={320} height={240} style={imageStyle} />
        <div className="intro-slide-text">
          <TypedText onTypingDone={this.onTypingEnd}>{this.props.text}</TypedText>
        </div>
        {button}
      </div>
    );
  }
}

export default IntroSlide;
