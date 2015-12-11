import React from 'react';
import { render } from 'react-dom';
import ChildComponent from './child_component';

const ParentComponent = React.createClass({
  getInitialState() {

    return { message: 'Hello, world!' };
  },
  _update(message) {

    this.setState({ message });
  },
  render() {

    return (

      <div>
        <h1>{this.props.title}</h1>
        <ChildComponent message={this.state.message} onUpdate={this._update} />
      </div>
    );
  }
});

render(<ParentComponent title='React' />, document.getElementById('app'));
