import React from 'react';
import ReactDom from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import Header from '../src/header/header.component';
import routes from '../src/app/routes';

import initialState from '../src/app/initialState';
import configureStore from '../src/app/configureStore';

export function renderHTML(componentHTML) {
  return `
  <!DOCTYPE html>
  <html>
      <head>
          <title>React Redux Starter Kit</title>
          <link rel="stylesheet" type="text/css" href="styles.css">
      </head>
      <body>
          <div id="app">${componentHTML}</div>
          <script src="/main.js"></script>
      </body>
  </html>
  `;
}

export function getComponentString(req) {
  const context = { };
  const store = configureStore(initialState);

  const componentString = ReactDom.renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <div>
          <Header />
          {routes}
        </div>
      </StaticRouter>
    </Provider>,
  );
  return componentString;
}
