import * as React from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import confStore from './confStore';

import HomePage from './pages/HomePage';

const store: any = confStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={ HomePage } exact />
          <Redirect to={'/'} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
