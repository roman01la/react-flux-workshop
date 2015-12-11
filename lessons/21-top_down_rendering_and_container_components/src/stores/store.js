import { assocIn } from '../lib/atom';
import { listen, emit } from '../lib/dispatcher';
import actions from '../lib/actions';

const q = {
  alertState: ['alert', 'visible'],
  form: {
    fname: ['form', 'fname'],
    lname: ['form', 'lname']
  }
};

listen('SET_FORM_FNAME', (value) => assocIn(q.form.fname, value));
listen('SET_FORM_LNAME', (value) => assocIn(q.form.lname, value));

listen('SET_ALERT_STATE', (state) => assocIn(q.alertState, state));
