import React from 'react';
import { render } from 'react-dom';
import * as Store from './lib/store';
import Root from './components/root';

const initialState = {

  form: {
    fname: 'John',
    lname: 'Doe'
  },
  alert: {
    visible: false
  }
};

Store.initState(initialState);
Store.addChangeListener(renderState);

renderState(Store.getState());

function renderState(state) {

  render(<Root state={state} />, document.getElementById('app'));
}
