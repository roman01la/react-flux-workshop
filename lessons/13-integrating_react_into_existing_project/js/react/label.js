const Label = React.createClass({

  render() {

    return React.createElement('label', {
      onDoubleClick: () => this.props.onDoubleClick(this.props.todo)
    }, this.props.todo.title);
  }
});

window.Label = Label;
