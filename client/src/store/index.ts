import { createStore, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { rootReducer } from '../reducers/index';
import { ActionTypes } from '../actions/actionTypes';

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk as ThunkMiddleware<AppState, ActionTypes>)
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    //   (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export type AppState = ReturnType<typeof rootReducer>;
