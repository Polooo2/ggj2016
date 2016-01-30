import React, {Component} from 'react';

class ProgressBar extends Component {
  render() {
    const style = {
      width: `${this.props.progress}%`,
    };

    return (
      <div className={`progress-bar ${this.props.className}`}>
        <div className="progress-bar-active" style={style} />
        <div className="caption">{this.props.caption}</div>
      </div>
    );
  }
}

export default ProgressBar;
