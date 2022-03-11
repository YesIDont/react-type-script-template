import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyles } from 'styles/globalStyles';
import { App } from 'components/App';
import { theme } from 'styles/themeDefault';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.querySelector('#root'),
);
