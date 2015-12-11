import React from 'react';
import { getIn, addChangeListener, removeChangeListener } from './atom';
import equal from 'deep-equal';
import { is } from 'immutable';

function resolveQueries(queries) {

  return Object.entries(queries)
    .reduce((resolved, [name, query]) => {
      resolved[name] = getIn(query);
      return resolved;
    }, {});
}

function stateEqual(state, nextState) {

  return Object.keys(state)
    .every((name) => is(state[name], nextState[name]));
}

export default function connect(Component) {

  const queries = Component.queries; // Get queries into the atom state
  const getNextState = () => resolveQueries(queries); // Construct state producer fn

  let state = {};

  return React.createClass({

    // Set name of the component for debugging
    displayName: `${Component.displayName}::Connected`,
    componentWillMount() {

      // Get initial state
      state = getNextState();

      // Re-render when data behind the queries has been changed
      addChangeListener(queries, this._update);
    },
    componentWillReceiveProps(nextProps) {

      // Re-render if props has been changed
      if (equal(this.props, nextProps) === false) {

        this.forceUpdate();
      }
    },
    shouldComponentUpdate() {

      // Ignore SCU. Re-render only when props or data behind the queries has been changed
      return false;
    },
    componentWillUnmount() {

      removeChangeListener(queries, this._update);
    },
    _update() {

      const nextState = getNextState();

      // Re-render if current and next snapshots of data behind the queries are not equal
      if (stateEqual(state, nextState) === false) {

        state = nextState;
        this.forceUpdate();
      }
    },
    render() {

      console.log('Render', Component.displayName);

      // Pass in both props and data behind the queries
      return <Component {...this.props} {...state} />;
    }
  });
}
