import React from 'react';
import PureRenderer from '../lib/pure_renderer';
import { emit } from '../lib/dispatcher';

const Alert = ({ visible }) => (

  <dialog open={visible} onClick={closeAlert}>
    <strong>Hello!</strong>
  </dialog>
);

function closeAlert() {

  emit('SET_ALERT_STATE', false);
}

Alert.displayName = 'Alert';

export default PureRenderer(Alert);
