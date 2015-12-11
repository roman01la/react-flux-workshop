import React from 'react';
import { render } from 'react-dom';
import { emit } from './dispatcher';
import { SHOW_MSG, HIDE_MSG, FETCH_MSG } from './actions';
import { getState, addChangeListener } from './store';


const Component = React.createClass({
  getInitialState() {

    return getState();
  },
  componentDidMount() {

    addChangeListener(this._update);
  },
  _update() {

    this.setState(getState());
  },
  _toggleSidebar() {

    emit(this.state.open ? HIDE_MSG : SHOW_MSG);
  },
  _fetch() {

    emit(FETCH_MSG);
  },
  render() {

    console.log('RENDER');

    return (

      <div>
        {this.state.open ? <p>{this.state.message}</p> : null}
        <button onClick={this._toggleSidebar}>toggle message</button>
        <button onClick={this._fetch}>fetch message</button>
      </div>
    )
  }
});

export default Component;
