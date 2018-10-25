import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../home/home.component';
import Page1 from '../page1/page1.component';
import Page2 from '../page2/page2.component';

export default(
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
  </div>
);
