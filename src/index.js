import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { persistGate } from 'redux-persist/integration/react';

import App from './App';
import { Elements } from '@stripe/react-stripe-js'

import { stripePromise } from './utils/Stripe/Stripe.utils';
import { store, persistor } from './Store/Store';

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <persistGate persistor={persistor}>
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <App />
        </Elements> 
      </BrowserRouter>
      </persistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);
