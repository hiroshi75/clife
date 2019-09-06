import { combineReducers } from 'redux';
import hover from './hover';
import field from './field';
import app from './app';
import controlButtons from './controlButtons';
import patternSelector from './patternSelector';

export const rootReducer = combineReducers({
    field,
    hover,
    controlButtons,
    patternSelector,
    app
  });

export type StoreState = ReturnType<typeof rootReducer>

export default rootReducer;


