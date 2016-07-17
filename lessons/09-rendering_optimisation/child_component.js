const ChildComponent = React.createClass({

  // shouldComponentUpdate(nextProps, nextState) {
  //
  //   return nextProps.label !== this.props.label;
  // },
  _onUpdate() {

    if (this.props.onUpdate) {

      this.props.onUpdate('Message from child');
    }
  },
  render() {

    console.log('Render!');

    return <button onClick={this._onUpdate}>{this.props.label}</button>;
  }
});

window.ChildComponent = ChildComponent;
