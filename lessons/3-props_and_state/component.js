const Component = React.createClass({

  getInitialState() {

    return { message: 'Hello, world!' };
  },
  getDefaultProps() {

    return { title: 'App' };
  },
  // componentDidMount() {
  //
  //   setTimeout(() => this.setState({ message: 'Updated with state'}), 2000);
  // },
  render() {

    return (

      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
});

ReactDOM.render(<Component title='React' />, document.getElementById('app'));

// setTimeout(function() {
//
//   ReactDOM.render(<Component title='Updated with props' />, document.getElementById('app'));
// }, 2000);
