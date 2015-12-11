import React from 'react';
import { render } from 'react-dom';
import { silentSwap } from './lib/atom';
import { fromJS } from 'immutable';
import Root from './components/root';

import './stores/store';

const initialState = {

  form: {
    fname: 'John',
    lname: 'Doe'
  },
  alert: {
    visible: false
  }
};

silentSwap(fromJS(initialState));

render(<Root />, document.getElementById('app'));
