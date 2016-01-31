import EventMap from 'eventmap';
import Key from './Key';

const Input = {};

Input.Key = Key;
Input.define = Key.define;

// TODO: Find a different name
Input.key = new EventMap();

window.addEventListener('keydown', evt => {
  Input.key.trigger({
    name: 'down',
    context: Key,
  }, evt.keyCode);
}, true);

window.addEventListener('keyup', evt => {
  Input.key.trigger({
    name: 'up',
    context: Key,
  }, evt.keyCode);
}, true);

export default Input;
