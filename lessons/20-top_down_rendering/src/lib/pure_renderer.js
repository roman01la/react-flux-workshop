import Immutable from 'immutable';

import React from 'react';

const PureRenderer = (Component) => {

  return React.createClass({

    shouldComponentUpdate(nextProps) {

      return Object.keys(nextProps)
        .some((prop) => Immutable.is(nextProps[prop], this.props[prop]) === false);
    },
    render() {

      console.log('Render', Component.displayName);

      return <Component {...this.props} />;
    }
  });
};

export default PureRenderer;
