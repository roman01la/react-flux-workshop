import React from 'react';
import PureRenderer from '../lib/pure_renderer';
import { emit } from '../lib/dispatcher';
import Input from './input';

const Form = ({ state }) => (

  <form onSubmit={showAlert}>
    <Input value={state.get('fname')} onChange={setFName} />
    <Input value={state.get('lname')} onChange={setLName} />
    <button>Say Hi!</button>
  </form>
);

function setFName(event) {

  emit('SET_STATE_IN', ['form', 'fname'], event.target.value);
}

function setLName(event) {

  emit('SET_STATE_IN', ['form', 'lname'], event.target.value);
}

function showAlert(event) {

  event.preventDefault();

  emit('SET_STATE_IN', ['alert', 'visible'], true);
}

Form.displayName = 'Form';

export default Form;
// export default PureRenderer(Form);
