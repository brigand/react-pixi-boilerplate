import React from 'react';
import pixi from 'pixi.js';
import {Sprite} from 'react-pixi';
import PlayerStore from '../stores/PlayerStore';
import providesStore from 'reflux-provides-store';

@providesStore(PlayerStore)
export default class Player extends React.Component {
  render(){
    var {left, attacking, direction} = this.props.store;
    var sprites = {
      normal: require('../../assets/guy.png'),
      attacking: require('../../assets/guy_attacking.png'),
    };
    var scale = direction === 'left' ? new pixi.Point(-1, 1) : new pixi.Point(1, 1);
    return (
      <Sprite x={left} y={520} image={attacking ? sprites.attacking : sprites.normal} scale={scale} pivot={new pixi.Point(64, 128)} />
    )
  }
}
