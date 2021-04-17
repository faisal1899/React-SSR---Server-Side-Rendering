import React from 'react';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUsers } from './actions';
import Header from './Header';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      <div>{renderRoutes(route.routes)}</div>
    </div>
  )
}

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUsers()),
}