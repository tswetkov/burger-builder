import 'regenerator-runtime/runtime';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { css } from 'astroturf';
import { history } from 'src/utils';
import { store } from 'src/store';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { App } from './App';

css`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }

  :root {
    --header-height: 56px;
    --app-color-white: #fff;
  }
`;

const root = document.getElementById('root');

if (!root) throw new Error('Element with id "root" is not founded');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Router>
  </Provider>,
  root,
);
