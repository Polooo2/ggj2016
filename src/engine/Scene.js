import React, {Component, PropTypes} from 'react';

class Scene extends Component {
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.children,
  };

  render() {
    return (
      <div className={`scene ${this.props.name}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Scene;
