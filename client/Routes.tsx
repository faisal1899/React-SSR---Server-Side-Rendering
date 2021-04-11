import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from './Home';
import UsersList from './user/UsersList';

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={UsersList} />
    </div>
  );
}