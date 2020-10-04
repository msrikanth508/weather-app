import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import polyfill from './polyfill';

const rootElement = document.getElementById('root');

async function LoadStarter() {
  // check if browser needs intl-dateFormat polyfill
  await polyfill();

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
}

LoadStarter();
