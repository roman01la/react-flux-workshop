import React from 'react';
import TestUtils from 'react-addons-test-utils';
import assert from 'assert';
import ChildComponent from '../../15-webpack/src/child_component';

describe('ChildComponent', () => {

  let called = false;

  it('should call onUpdate when mounted', () => {

    const component = TestUtils.renderIntoDocument(<ChildComponent onUpdate={() => called = true} />);

    setTimeout(() => assert.equal(called, true), 1000);
  });
});
