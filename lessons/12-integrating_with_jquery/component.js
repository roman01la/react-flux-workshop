const DatePicker = React.createClass({
  getInitialState() {

    return { date: '12/01/2015' }
  },
  componentDidMount() {

    $(this.refs.input).datepicker({
      autoSize: true,
      defaultDate: this.state.date,
      onSelect: this._onSelect
    });
  },
  componentWillUpdate(nextProps, nextState) {

    $(this.refs.input).datepicker('setDate', nextState.date);
  },
  _onSelect(date) {

    const month = Number(date.split('/')[0]);

    if (month < new Date().getUTCMonth() + 1) {

      alert('Can not select previous month!');
      this.setState(this.state);
    } else {

      this.setState({ date });
    }
  },
  render() {

    return <input ref='input' />;
  }
});

ReactDOM.render(<DatePicker />, document.getElementById('app'));
