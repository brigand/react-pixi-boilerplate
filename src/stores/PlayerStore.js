import reflux from 'reflux-core';
import {timeAction} from '../actions/timeActions'
import InputStore from './InputStore.js';

export default reflux.createStore({
  init(){
    this.listenTo(timeAction, this.onTick);
    this.state = {left: 0, speed: 0.5, attacking: false, direction: 'left'};
  },
  onTick(diff){
    var {a, d, space} = InputStore.getState();

    if (a) {
      this.state.left -= this.state.speed * diff;
      this.state.direction = 'left';
      this.trigger(this.state);
    }
    if (d) {
      this.state.left += this.state.speed * diff;
      this.state.direction = 'right';
      this.trigger(this.state);
    }
    if (space && !this.state.attacking) {
      this.state.attacking = true;
      this.trigger(this.state);
    }
    else if (!space && this.state.attacking) {
      this.state.attacking = false;
      this.trigger(this.state);
    }
  },
  getState(){
    return this.state;
  }
})

