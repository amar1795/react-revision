// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import './index.css';
import { SettingsProvider } from './Settingscontext';

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
    <Root />
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
