import React from 'react';

function getStyle(color) {

  return {
    backgroundColor: color
  };
}

const MailLabel = ({ item }) => (

  <li className='mail-label' style={getStyle(item.get('color'))}>{item.get('name')}</li>
);

export default MailLabel;
