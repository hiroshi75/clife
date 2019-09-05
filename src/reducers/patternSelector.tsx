import * as actionTypes from '../types/actionTypes';
import { ClifeAction } from '../actions';

const initialState = {
    pattern:-1
};
const patternSelector = (state = initialState, action: ClifeAction)=>{
    // Nothing here, for now.
    return state;
};

export default patternSelector;
