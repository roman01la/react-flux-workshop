import { listen, emit } from './dispatcher';
import actions from './actions';
import './api';

const state = {
  open: false,
  message: ''
};

const listeners = [];

export function getState() {

  return state;
}

export function addChangeListener(fn) {

  listeners.push(fn);
}

function notify() {

  listeners.forEach((fn) => fn());
}

listen(actions.SHOW_MSG, () => {

  state.open = true;
  notify();
});

listen(actions.HIDE_MSG, () => {

  state.open = false;
  notify();
});

listen(actions.FETCH_MSG, () => {

  emit(actions.API_FETCH_MSG);
});

listen(actions.API_FETCH_MSG_SUCCESS, (message) => {

  state.message = message;
  notify();
});
