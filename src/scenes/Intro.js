import React, { Component } from 'react';

import Scene from './Scene';
import { BackgroundImage, Button, ProgressBar } from 'components';
import World from 'store/World';

import { intro } from 'images';

class Intro extends Component {
  switchToGame = () => {
    World.trigger('scene', 'Game');
  };

  render() {
    return (
      <Scene name="intro">
        <h2>Time traveled into ancient mayan times, oh yeah.</h2>
        <img src={intro} />
        <br />
        <Button onClick={this.switchToGame}>Continue</Button>
      </Scene>
    );
  }
}

export default Intro;

/*
 It's the 27th of November 2009 and you are not happy. <br/> The 11B of the Marie Curie Gymnasium is the hardest struggle you ever had to face in 63 years: Peifer and Geiger are always on their phones, Baumann can't sit still for a second, Holzmeister and Jund are fighting all the time. <br/> Nobody cares about History. <br/> But, It's a Friday! A sweet disaster movie will surely ease everything up.

 Go watch "2012" with the sweet love of your life.


 That. <br/> was. <br/> scary. <br/> Once back home you get in bed but you can't sleep, your head is filled with thoughts on the end of the world and the Mayan empire.<br/> You know what you need to do. <br/> First thing next morning you look around but cannot find them, gotta ask Gertrude:

 "Honey, where are the keys for the Time Machine?"


 Gertrude: "The Time Machine? Hans, are you tring to kill Hitler again?" <br/> You: "NO! no, no, no. I really just only want to lay down on the american grasslands!" <br/> Gertrude: "Uhm. I hid them in the Latin dictionary." <br/> You: "Thanks my dear".

 Use the Time Machine and get back to the Mayan Empire


 Here you are, in Q'umarkaj, ready to tweek the Mayan's Ritual Calendar and prevent a disaster in 2012! There's only a small issue, a perplexed crowd is looking at you sideways.

 Start
 */
