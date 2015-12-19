import React from 'react';
import MailList from './mail_list';
import connect from '../../lib/connect';

const MailBox = React.createClass({
  statics: {
    queries: {
      emails: ['emails']
    }
  },
  render() {

    return (

      <div className='mail-box'>
        <MailList emails={this.props.emails} />
      </div>
    );
  }
})

export default connect(MailBox);
