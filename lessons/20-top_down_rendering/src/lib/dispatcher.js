const listeners = {};

export function listen(action, fn) {

  listeners[action] = listeners[action] || [];
  listeners[action].push(fn);
}

export function emit(action, ...data) {

  console.log('emit', action, ...data);

  const fns = listeners[action];

  if (fns) {

    fns.forEach((fn) => fn(...data));
  }
}
