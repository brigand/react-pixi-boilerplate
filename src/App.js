import React, { Component } from 'react';
import pixi from 'pixi.js';
import {Stage, Sprite, VectorText} from 'react-pixi';

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
        <Stage>
          <Sprite
            image={require('../assets/cupcake.png')}
            x={400}
            y={300}
            rotation={this.state.rotation}
            pivot={new pixi.Point(640/2, 577/2)}
          />
        </Stage>
    );
  }
}
