import {keyboardStateChange} from './actions/keyboardActions';
import {timeAction} from './actions/timeActions';
import keycode from 'keycode';

export default {
  start: start
};

var getKey = (e) => keycode(e.which);

function start(){
  window.addEventListener('keydown', (e) => {
    keyboardStateChange(getKey(e), true);
  }, true);

  window.addEventListener('keyup', (e) => {
    keyboardStateChange(getKey(e), false);
  }, true);

  var last;
  function tick(time){
    if (!last) last = time; 
    var diff = time - last;
    last = time;
    timeAction(diff);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

