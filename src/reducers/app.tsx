import * as actionTypes from '../types/actionTypes';
import { ClifeAction, ScreenSizeChanged } from '../actions';
import { AppState, RECT_SIZE } from '../types';
import getGridsize from '../utils/GetGridSize';


const getWindowSize = ()=>({
    windowX: document.documentElement.clientWidth,
    windowY: document.documentElement.clientHeight
});

const initiasState = getWindowSize();


const app = (state: AppState=initiasState, action: ClifeAction): AppState=>{
    if(action.type===actionTypes.SCREEN_SIZE_CHANGED){
        const {x,y} = action.size;
        return {...state, windowX: x, windowY: y};
    }
    return state;
};

export default app;
