import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

// store
import store from './store';

// component
import App from './component/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


