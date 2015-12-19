import React from 'react';
import MailItem from './mail_item';

function getItems(items) {
  return items.map((item, i) => <MailItem key={i} item={item} />);
}

const MailList = ({ emails }) => (

  <div className='mail-list'>
    <ul>{getItems(emails)}</ul>
  </div>
);

export default MailList;
