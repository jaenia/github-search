import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import pathUrl from './pathUrl';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {pathUrl.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
