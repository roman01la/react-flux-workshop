import { listen, emit } from './dispatcher';
import actions from './actions';

listen(actions.API_FETCH_MSG, () => {

  // fetch('/api/message')
  //   .then((res) => res.text())
  //   .then((message) => emit(actions.API_FETCH_MSG_SUCCESS, message));
  //   .catch((error) => emit(actions.API_FETCH_MSG_FAIL, error))

  emit(actions.API_FETCH_MSG_SUCCESS, 'Hello, world!');
});
