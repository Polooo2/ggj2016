import React, { Component, PropTypes } from 'react';
import EventMap from 'eventmap';

const eventMap = new EventMap();

class World extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: function() {},
  };

  componentDidMount() {
    eventMap.on('change', (key, value) => {
      this.props.onChange(key, value);
    });
  }

  render() {
    return null;
  }
}

World.values = {};

World.set = (key, value) => {
  eventMap.trigger('change', key, value);
  World.values[key] = value;
};

World.get = key => World.values[key];

export default World;
