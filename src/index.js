import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './components/TodoApp';
import * as serviceWorker from './serviceWorker';
import TodosContextProvider from './store/todo.context';

ReactDOM.render(
  <React.StrictMode>
    <TodosContextProvider>
    <TodoApp />
    </TodosContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
