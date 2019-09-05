import { combineReducers } from 'redux';
import hover from './hover';
import field from './field';
import cells from './cells';
import controlButtons from './controlButtons';
import patternSelector from './patternSelector';

export const rootReducer = combineReducers({
    field,
    cells,
    hover,
    controlButtons,
    patternSelector
  });

export type StoreState = ReturnType<typeof rootReducer>

export default rootReducer;


