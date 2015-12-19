import React from 'react';
import MailSelect from './mail_select';
import MailLabelsList from './mail_labels_list';
import { emit } from '../../lib/dispatcher';

function formatDate(ts) {
  const d = new Date(Number(ts));
  return `${d.getUTCDate()}/${d.getUTCMonth()}/${d.getUTCFullYear()}`;
}

function shortMsg(str) {
  return str.length > 80 ? str.substr(0, 77) + '...' : str;
}

function setSelectionState(item) {
  return (checked) => emit('SET_EMAIL_SELECTION', item, checked);
}

const MailItem = ({ item }) => (

  <div className='mail-item'>
    <MailSelect onChange={setSelectionState(item)} checked={item.get('selected')} />
    <div className='from'><span><strong>{item.get('from')}</strong></span></div>
    <div className='subject'><span>{item.get('subject')}</span></div>
    <MailLabelsList labels={item.get('labels')} />
    <div className='sent-at'><span>{formatDate(item.get('sent_at'))}</span></div>
  </div>
);

export default MailItem;
