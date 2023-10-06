import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authcontext/AuthContext';
import { MovieContextProvider } from './context/moviecontext/MovieContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>

      <App />
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

