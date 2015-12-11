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
        <h1>{this.state.message}</h1>
        <ChildComponent label={this.props.label} onUpdate={this._update} />
      </div>
    );
  }
});

ReactDOM.render(<ParentComponent label='Change parent text' />, document.getElementById('app'));
