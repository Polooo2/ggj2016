import React, { Component } from 'react';

class Credits extends Component {
  render() {
    return (
      <div className="credits">
        <div>Made for Global Game Jam</div>
        <ul>
          <li key={0}>Johannes Stein</li>
          <li key={1}>Dawid Pach</li>
          <li key={2}>Luca Lombardo</li>
        </ul>
        <div>Special thanks to Malcolm Crum, Ruth Bosch and all playtesters.</div>
        <div>Uses sounds from freesound.org</div>
      </div>
    );
  }
}

export default Credits;
