import http from 'http';
import path from 'path';
import express from 'express';
import { createFactory } from 'react';
import { renderToString } from 'react-dom/server';
import Root from '../components/root';
import getLayout from './templates/layout';
import initialState from '../config/initial_state';
import { silentSwap } from '../lib/atom';
import { fromJS } from 'immutable';

const RootFactory = createFactory(Root);

const HOST = 'localhost';
const PORT = 3000;

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {

  silentSwap(fromJS(initialState));

  res.send(getLayout(renderToString(RootFactory()), initialState));
});

server.listen(PORT, HOST,
  (err) => err ? console.error(err) : console.log(`Express server is listening at http://${HOST}:${PORT}`));
