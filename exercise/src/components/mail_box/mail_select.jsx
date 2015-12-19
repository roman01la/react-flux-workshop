import React from 'react';
import Input from '../lib/input';

const MailSelect = ({ onChange, checked}) => (

  <div className='mail-select'>
    <Input type='checkbox' className='checkbox' checked={checked} />
    <div className='checkbox' onClick={() => onChange(!checked)} />
  </div>
);

export default MailSelect;
