import EventMap from 'eventmap';
//import {Defaults} from '../data';

let World = new EventMap();
World.stateData = {};

/*Object.keys(Defaults).forEach(key => {
  World.stateData[key] = Defaults[key];

  World.on(key, value => World.stateData[key] = World.stateData[key] + value);
});

World.reset = function(key) {
  World.trigger(key, Defaults[key]);
};

World.resetAll = function() {
  Object.keys(Defaults).forEach(key => World.reset(key));
};*/

export default World;
