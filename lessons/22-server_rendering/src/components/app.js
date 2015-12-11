import React from 'react';
import connect from '../lib/connect';
import { emit } from '../lib/dispatcher';

const closeDialog = () => emit('CLOSE_DIALOG');
const changeTitle = (nextTitle) => emit('CHANGE_TITLE', nextTitle);

const App = React.createClass({
  statics: {
    queries: {
      visible: ['dialog', 'visible'],
      title: ['title']
    }
  },
  componentDidMount() {

    setTimeout(() => changeTitle('All hail to the client!'), 500);
  },
  render() {

    const { visible, title } = this.props;

    return (

      <div>
        <h1>{title}</h1>
        <dialog open={visible} onClick={closeDialog}>Yo!</dialog>
      </div>
    );
  }
});

export default connect(App);
