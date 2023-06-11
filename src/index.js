import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    text: '#212121',
    black: '#000000',
    white: '#ffffff',
    gray: '#707070',
    lightGray: '#babdb7',
    green: '#00ff00',
    red: '#ff0000',
    lightBlue: '#14acdf',
  },
  shadows: {
    shadow: '0px 3px 20px 2px rgba(0, 0, 0, 0.1)',
  },
  transition: {
    cubicBezier: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
