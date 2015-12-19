import React from 'react';
import Field from '../lib/field';
import LabelsList from './labels_list';
import connect from '../../lib/connect';
import { emit } from '../../lib/dispatcher';

const setFilter = (value) => emit('SET_FILTER', value);

function createLabel(count, label) {

  return function(event) {

    event.preventDefault();

    if (count === 0) {
      emit('CREATE_LABEL', label)
    }
  };
};

function filterLabels(labels, filter) {

  return labels.filter((label) => label.get('name').toLowerCase().includes(filter.toLowerCase()));
}

const LabelsManager = React.createClass({
  statics: {
    queries: {
      labels: ['labels'],
      filter: ['filter']
    }
  },
  render() {

    const { labels, filter } = this.props;
    const filteredLabels = filterLabels(labels, filter);

    return (

      <div className='labels-manager'>
        <form onSubmit={createLabel(filteredLabels.size, filter)}>
          <Field type='text' onChange={(event) => setFilter(event.target.value)} />
        </form>
        <LabelsList labels={filteredLabels} />
      </div>
    );
  }
});

export default connect(LabelsManager);
