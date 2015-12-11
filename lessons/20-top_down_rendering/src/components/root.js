import React from 'react';
import Form from './form';
import Alert from './alert';
import PureRenderer from '../lib/pure_renderer';

const Root = ({ state }) => (

  <div>

    <Form state={state.get('form')} />
    <Alert state={state.get('alert')} />

  </div>
);

Root.displayName = 'Root';

export default Root;
// export default PureRenderer(Root);
