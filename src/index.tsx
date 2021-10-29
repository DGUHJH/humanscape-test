<<<<<<< HEAD
import store from 'features';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
=======
import React from 'react';
import ReactDOM from 'react-dom';
>>>>>>> eaef5761303bd5542937c4a497e7e448bafd4895
import { BrowserRouter } from 'react-router-dom';
import App from 'router/App';

ReactDOM.render(
<<<<<<< HEAD
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
=======
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
>>>>>>> eaef5761303bd5542937c4a497e7e448bafd4895
  document.getElementById('root')
);
