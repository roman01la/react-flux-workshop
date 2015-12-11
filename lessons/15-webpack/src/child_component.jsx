import React from 'react';

const ChildComponent = React.createClass({
  componentDidMount() {

    setTimeout(() => this.props.onUpdate('Message from child'), 1000);
  },
  render() {

    return <h2>{this.props.message}</h2>;
  }
});

export default ChildComponent;
