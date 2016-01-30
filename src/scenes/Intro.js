import React, { Component } from 'react';

import Scene from './Scene';
import { BackgroundImage, Button, ProgressBar, IntroSlide } from 'components';
import World from 'store/World';

import { introduction } from 'data';
import { intro } from 'images';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      introState: 0,
    };
  }

  onContinue = () => {
    this.setState({
      introState: this.state.introState++,
    });
  };

  switchToGame = () => {
    World.trigger('scene', 'Game');
  };

  render() {
    const introText = introduction.map((slide, index) => {
      const lines = slide.text.map((line, lineIndex) => <div key={lineIndex} className="line">{line}</div>);

      const isTyping = (this.state.introState === index);

      return <IntroSlide image={null} text={lines} isTyping={isTyping} button={slide.action} onClick={this.onContinue} />;
    });

    const style = {
      transform: `transformY(${this.state.introState * (-200)}px)`,
    };

    return (
      <Scene name="intro">
        <Button onClick={this.switchToGame}>Continue</Button>
        <div className="intro-slide-container" style={style}>{introText}</div>
        <img src={intro} />
        <br />
      </Scene>
    );
  }
}

export default Intro;
