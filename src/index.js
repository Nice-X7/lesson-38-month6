import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const initializate = {
  todos: [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    },
  ],
  loading: false
}

const reducer = (state = initializate, action) => {
  switch (action.type) {
    case "loading/data":
      return {
        ...state,
        loading: true
      }

    case "todos/data":
      return {
        ...state,
        todos: action.payload,
        loading: false
      }

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