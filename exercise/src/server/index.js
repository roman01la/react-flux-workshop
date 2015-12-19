import http from 'http';
import path from 'path';
import express from 'express';
import { createFactory } from 'react';
import { renderToString } from 'react-dom/server';
import bodyParser from 'body-parser';
import { fromJS } from 'immutable';
import initialState from '../config/initial_state';
import { silentSwap } from '../lib/atom';
import MailBox from '../components/mail_box/mail_box';
import LabelsManager from '../components/labels_manager/labels_manager';
import getLayout from './templates/layout';

const MailBoxFactory = createFactory(MailBox);
const LabelsManagerFactory = createFactory(LabelsManager);

const HOST = 'localhost';
const PORT = 3000;
const __DEV__ = process.env.NODE_ENV;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/favicon.ico', (req, res) => res.send(404));

if (__DEV__) {
  app.get('/javascripts/app.js', (req, res) => {
    res.redirect('http://localhost:3001/javascripts/app.js');
  });
}

app.get('*', (req, res) => {

  silentSwap(fromJS(initialState));

  res.send(getLayout(
    renderToString(MailBoxFactory()),
    renderToString(LabelsManagerFactory()),
    initialState));
});

server.listen(PORT, HOST,
  (err) => err ? console.error(err) : console.log(`Express server is listening at http://${HOST}:${PORT}`));
