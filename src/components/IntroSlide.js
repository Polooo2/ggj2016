import React, { Component } from 'react';
import Button from './Button';

class IntroSlide {
  render() {
    return (
      <div className={`intro-slide {this.props.className}`}>
        <div className="intro-slide text">{this.props.text}</div>
        <Button onClick={this.props.onClick}>1. {this.props.button}</Button>
      </div>
    );
  }
}

export default IntroSlide;
