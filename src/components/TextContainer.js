import React, { Component } from 'react';
import Button from './Button';
import Text from './Text';

class TextContainer extends Component {
  render() {
    if (this.props.selectionVisible) {
      const decisions = this.props.selectedDecision.selection.map((dec, i) => {
        return <Button key={i} className={`button-$(i)`} onClick={() => this.props.selDecision(dec.effect, false, i)}>{i + 1}. {dec.text}</Button>;
      });
      return (
        <div>
          <Text className="text-area">{this.props.selectedDecision.intro}</Text>
          {decisions}
        </div>
      );
    }
    // replace br/ tag behavior with divs
    var text = (this.props.resultText || '').split('<br/>').map(elem => <div>{elem}</div>);
    return (
      <div>
        <Text className="text-area">{text}</Text>
        <Button onClick={this.props.switchToGame}>{this.props.nextScene === 'Intro' ? 'Restart Game' : 'Continue'}</Button>
      </div>
    );
  }
}

export default TextContainer;
