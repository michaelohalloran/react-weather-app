import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),

);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import ReduxPromise from "redux-promise";

// import App from "./components/app";
// import reducers from "./reducers";

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>,
//   document.querySelector(".container")
// );
