const Component = ({ items }) => (

  <div>

    <h2>I'm stateless!</h2>

    <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>

  </div>
);

ReactDOM.render(
  <Component items={[ 'Item #4', 'Item #5', 'Item #6' ]} />,
  document.getElementById('app'));
