import { getIn, assocIn, updateIn } from '../lib/atom';
import { listen, emit } from '../lib/dispatcher';
import actions from '../lib/actions';
import { fromJS } from 'immutable';
import hex from 'random-hex-color';

const q = {
  labels: ['labels'],
  filter: ['filter'],
  emails: ['emails']
};

listen('SET_FILTER', (filter) => assocIn(q.filter, filter));

listen('CREATE_LABEL', (name) => {

  updateIn(q.labels, (labels) => labels.push(fromJS({
    selected: false,
    color: hex(),
    name
  })));
});

listen('SET_EMAIL_SELECTION', (email, selected) => {

  updateIn(q.emails, (emails) => {

    return emails.map((e) => e.equals(email) ? e.set('selected', selected) : e);
  });
});

listen('SET_LABEL_SELECTION', (label) => {

  const selected = label.get('selected');

  updateIn(q.labels, (labels) => {

    return labels.map((l) => l.equals(label) ? l.set('selected', !selected) : l);
  });

  const labels = getIn(q.labels);

  updateIn(q.emails, (emails) => {

    return emails.map((email) => {

      if (email.get('selected')) {
        return email.set('labels', labels);
      } else {
        return email;
      }
    });
  });
});
