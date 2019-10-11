import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { generalsReducer } from './generalsReducer';
import { projectsReducer } from './projectsReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  generals: generalsReducer,
  projects: projectsReducer
});
