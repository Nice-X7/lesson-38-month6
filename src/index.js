import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const initializate = []

const reducer = (state = initializate, action) => {
  switch (action.type) {
    case "todos/loading":
      return action.payload

    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);