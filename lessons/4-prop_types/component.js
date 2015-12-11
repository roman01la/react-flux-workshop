const Component = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired,
    // title: React.PropTypes.oneOfType([
    //   React.PropTypes.string,
    //   React.PropTypes.number
    // ])
  },
  getDefaultProps() {

    return { title: 'App' };
  },
  render() {

    return (

      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
});

ReactDOM.render(<Component title='React' />, document.getElementById('app'));
// ReactDOM.render(<Component title={100} />, document.getElementById('app'));
