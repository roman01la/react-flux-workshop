import Immutable from 'immutable';
import { listen, emit } from './dispatcher';
import actions from './actions';

let state = null;

const listeners = [];

export function getState() {

  return state;
}

export function addChangeListener(fn) {

  listeners.push(fn);
}

export function initState(initialState) {

  state = Immutable.fromJS(initialState);
}

function notify(state) {

  listeners.forEach((fn) => fn(state));
}

listen('SET_STATE_IN', (path, value) => {

  state = state.setIn(path, value);
  notify(state);
});
