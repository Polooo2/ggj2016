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
      introState: this.state.introState + 1,
    }, () => {
      if (this.state.introState === introduction.length) {
        World.trigger('scene', 'Game');
      }
    });
  };

  switchToGame = () => {
    World.trigger('scene', 'Game');
  };

  render() {
    const introText = introduction.map((slide, index) => {
      const lines = slide.text.map((line, lineIndex) => <div key={lineIndex} className="line">{line}</div>);

      const isTyping = (this.state.introState === index);

      return (
        <IntroSlide
          className={`intro-slide-${index}`}
          key={index}
          image={null}
          text={lines}
          isTyping={isTyping}
          alignImage={(index === 3) ? 'left' : 'right'}
          button={slide.action}
          style={{ position: 'absolute', top: `${this.state.introState * 100}%` }}
          onClick={this.onContinue} />
      );
    });

    const style = {
      transform: `translateY(${this.state.introState * (-100)}%)`,
    };

    return (
      <Scene name="intro">
        <div className="intro-slide-container" style={style}>{introText}</div>
        <div className="skip-button">
          <Button onClick={this.switchToGame}>Skip intro</Button>
        </div>
      </Scene>
    );
  }
}

export default Intro;
