import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from '@store/modules/rootReducer';

const middlewares = [thunk];

const store = createStore (
  rootReducer,
  applyMiddleware(...middlewares)
  //   composeWithDevTools(applyMiddleware(middlewares))
);

export {store};
