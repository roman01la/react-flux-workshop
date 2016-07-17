const items = [ 'Item #4', 'Item #5', 'Item #6' ];

const Component = React.createClass({

  render() {

    return (

      <div>

        <h2>Hello, world!</h2>

        <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>

      </div>
    );
  }
});

ReactDOM.render(<Component />, document.getElementById('app'));
