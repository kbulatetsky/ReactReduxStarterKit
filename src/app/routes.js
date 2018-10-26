import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/home.component';
import Page1 from '../page1/page1.component';
import Page2 from '../page2/page2.component';

export const routesCollection = [
  { component: Home, path: '/', exact: true },
  { component: Page1, path: '/page1', exact: true },
  { component: Page2, path: '/page2', exact: true },
];

export default(
  <Switch>
    {routesCollection.map(route => <Route key={route.path} {...route} />)}
  </Switch>
);
