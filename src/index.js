/* global document */

import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';

import Header from './app/header.component';

import history from './app/history';
import routes from './app/routes';

import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router history={history}>
    <div>
      <Header />
      {routes}
    </div>
  </Router>,
  document.getElementById('app'),
);
