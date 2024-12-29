import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // For Redux DevTools
import {thunk} from 'redux-thunk';
import { userReducer } from './reducer';

// Create the Redux store with thunk and Redux DevTools
const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Integrate Redux DevTools
);

export default store;
