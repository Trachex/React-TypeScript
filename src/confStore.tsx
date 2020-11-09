import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { ApplicationState, reducers } from './store';

export default function configureStore(): Store<ApplicationState> {

return createStore<ApplicationState, any, any, any>(
    reducers,
    applyMiddleware(thunk)
  );
}