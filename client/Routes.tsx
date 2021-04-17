import React from 'react';
import { RouteConfig } from 'react-router-config';
import Admins from './Admins';

import App from './App';
import Home from './Home';
import NotFound from './NotFound';
import UsersList from './user/UsersList';

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/users" component={UsersList} />
//     </div>
//   );
// }

// Have to use this sentax to use react-router-config which is used for SSR.
export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...UsersList,
        path: '/users',
      },
      {
        ...Admins,
        path: '/admins',
      },
      {
        ...NotFound,
      }
    ]
  }
] as RouteConfig[];