import React, { Component } from 'react';
import Button from './Button';
import Text from './Text';
import TypedText from './TypedText';

class TextContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDecisions: false,
    }
  }

  onTypingDone = () => {
    this.setState({
      showDecisions: true,
    });
  };

  onButtonClick = (dec, i) => {
    this.setState({
      showDecisions: false,
    });

    this.props.selDecision(dec.effect, false, i);
  };

  render() {
    // We are doing <TypedText><Text> and <Text><TypedText>, otherwise it wouldn't recognize it as
    // changes in the VDOM and won't perform the update

    if (this.props.selectionVisible) {
      const decisions = this.props.selectedDecision.selection.map((dec, i) => {
        return (
          <Button
            key={i}
            className={`button-$(i)`}
            onClick={() => this.onButtonClick(dec, i)}>{i + 1}. {dec.text}</Button>
        );
      });
      return (
        <div>
          <TypedText className="decision-text" onTypingDone={this.onTypingDone}>
            <Text className="text-area">{this.props.selectedDecision.intro}</Text>
          </TypedText>
          <div className={`decision-container ${(this.state.showDecisions) ? 'show' : ''}`}>{decisions}</div>
        </div>
      );
    }
    // replace br/ tag behavior with divs
    var text = (this.props.resultText || '').split('<br/>').map((elem, lineIndex) => <div key={lineIndex} className="line">{elem}</div>);
    return (
      <div>
        <Text className="text-area"><TypedText>{text}</TypedText></Text>
        <Button className="button-right" onClick={this.props.switchToGame}>{this.props.nextScene === 'Intro' ? 'Restart Game' : 'Continue'}</Button>
      </div>
    );
  }
}

export default TextContainer;
