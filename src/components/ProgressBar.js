import React, {Component} from 'react';

class ProgressBar extends Component {
  render() {
    const style = {
      width: `${this.props.progress}%`,
    };

    return (
      <div className="progress-bar">
        <div className="progress-bar-active" style={style} />
      </div>
    );
  }
}

export default ProgressBar;
