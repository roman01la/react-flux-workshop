const Input = React.createClass({

  render() {

    return React.createElement('input', {
      className: this.props.className,
      type: this.props.type,
      checked: this.props.checked,
      onChange: () => {
        this.props.todo.completed = !this.props.checked;
        this.props.onChange(this.props.todo);
      }
    });
  }
});

window.Input = Input;
