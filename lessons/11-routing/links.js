const Links = React.createClass({
  render() {

    return (

      <ul>
        <li><ReactRouter.Link to='layout-1'>Layout 1</ReactRouter.Link></li>
        <li><ReactRouter.Link to='layout-2'>Layout 2</ReactRouter.Link></li>
      </ul>
    );
  }
});

window.Links = Links;
