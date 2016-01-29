import React, {Component} from 'react';

class Button extends Component {
  render() {
    let className = ['button'];

    if (this.props.className) {
      className.push(this.props.className);
    }

    return <div className={className.join(' ')} onClick={this.props.onClick}>{this.props.children}</div>;
  }
}

export default Button;
