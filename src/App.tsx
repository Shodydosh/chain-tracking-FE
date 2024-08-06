import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import LayoutWrapper from './layout';
import AllRoutes from './layout/Routes';

function App() {
  return (
    <Router>
      <LayoutWrapper allroutes={AllRoutes} />
    </Router>
  );
}

export default App;
