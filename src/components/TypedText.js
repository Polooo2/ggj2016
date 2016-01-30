import React, { Component } from 'react';
import Typist from 'react-typist';

class TypedText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avgTypingDelay: 25,
    };
  }

  render() {
    return (
      <Typist
        avgTypingDelay={this.state.avgTypingDelay}
        onTypingDone={this.props.onTypingDone}
        cursor={{ show: false }}>{this.props.children}</Typist>
    );
  }
}

export default TypedText;
