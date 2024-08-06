
import React from 'react';
import Auth from '../pages/Auth';
import Landing from '../pages/Landing';

const Routes = [
  {
    path: '/auth',
    element: Auth,
    routeId: 2,
  },
  {
    path: '/',
    element: Landing,
    routeId: 1,
  },
];

export default Routes;
