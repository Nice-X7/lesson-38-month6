import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const initialization = {
  todos: [],
  loading: false
}

const reducer = (state = initialization, action) => {
  switch (action.type) {
    case "loading/data":
      return {
        loading: true
      }

    case "todos/data":
      return {
        todos: action.payload,
        loading: false
      }

    case "delete/todo/start":
      return {
        ...state,
        loading: true,
      }

    case "delete/todo":
      return {
        ...state,
        loading: false,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }

    case "check/click/finished":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            }
          }

          return item
        })
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