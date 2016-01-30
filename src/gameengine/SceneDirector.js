import World from 'store/World';
import React, { Component } from 'react';
import { Game, Intro, GameWon, GameLost, Credits } from 'scenes';

class SceneDirector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scene: 'Intro',
    };
  }

  componentDidMount() {
    World.on('scene', sceneName => {
      this.setState({ scene: sceneName });
    });
  }

  render() {
    if (!this.state.scene) {
      return null;
    }

    // var sceneName = (scene && scene[this.state.scene]) ? React.createElement(scene[this.state.scene]) : null;

    const sceneInstance = (() => {
      switch (this.state.scene) {
        case 'Intro': return <Intro />;
        case 'Credits': return <Credits />;
        case 'Game': return <Game />;
        case 'GameWon': return <GameWon />;
        case 'GameLost': return <GameLost />;
        default: return null;
      }
    })();

    const style = {
      // width: '100%',
      // height: '100%',
    };

    return (
      <div className="scene-director" style={style}>
        {sceneInstance}
      </div>
    );
  }
}

export default SceneDirector;
