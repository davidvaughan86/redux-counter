
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/RootReducer';

const REDUX_DEV_TOOLS =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // connect redux developer tools

  const store = createStore(rootReducer, REDUX_DEV_TOOLS); // attach the reducing function to the create store
  console.log({store})
  console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

