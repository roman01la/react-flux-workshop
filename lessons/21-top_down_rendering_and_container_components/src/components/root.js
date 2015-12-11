import React from 'react';
import Form from './form';
import Alert from './alert';
import connect from '../lib/connect';

const Root = React.createClass({
  propTypes: {
    fname: React.PropTypes.string.isRequired,
    lname: React.PropTypes.string.isRequired,
    visible: React.PropTypes.bool.isRequired
  },
  statics: {
    queries: {
      fname: ['form', 'fname'],
      lname: ['form', 'lname'],
      visible: ['alert', 'visible']
    }
  },
  render() {

    const { fname, lname, visible } = this.props;

    return (

      <div>

        <Form fname={fname} lname={lname} />
        <Alert visible={visible} />

      </div>
    );
  }
})

export default connect(Root);
