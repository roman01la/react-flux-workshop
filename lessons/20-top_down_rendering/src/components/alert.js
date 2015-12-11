import React from 'react';
import PureRenderer from '../lib/pure_renderer';
import { emit } from '../lib/dispatcher';

const Alert = ({ state }) => (

  <dialog open={state.get('visible')} onClick={closeAlert}>
    <strong>Hello!</strong>
  </dialog>
);

function closeAlert() {

  emit('SET_STATE_IN', ['alert', 'visible'], false);
}

Alert.displayName = 'Alert';

export default Alert;
// export default PureRenderer(Alert);
