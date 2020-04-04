import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import SiteNav from '../SiteNav';
import PageList from '../PageList';
import './App.css';

function App() {
  return (
    <Router>
      <SiteNav />
      <Switch>
        <Route exact path="/">
          <PageList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
