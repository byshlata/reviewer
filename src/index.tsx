import React, { Suspense } from 'react';

import ReactDOM from 'react-dom/client';
import 'index.sass';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { App } from './app/App';
import { store } from './store/store';

import './18n';
import { Auth0ProviderWithNavigate } from 'providers';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <HashRouter>
    <Provider store={store}>
      <Auth0ProviderWithNavigate>
        <Suspense>
          <App />
        </Suspense>
      </Auth0ProviderWithNavigate>
    </Provider>
  </HashRouter>,
);
