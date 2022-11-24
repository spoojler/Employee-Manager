import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ScopedCssBaseline, ThemeProvider } from '@mui/material';
import theme from './common/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ScopedCssBaseline enableColorScheme>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ScopedCssBaseline>
);
