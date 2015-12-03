import React, { Component } from 'react';
import pixi from 'pixi.js';
import {Stage, Sprite, VectorText} from 'react-pixi';
import Player from './characters/Player.js';

import Game from './Game';
Game.start();

const SPEED = 0.005;
export class App extends Component {
  constructor() {
    super();
    this.state = {rotation: 0};
  }
  componentDidMount() {
    var tick = () => {
      this.setState({rotation: this.state.rotation + Math.PI*SPEED});
      requestAnimationFrame(tick);
    };
    tick();
  }
  render() {
    return (
        <Stage backgroundColor={'#ffffff'}>
          <Player />
        </Stage>
    );
  }
}
