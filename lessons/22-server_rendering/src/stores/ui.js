import { assocIn } from '../lib/atom';
import { listen } from '../lib/dispatcher';

const q = {
  visible: ['dialog', 'visible'],
  title: ['title']
};

listen('CLOSE_DIALOG', () => assocIn(q.visible, false));
listen('CHANGE_TITLE', (nextTitle) => assocIn(q.title, nextTitle));
