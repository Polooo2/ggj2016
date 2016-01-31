import React, { Component } from 'react';

import Scene from './Scene';
import { BackgroundImage, Button, ProgressBar, IntroSlide } from 'components';
import World from 'store/World';

import images from 'images';
import sounds from 'sounds';

import { introduction } from 'data';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      introState: 0,
    };
  }

  componentDidMount() {
    const that = this;
    // This seems to be off by one
    document.addEventListener('keyup', e => {
      const keyCode = e.keyCode || e.which;
      console.log('introKey', 1);
      if (that.state.introState < introduction.length) {
        console.log('introKey', 2);
        if (keyCode === 13 || keyCode === 32) {
          that.onContinue();
        } else if (keyCode === 27) {
          that.switchToGame();
        }
      }
    }, true);
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

  switchToCredits = () => {
    World.trigger('scene', 'Credits');
  };

  render() {
    const introText = introduction.map((slide, index) => {
      const lines = slide.text.map((line, lineIndex) => <div key={lineIndex} className="line">{line}</div>);

      const isTyping = (this.state.introState === index);

      return (
        <IntroSlide
          className={`intro-slide-${index} ${(index === 3) ? 'short' : ''}`}
          key={index}
          image={images[`intro${index}`]}
          text={lines}
          isTyping={isTyping}
          alignImage={(index === 2) ? 'left' : 'right'}
          button={slide.action}
          style={{ position: 'absolute', top: `${this.state.introState * 100}%` }}
          audio={sounds[`intro${index}`]}
          onClick={this.onContinue} />
      );
    });

    const style = {
      transform: `translateY(${this.state.introState * (-100)}%)`,
    };

    return (
      <Scene name="intro">
        <div className="intro-slide-container" style={style}>{introText}</div>
        <div className="button-left">
          <Button onClick={this.switchToCredits}>Credits</Button>
        </div>
        <div className="button-right">
          <Button onClick={this.switchToGame}>Skip intro</Button>
        </div>
      </Scene>
    );
  }
}

export default Intro;
