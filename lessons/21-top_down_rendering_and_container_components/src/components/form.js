import React from 'react';
import PureRenderer from '../lib/pure_renderer';
import { emit } from '../lib/dispatcher';
import Input from './input';

const Form = ({ fname, lname }) => (

  <form onSubmit={showAlert}>
    <Input value={fname} onChange={setFName} />
    <Input value={lname} onChange={setLName} />
    <button>Say Hi!</button>
  </form>
);

function setFName(event) {

  emit('SET_FORM_FNAME', event.target.value);
}

function setLName(event) {

  emit('SET_FORM_LNAME', event.target.value);
}

function showAlert(event) {

  event.preventDefault();

  emit('SET_ALERT_STATE', true);
}

Form.displayName = 'Form';

export default PureRenderer(Form);
