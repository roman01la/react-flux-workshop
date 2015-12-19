import React from 'react';
import Label from './label';
import { emit } from '../../lib/dispatcher';

function setSelectionState(item) {
  return () => emit('SET_LABEL_SELECTION', item);
};

function getItems(items) {

 return items.map((item) => {
   return <Label key={item.get('name')} label={item} onClick={setSelectionState(item)} />;
 });
}

const LabelsList = ({ labels }) => (

  <div className='labels-list'>
    <ul>{getItems(labels)}</ul>
  </div>
);

export default LabelsList;
