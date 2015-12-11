const View = React.createClass({
  render() {

    return (

      <div>
        <Links />
        {this.props.children}
      </div>
    );
  }
});

const IndexLayout = React.createClass({

  render() {

    return <h1>Index Layout</h1>;
  }
});

ReactDOM.render((
  <ReactRouter.Router>
    <ReactRouter.Route path='/' component={View}>
      <ReactRouter.IndexRoute component={IndexLayout} />
      <ReactRouter.Route path='layout-1' component={Layout1} />
      <ReactRouter.Route path='layout-2' component={Layout2} />
    </ReactRouter.Route>
  </ReactRouter.Router>
), document.getElementById('app'));
