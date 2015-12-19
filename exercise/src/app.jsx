import React from 'react';
import { render } from 'react-dom';
import MailBox from './components/mail_box/mail_box';
import LabelsManager from './components/labels_manager/labels_manager';
import { silentSwap } from './lib/atom';
import { fromJS } from 'immutable';

// Init store listeners
import './stores/ui';

export default function renderState(initialState) {

  // Init application state
  silentSwap(fromJS(initialState));

  // Render components into different parts of the document
  render(<MailBox />, document.getElementById('mail-box'));
  render(<LabelsManager />, document.getElementById('labels-manager'));
}
