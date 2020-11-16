import * as React from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import confStore from './confStore';

import HomePage from './pages/HomePage';
import RoomPage from './pages/RoomPage';

const store: any = confStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={ HomePage } exact />
          <Route path='/rooms' component={ RoomPage } />
          {/* <Route path='/booking' component={  } /> */}
          <Redirect to={'/'} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
