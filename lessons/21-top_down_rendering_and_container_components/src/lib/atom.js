let state;
const listeners = {};

export function getState() {

  return state;
}

export function notifySwap(query) {

  let sQuery = JSON.stringify(query);
  sQuery = sQuery.slice(0, sQuery.length - 1);

  Object.entries(listeners)
    .forEach(([lQuery, fns]) => {

      if (lQuery.startsWith(sQuery)) {
        fns.forEach((fn) => fn());
      }
    });
}

export function swap(nextState, query) {

  state = nextState;
  notifySwap(query);
  return state;
}

export function silentSwap(nextState) {

  state = nextState;
}

export function addChangeListener(queries, fn) {

  Object.values(queries)
    .forEach((query) => {
      const sQuery = JSON.stringify(query);
      listeners[sQuery] = listeners[sQuery] || [];
      listeners[sQuery].push(fn);
    });
}

export function removeChangeListener(queries, fn) {

  Object.values(queries)
    .forEach((query) => {
      const sQuery = JSON.stringify(query);
      listeners[sQuery] = listeners[sQuery].filter((lfn) => lfn === fn);
    });
}

export function assocIn(query, value) {

  swap(state.setIn(query, value), query);
}

export function updateIn(query, fn) {

  swap(state.updateIn(query, fn), query);
}

export function getIn(query) {

  return state.getIn(query);
}
