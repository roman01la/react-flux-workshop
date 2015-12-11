const Component = React.createClass({

  getInitialState() {

    return { valid: false };
  },
  _submit(event) {

    event.preventDefault();

    if (this.state.valid) {
      console.log('Submit!');
    } else {
      console.log('Invalid name!');
    }
  },
  _validate(event) {

    const value = event.target.value;
    // const value = this.refs.name.value;

    this.setState({ valid: value.length > 2 });
  },
  render() {

    return (

      <form onSubmit={this._submit}>

        <input ref='name' placeholder='your name' onChange={this._validate}
               style={{ background: this.state.valid ? 'white' : 'red' }} />

        <button>Submit</button>

      </form>
    );
  }
});

ReactDOM.render(<Component />, document.getElementById('app'));
