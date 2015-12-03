import reflux from 'reflux-core';
import {keyboardStateChange} from '../actions/keyboardActions'

export default reflux.createStore({
  init(){
    this.listenTo(keyboardStateChange, this.onKey);
    this.state = {};
  },
  onKey(key, pressed){
    this.state[key] = pressed;
    this.trigger(this.state);
  },
  getState(){
    return this.state;
  }
})

