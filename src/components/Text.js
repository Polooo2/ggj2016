import React, {Component} from 'react';

class Text extends Component {
  render() {
    let className = ['text'];

    if (this.props.className) {
      className.push(this.props.className);
    }

    return <div className={className.join(' ')}>{this.props.children}</div>;
  }
}

export default Text;
