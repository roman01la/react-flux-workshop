import React from 'react';
import MailLabel from './mail_label';

function getItems(items) {

  // Display only selected labels
  return items
    .filter((item) => item.get('selected'))
    .map((item) => <MailLabel key={item.get('name')} item={item} />);
}

const MailLabelsList = ({ labels }) => (

  <div className='mail-labels-list'>
    <ul>{getItems(labels)}</ul>
  </div>
);

export default MailLabelsList;
