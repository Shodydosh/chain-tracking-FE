import React from 'react';
import Investigate from '../pages/Investigate';
import Landing from '../pages/Landing';
import Home from '../pages/Home';

const Routes = [
  {
    path: '/',
    element: Home,
    routeId: 0,
  },
  {
    path: '/investigate',
    element: Investigate,
    routeId: 1,
  },
  {
    path: '/investigate/txhash',
    element: Investigate,
    routeId: 1_1,
  },
  {
    path: '/investigate/address',
    element: Investigate,
    routeId: 1_2,
  },
  {
    path: '/2',
    element: Landing,
    routeId: 1,
  },
];

export default Routes;
