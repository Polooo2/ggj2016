import React, { Component } from 'react';
import Button from './Button';
import Text from './Text';
import TypedText from './TypedText';

class TextContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDecisions: false,
    }
    this.continueValid = false;
  }

  componentDidMount() {
    const that = this;
    // This seems to be off by one
    document.addEventListener('keyup', e => {
      const keyCode = e.keyCode || e.which;
      console.log('textKey', 1);

      if (that.state.showDecisions) {
        if (keyCode >= 49 && keyCode <= 57 && that.props.selectedDecision) {
          const normalizedKey = keyCode - 49;
          console.log('key', normalizedKey, keyCode);
          this.onButtonClick(that.props.selectedDecision.selection[normalizedKey], normalizedKey);
        }
      } else if (this.continueValid) {
        if (keyCode === 13 || keyCode === 32) {
          that.props.switchToGame();
        }
      }
    }, true);
  }

  onContinue = () => {
    if (this.props.onContinue) {
      this.props.onContinue();
    }

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
      this.continueValid = false;
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
          {(!this.state.showDecisions) ? <Button className="button-right" onClick={this.onContinue}>Continue</Button> : null}
          <div className={`decision-container ${(this.state.showDecisions) ? 'show' : ''}`}>{decisions}</div>
        </div>
      );
    }
    // replace br/ tag behavior with divs
    var text = (this.props.resultText || '').split('<br/>')
      .map((elem, lineIndex) => <div key={lineIndex} className="line">{elem}</div>);
    this.continueValid = true;
    return (
      <div>
        <Text className="text-area"><TypedText>{text}</TypedText></Text>
        <Button className="button-right" onClick={this.props.switchToGame}>{this.props.nextScene === 'Intro'
          ? 'Restart Game' : 'Continue'}</Button>
      </div>
    );
  }
}

export default TextContainer;
