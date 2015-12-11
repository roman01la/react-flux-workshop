const Button = React.createClass({

  render() {

    return React.createElement('button', {
      className: 'destroy',
      onClick: () => this.props.onClick(this.props.todo)
    });
  }
});

window.Button = Button;
