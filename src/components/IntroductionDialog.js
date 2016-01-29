import React, {Component} from 'react';

import {Introduction} from 'data';
import Button from './Button';
import World from 'store/World';

class IntroductionDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: World.stateData.name,
    };
  }

  render() {
    const items = Introduction.map((line, index) => {
      return <div className="line" key={index}>{line}</div>;
    });

    return (
      <div>
        <div className="menu-overlay" onClick={this.props.onClose} />
        <div className="menu">
          <h2>Hi there, {this.state.name}!</h2>
          <div className="menu-inner">{items}</div>
          <div className="menu-bottom"><Button onClick={this.props.onClose}>Close</Button></div>
        </div>
      </div>
    );
  }
}

export default IntroductionDialog;
