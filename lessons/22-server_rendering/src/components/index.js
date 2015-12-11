import React from 'react';
import { render } from 'react-dom';
import { silentSwap } from '../lib/atom';
import { fromJS } from 'immutable';
import Root from './root';

import '../stores/ui';

export default function renderState(state) {

    silentSwap(fromJS(state));

    render(<Root />, document.getElementById('app'));
}
