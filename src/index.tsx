import React from 'react';
import ReactDOM from 'react-dom/client';
import { Client } from 'appwrite';

import App from './App';


const client = new Client();
client.setProject('6728ee60001d622e9a7a');

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
