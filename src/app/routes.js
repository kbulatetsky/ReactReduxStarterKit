import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../home/home.component';
import About from '../about/about.component';

export default(
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
  </div>
);
