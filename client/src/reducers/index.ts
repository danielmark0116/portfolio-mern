import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { generalsReducer } from './generalsReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  generals: generalsReducer
});
