import React, { Component } from 'react';
import Button from './Button';
import Text from './Text';

class TextContainer extends Component {
  render() {
    if (this.props.selectionVisible) {
      const decisions = this.props.selectedDecision.selection.map((dec, i) => {
        return <Button key={i} className={`button-$(i)`} onClick={() => this.props.selDecision(dec.effect)}>{i + 1}. {dec.text}</Button>;
      });
      return (
        <div>
          <Button className="text-area">{this.props.selectedDecision.intro}</Button>
          {decisions}
        </div>
      );
    }
    return (
      <div>
        <Text className="text-area">{this.props.resultText}</Text>
        <Button onClick={this.props.switchToGame}>Continue</Button>
      </div>
    );
  }
}

export default TextContainer;
