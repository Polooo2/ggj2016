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
      introState: 0
    };
  }

  switchToGame = () => {
    World.trigger('scene', 'Game');
  };

  render() {
    const introText = introduction.map(slide => {
      const lines = slide.text.map(line => <div className="line">{line}</div>);

      return <IntroSlide text={lines} button={slide.action} />;
    });

    return (
      <Scene name="intro">
        {introText}
        <img src={intro} />
        <br />
        <Button onClick={this.switchToGame}>Continue</Button>
      </Scene>
    );
  }
}

export default Intro;
