import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store/index';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import { generalsGetAllThunk } from './actions/generalsActions';
import {
  projectsGetOnlyPublishedThunk,
  projectsGetOneByIdThunk,
  projectsPublishOneThunk,
  projectsDeleteByIdThunk,
  projectsGetAllThunk
} from './actions/projectsActions';
import { postsGetAllThunk, postsGetOneByIdThunk } from './actions/postsActions';

const Root = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(generalsGetAllThunk());

store.dispatch(projectsGetOnlyPublishedThunk());

store.dispatch(projectsGetOneByIdThunk('5da0f736caa7cc0a2114d75f'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
