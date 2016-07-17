const ChildComponent = React.createClass({
  _onUpdate() {

    if (this.props.onUpdate) {

      this.props.onUpdate('Message from child');
    }
  },
  render() {

    return <button onClick={this._onUpdate}>{this.props.label}</button>;
  }
});

window.ChildComponent = ChildComponent;
