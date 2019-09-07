import * as actionTypes from '../types/action';
import { ClifeAction } from '../actions';
import { getWindowSize } from '../utils/sizeLib';
import { AppState } from '../types/states';

const windowSize = getWindowSize();
const initiasState = {windowX: windowSize.x, windowY: windowSize.y};

const app = (state: AppState=initiasState, action: ClifeAction): AppState=>{
    if(action.type===actionTypes.SCREEN_SIZE_CHANGED){
        const {x,y} = action.size;
        return {...state, windowX: x, windowY: y};
    }
    return state;
};

export default app;
