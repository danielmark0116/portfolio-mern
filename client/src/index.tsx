import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import Cookie from 'js-cookie';

const Root = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Cookie.set('test', 'test value');

// console.log(Cookie.get('test'));
