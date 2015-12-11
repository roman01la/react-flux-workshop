/* http://airbnb.io/enzyme/ */

import React from 'react';
import assert from 'assert';
import { createRenderer } from 'react-addons-test-utils';
import ChildComponent from '../../15-webpack/src/child_component';

const props = {
  message: 'msg',
  onUpdate() { return 1; }
}

const shallowRenderer = createRenderer();

shallowRenderer.render(<ChildComponent {...props} />);

const component = shallowRenderer.getRenderOutput();

describe('ChildComponent component', () => {

  const componentProps = shallowRenderer._instance._instance.props;

  it('should render message', () => {

    assert.equal(componentProps.message, props.message);
  });

  it('should call onUpdate', () => {

    assert.equal(componentProps.onUpdate(), 1);
  });
});
