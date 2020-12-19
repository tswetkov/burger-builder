import 'regenerator-runtime/runtime.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { store } from './redux/store';

import { App } from './App';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;

const root = document.getElementById('root');

if (!root) throw new Error('Element with id "root" is not founded');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </Provider>,
  root,
);
