// Root.js
import React from 'react';
import App from './App';
import { SettingsProvider } from './Settingscontext';

const Root = () => {
  return (
    // <SettingsProvider>
      <App />
    // </SettingsProvider>
  );
};

export default Root;
