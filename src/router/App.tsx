import Main from 'pages/Main/index';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
);
export default App;
